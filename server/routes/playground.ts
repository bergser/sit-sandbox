export default eventHandler((event) => {
  const config = useRuntimeConfig();
  return sendRedirect(event, `https://play.vuejs.org/${config.playground}`);
});
