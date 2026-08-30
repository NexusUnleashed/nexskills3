import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { performance } from "node:perf_hooks";

const BROWSER_PATHS = [
  process.env.NEXSKILLS_BROWSER,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

const browserPath = await (async () => {
  for (const candidate of BROWSER_PATHS) {
    try {
      await readFile(candidate);
      return candidate;
    } catch {
      // Try the next conventional installation path.
    }
  }
  return false;
})();

if (!browserPath) {
  throw new Error(
    "No Edge/Chrome executable found; set NEXSKILLS_BROWSER to run this benchmark"
  );
}

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const connectCdp = async (url) => {
  const socket = new WebSocket(url);
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  let nextId = 1;
  const pending = new Map();
  const listeners = new Map();
  socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.id) {
      const callback = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        callback.reject(new Error(message.error.message));
      } else {
        callback.resolve(message.result);
      }
      return;
    }
    const callbacks = listeners.get(message.method) ?? [];
    listeners.delete(message.method);
    callbacks.forEach((callback) => callback(message.params));
  });

  return {
    send(method, params = {}) {
      const id = nextId;
      nextId += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
      });
    },
    once(method) {
      return new Promise((resolve) => {
        const callbacks = listeners.get(method) ?? [];
        callbacks.push(resolve);
        listeners.set(method, callbacks);
      });
    },
    close() {
      socket.close();
    },
  };
};

const remotePort = 9223 + Math.floor(Math.random() * 1_000);
const profileDirectory = await mkdtemp(
  path.join(os.tmpdir(), "nexskills-browser-")
);
const browser = spawn(
  browserPath,
  [
    "--headless=new",
    "--disable-background-networking",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-sync",
    "--no-first-run",
    `--remote-debugging-port=${remotePort}`,
    `--user-data-dir=${profileDirectory}`,
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true }
);
const browserExit = new Promise((resolve) => browser.once("exit", resolve));

let cdp;
try {
  let version;
  for (let attempt = 0; attempt < 100; attempt += 1) {
    try {
      const response = await fetch(
        `http://127.0.0.1:${remotePort}/json/version`
      );
      version = await response.json();
      break;
    } catch {
      await delay(100);
    }
  }
  if (!version) {
    throw new Error("Browser DevTools endpoint did not become ready");
  }

  const targets = await (
    await fetch(`http://127.0.0.1:${remotePort}/json/list`)
  ).json();
  const page = targets.find((target) => target.type === "page");
  if (!page) {
    throw new Error("Browser did not create a page target");
  }
  cdp = await connectCdp(page.webSocketDebuggerUrl);
  await cdp.send("Runtime.enable");

  const bundle = await readFile(
    new URL("../dist/nexskills.min.js", import.meta.url),
    "utf8"
  );
  const setup = `
    globalThis.GMCP = {
      Char: { Status: { class: "occultist" } },
      Location: { areaid: 401, area: "the Underworld" }
    };
    globalThis.eventStream = { raiseEvent() {} };
    globalThis.nexusclient = { current_block: [], current_line: { index: 0 } };
  `;
  await cdp.send("Runtime.evaluate", { expression: setup });
  const loaded = await cdp.send("Runtime.evaluate", {
    expression: bundle,
    awaitPromise: true,
  });
  if (loaded.exceptionDetails) {
    throw new Error(loaded.exceptionDetails.text);
  }

  const warmup = Number(process.env.NEXSKILLS_BROWSER_WARMUP ?? 10_000);
  const sampleLines = Number(process.env.NEXSKILLS_BROWSER_LINES ?? 30_000);
  const samples = Number(process.env.NEXSKILLS_BROWSER_SAMPLES ?? 7);
  const benchmarkExpression = `
    (() => {
      const misses = [
        "A quiet breeze passes through the room.",
        "You see exits leading north, southeast, and up.",
        "The time is dawn on the 14th day of Scarlatan.",
        "Health: 100%, mana: 100%, endurance: 100%.",
        "A traveller says, 'The road ahead is clear.'",
        "Nothing noteworthy happens here.",
        "A map marker appears in the distance.",
        "The room is lit by a pale lantern.",
        "You carefully inspect your surroundings.",
        "A bell rings somewhere far away."
      ];
      const hit = "You seize upon the aura of Argwin, and violently twist his left arm out of alignment with the planar norm.";
      const corpora = {
        unmatched: misses,
        eligible5Percent: Array.from({ length: 20 }, (_, index) =>
          index === 19 ? hit : misses[index % misses.length]
        ),
      };
      const run = (corpus, count) => {
        let matched = 0;
        for (let index = 0; index < count; index += 1) {
          if (nexSkills.checkSkills(corpus[index % corpus.length])) matched += 1;
        }
        return matched;
      };
      const measure = (corpus) => {
        run(corpus, ${warmup});
        const timings = [];
        let matched = 0;
        for (let sample = 0; sample < ${samples}; sample += 1) {
          const start = performance.now();
          matched = run(corpus, ${sampleLines});
          timings.push((performance.now() - start) * 1000 / ${sampleLines});
        }
        timings.sort((a, b) => a - b);
        return {
          medianUsPerLine: timings[Math.floor(timings.length / 2)],
          p95UsPerLine: timings[Math.ceil(timings.length * 0.95) - 1],
          matchesPerSample: matched,
        };
      };
      const burst = Array.from({ length: 1000 }, (_, index) =>
        index % 20 === 19 ? hit : misses[index % misses.length]
      );
      const burstStart = performance.now();
      const burstMatches = run(burst, burst.length);
      const burstMilliseconds = performance.now() - burstStart;
      globalThis.__nexskillsBurst = burst;
      return {
        unmatched: measure(corpora.unmatched),
        eligible5Percent: measure(corpora.eligible5Percent),
        burst: { milliseconds: burstMilliseconds, matches: burstMatches },
      };
    })()
  `;
  const measured = await cdp.send("Runtime.evaluate", {
    expression: benchmarkExpression,
    returnByValue: true,
  });
  if (measured.exceptionDetails) {
    throw new Error(measured.exceptionDetails.text);
  }

  await cdp.send("Tracing.start", {
    categories: "devtools.timeline,v8.execute",
    transferMode: "ReturnAsStream",
  });
  await cdp.send("Runtime.evaluate", {
    expression:
      "for (const line of globalThis.__nexskillsBurst) nexSkills.checkSkills(line);",
  });
  const tracingComplete = cdp.once("Tracing.tracingComplete");
  await cdp.send("Tracing.end");
  const { stream } = await tracingComplete;
  let traceBytes = 0;
  while (true) {
    const chunk = await cdp.send("IO.read", { handle: stream });
    traceBytes += chunk.data.length;
    if (chunk.eof) {
      break;
    }
  }
  await cdp.send("IO.close", { handle: stream });

  process.stdout.write(
    `${JSON.stringify(
      {
        browser: version.Browser,
        userAgent: version["User-Agent"],
        jsVersion: version["V8-Version"],
        warmupLines: warmup,
        sampleLines,
        samples,
        results: measured.result.value,
        trace: {
          categories: "devtools.timeline,v8.execute",
          bytesCaptured: traceBytes,
        },
      },
      null,
      2
    )}\n`
  );
} finally {
  if (cdp) {
    await cdp.send("Browser.close").catch(() => {});
  }
  await Promise.race([browserExit, delay(3_000)]);
  if (browser.exitCode === null) {
    browser.kill();
    await Promise.race([browserExit, delay(3_000)]);
  }
  cdp?.close();
  const resolvedProfile = path.resolve(profileDirectory);
  const resolvedTempRoot = `${path.resolve(os.tmpdir())}${path.sep}`;
  if (
    !resolvedProfile.startsWith(resolvedTempRoot) ||
    !path.basename(resolvedProfile).startsWith("nexskills-browser-")
  ) {
    throw new Error(`Refusing to remove unexpected path: ${resolvedProfile}`);
  }
  for (let attempt = 0; attempt < 10; attempt += 1) {
    try {
      await rm(resolvedProfile, { force: true, recursive: true });
      break;
    } catch (error) {
      if (error.code !== "EBUSY" || attempt === 9) {
        throw error;
      }
      await delay(100);
    }
  }
}
