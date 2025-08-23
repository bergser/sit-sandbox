export default eventHandler((event) => {
  setResponseHeaders(event, {
    "Access-Control-Allow-Origin": "https://play.vuejs.org", // Or specify your origin
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
});
