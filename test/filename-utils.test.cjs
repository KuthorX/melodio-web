const assert = require("node:assert/strict");
const { extension, pairingKey, titleFromFilename } = require("../filename-utils.js");

assert.equal(extension("01 Future.Dream.FLAC"), "flac");
assert.equal(pairingKey("01 Future Dream.wav"), pairingKey("01-cover.webp"));
assert.equal(pairingKey("009_track.wav"), "n:0009");
assert.equal(pairingKey("Future_Dream.wav"), pairingKey("future-dream.jpg"));
assert.equal(titleFromFilename("01 未来梦地图.wav"), "未来梦地图");
assert.equal(titleFromFilename("12. Sunday_Noon.mp3"), "Sunday Noon");

console.log("filename pairing checks passed");
