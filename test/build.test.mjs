import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

for (const file of ["index.html", "styles.css", "app.js", "filename-utils.js"]) {
  await access(resolve("dist", file));
}
const html = await readFile(resolve("dist/index.html"), "utf8");
assert.match(html, /href="styles\.css"/);
assert.match(html, /src="app\.js"/);
assert.doesNotMatch(html, /(?:src|href)="\//);
console.log("build output checks passed");
