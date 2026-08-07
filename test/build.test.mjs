import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

for (const file of ["index.html", "tokens.css", "styles.css", "app.js", "filename-utils.js"]) {
  await access(resolve("dist", file));
}
const html = await readFile(resolve("dist/index.html"), "utf8");
const css = await readFile(resolve("dist/styles.css"), "utf8");
const app = await readFile(resolve("dist/app.js"), "utf8");
assert.match(html, /href="styles\.css"/);
assert.match(html, /href="tokens\.css"/);
assert.match(html, /id="themeMenu"/);
assert.match(html, /data-set-skin="terminal"/);
assert.match(html, /data-set-skin="riso"/);
assert.match(html, /data-set-skin="prism"/);
assert.match(html, /id="backgroundPlaybackBtn"/);
assert.match(css, /max-height:\s*min\(60vh, 30rem\)/);
assert.match(css, /overflow-y:\s*auto/);
assert.match(app, /scrollIntoView\(\{ block: "nearest" \}\)/);
assert.match(html, /value="flac"|\.flac/);
assert.match(html, /src="app\.js"/);
assert.doesNotMatch(html, /(?:src|href)="\//);
console.log("build output checks passed");
