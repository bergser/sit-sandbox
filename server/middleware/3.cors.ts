export default eventHandler((event) => {
  event.headers.append("Access-Control-Allow-Origin", "https://play.vuejs.org");
  event.headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
});
