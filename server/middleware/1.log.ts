import { createConsola } from "consola";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  event.context.log = createConsola({ level: config.logLevel });
});
