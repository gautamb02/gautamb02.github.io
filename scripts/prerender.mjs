import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const { render } = await import(path.join(root, "dist-ssr/entry-server.js"));

const templatePath = path.join(root, "dist/index.html");
const template = fs.readFileSync(templatePath, "utf-8");
const appHtml = render();

const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
fs.writeFileSync(templatePath, finalHtml);

console.log(`Prerendered ${appHtml.length} chars of markup into dist/index.html`);
