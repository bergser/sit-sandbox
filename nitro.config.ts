import { defineNitroConfig } from "nitropack/config";
import { LogLevels } from "consola";

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  runtimeConfig: {
    clientId: "",
    clientSecret: "",
    logLevel: LogLevels.info,
  },
});
