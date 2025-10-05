export default eventHandler((event) => {
  const config = useRuntimeConfig();
  return sendRedirect(event, config.playground);
});
