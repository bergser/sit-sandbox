import { version, name } from "../../package.json";
export default eventHandler((event) => {
  return `
      <meta charset="utf-8">
      <p>${name}: ${version}</p>
    `;
});
