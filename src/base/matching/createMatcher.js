import {
  MATCH_FIRST,
  MATCH_TYPE_NAMES,
  MATCHER_EXACT,
  MATCHER_REGEX,
  MATCHER_SEQUENCE,
} from "./entryCompilation";
import { findCandidateMatch } from "./candidateIndex";
import { createLiteralMatch } from "./patternCompilation";

const DEFAULT_LOCATION = Object.freeze({});

const createEnvironment = (environment) => ({
  getRawClass:
    environment?.getRawClass ??
    (() => globalThis.GMCP?.Char?.Status?.class ?? ""),
  getLocation:
    environment?.getLocation ??
    (() => globalThis.GMCP?.Location ?? DEFAULT_LOCATION),
  getLaterLineText:
    environment?.getLaterLineText ??
    ((offset) => {
      const client = globalThis.nexusclient;
      const line =
        client?.current_block?.[client.current_line?.index + offset];
      return line?.parsed_line?.text?.();
    }),
  raiseEvent:
    environment?.raiseEvent ??
    ((name, payload) => globalThis.eventStream.raiseEvent(name, payload)),
  reportReactionError:
    environment?.reportReactionError ??
    ((action, error) => {
      console.error(
        "nexSkills reaction error:\nskill: %s\nid: %s\nline: %s\nerror: %o",
        action.skill,
        action.id,
        action.originalLine,
        error
      );
    }),
});

const matchElement = (element, text) => {
  if (element.kind === MATCHER_EXACT) {
    return text === element.text ? createLiteralMatch(text) : false;
  }

  element.regex.lastIndex = 0;
  return element.regex.exec(text);
};

const cloneAndProcessMatch = (result, entry) => {
  const baseAction = entry.def;
  const action = {
    ...baseAction,
    affs: baseAction.affs ? [...baseAction.affs] : [],
    tags: baseAction.tags ? [...baseAction.tags] : [],
  };
  const { groups } = result;

  action.matchType = MATCH_TYPE_NAMES[entry.matchTypeIdx];
  action.user = groups?.user || entry.defaultUser;
  action.target = groups?.target || entry.defaultTarget;
  action.info = groups?.info || action.info;
  action.limb = groups?.limb || false;
  action.originalLine = result[0];
  action.match = result;
  return action;
};

export const createMatcher = (registry, environment) => {
  const host = createEnvironment(environment);
  const actionIndexes = new Map();

  let activeRawClass;
  let activeActionIndex = false;
  let activeAreaId;
  let activeAreaName;
  let activeAreaKey;
  let activeNpcRecord = registry.emptyAreaRecord;

  const getActionIndex = () => {
    const rawClass = host.getRawClass();
    if (rawClass === activeRawClass && activeActionIndex) {
      return activeActionIndex;
    }

    activeRawClass = rawClass;
    const normalized = String(rawClass ?? "").toLowerCase();
    let index = actionIndexes.get(normalized);
    if (!index) {
      index = registry.buildActionIndex(normalized);
      actionIndexes.set(normalized, index);
    }
    activeActionIndex = index;
    return index;
  };

  const resolveAreaRecord = () => {
    const location = host.getLocation();
    const areaId = location.areaid;
    const areaName = location.area;
    if (areaId === activeAreaId && areaName === activeAreaName) {
      return activeNpcRecord;
    }

    activeAreaId = areaId;
    activeAreaName = areaName;
    const key = registry.hasArea(areaId) ? areaId : areaName;
    if (key === activeAreaKey) {
      return activeNpcRecord;
    }

    const previous = activeAreaKey;
    activeAreaKey = key;
    activeNpcRecord = registry.getAreaRecord(key);
    host.raiseEvent("nexskill.area.changed", {
      area: key,
      previous,
      npcs: activeNpcRecord.npcs,
    });
    return activeNpcRecord;
  };

  const evaluateEntry = (entry, text) => {
    if (entry.gate && !text.startsWith(entry.gate)) {
      return false;
    }
    if (entry.sub && !text.includes(entry.sub)) {
      return false;
    }

    let result;
    if (entry.matcherKind === MATCHER_EXACT) {
      result = createLiteralMatch(text);
    } else if (entry.matcherKind === MATCHER_REGEX) {
      result = matchElement(entry.pattern, text);
    } else if (entry.matcherKind === MATCHER_SEQUENCE) {
      const elements = entry.pattern;
      let index = 0;
      if (entry.exactText !== false) {
        result = createLiteralMatch(text);
        index = 1;
      }

      for (; index < elements.length; index += 1) {
        const lineText = index === 0 ? text : host.getLaterLineText(index);
        if (lineText === undefined) {
          return false;
        }
        result = matchElement(elements[index], lineText);
        if (!result) {
          return false;
        }
      }
    }

    return result ? cloneAndProcessMatch(result, entry) : false;
  };

  const finalizeCheck = (action, type = false) => {
    if (action.reaction) {
      try {
        action.reaction(action);
      } catch (error) {
        host.reportReactionError(action, error);
        host.raiseEvent("nexskill.error.reaction", { action, error });
      }
    }

    if (!action.matchType) {
      host.raiseEvent("nexskill.match.voided", action);
      return false;
    }

    host.raiseEvent("nexskill.match", action);
    if (type === "npc") {
      host.raiseEvent("nexskill.match.npc", action);
      return action;
    }

    host.raiseEvent("nexskill.match.skill", action);
    if (!action.eventSkill) {
      return action;
    }

    host.raiseEvent(action.eventSkill, action);
    const eventAction =
      action.id === action.eventActionId
        ? action.eventAction
        : `${action.eventSkill}.${action.id}`;
    if (eventAction) {
      host.raiseEvent(eventAction, action);
    }
    return action;
  };

  const checkNpcs = (text) => {
    const record = resolveAreaRecord();
    const action = findCandidateMatch(record.index, text, evaluateEntry);
    return action ? finalizeCheck(action, "npc") : false;
  };

  const checkSkills = (text) => {
    const action = findCandidateMatch(getActionIndex(), text, evaluateEntry);
    if (action) {
      if (
        action.matchType === MATCH_TYPE_NAMES[MATCH_FIRST] &&
        action.target.toLowerCase() === "you"
      ) {
        action.target = "self";
      }
      return finalizeCheck(action);
    }
    return checkNpcs(text);
  };

  return Object.freeze({ checkSkills, checkNpcs });
};
