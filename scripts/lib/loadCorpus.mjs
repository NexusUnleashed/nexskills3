import { createServer } from "vite";

export const loadModules = async (...modulePaths) => {
  const server = await createServer({
    appType: "custom",
    logLevel: "error",
    server: { hmr: { port: 0 }, middlewareMode: true },
  });

  try {
    return await Promise.all(
      modulePaths.map((modulePath) => server.ssrLoadModule(modulePath))
    );
  } finally {
    await server.close();
  }
};

export const loadCorpus = async () => {
  const [corpus] = await loadModules("/src/base/definitionCorpus.js");
  return corpus;
};
