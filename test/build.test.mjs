import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

for (const file of ["index.html", "tokens.css", "styles.css", "app.js", "i18n.js", "filename-utils.js", "manifest.webmanifest", "service-worker.js", "icons/icon-192.png", "icons/icon-512.png", "skins/poster.css", "skins/obi.css", "skins/gallery.css", "skins/liner.css"]) {
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
for (const skin of ["poster", "obi", "gallery", "liner"]) {
  assert.match(html, new RegExp(`data-set-skin="${skin}"`));
  assert.match(html, new RegExp(`href="skins/${skin}\\.css"`));
}
assert.match(html, /id="backgroundPlaybackBtn"/);
assert.match(css, /max-height:\s*min\(60vh, 30rem\)/);
assert.match(css, /overflow-y:\s*auto/);
assert.match(app, /scrollIntoView\(\{ block: "nearest" \}\)/);
assert.match(html, /value="flac"|\.flac/);
assert.match(html, /src="app\.js"/);
assert.match(html, /src="i18n\.js"/);
assert.ok(html.indexOf('src="i18n.js"') < html.indexOf('src="app.js"'), "i18n.js must load before app.js");
assert.match(html, /id="languageBtn"/);
assert.match(html, /rel="manifest" href="manifest\.webmanifest"/);
assert.match(html, /name="theme-color"/);
assert.match(app, /navigator\.serviceWorker\.register\("service-worker\.js"\)/);
assert.doesNotMatch(html, /(?:src|href)="\//);
const manifest = JSON.parse(await readFile(resolve("dist/manifest.webmanifest"), "utf8"));
assert.equal(manifest.display, "standalone");
assert.equal(manifest.start_url, "./");
assert.deepEqual(manifest.icons.map(({ sizes }) => sizes), ["192x192", "512x512"]);
const worker = await readFile(resolve("dist/service-worker.js"), "utf8");
for (const asset of ["./index.html", "./styles.css", "./app.js", "./i18n.js", "./manifest.webmanifest"]) {
  assert.match(worker, new RegExp(asset.replaceAll(".", "\\.")));
}
assert.match(worker, /url\.pathname\.includes\("\/import\/"\)/);
assert.match(worker, /name\.startsWith\(CACHE_PREFIX\)/);
console.log("build output checks passed");
