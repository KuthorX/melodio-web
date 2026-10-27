const assert = require("node:assert/strict");
const { packFiles, unpackFiles } = require("../album-store.js");

const source = new File(["flac bytes"], "01 song.flac", { type: "audio/flac", lastModified: 123 });
Object.defineProperty(source, "webkitRelativePath", { value: "album/01 song.flac" });
const [packed] = packFiles([source]);
const [restored] = unpackFiles({ files: [packed] });

assert.equal(packed.relativePath, "album/01 song.flac");
assert.equal(restored.name, source.name);
assert.equal(restored.type, source.type);
assert.equal(restored.lastModified, source.lastModified);
assert.equal(restored.webkitRelativePath, source.webkitRelativePath);
assert.equal(restored.size, source.size);
console.log("album cache file checks passed");
