const assert = require("node:assert/strict");
const { stripPictureBlocks } = require("../flac-utils.js");

const streamInfo = new Uint8Array(34);
const picture = new Uint8Array([0, 0, 0, 3, 0, 0, 0, 0]);
const block = (type, payload, last = false) => {
  const header = new Uint8Array(4);
  header[0] = (last ? 0x80 : 0) | type;
  header[1] = (payload.length >>> 16) & 0xff;
  header[2] = (payload.length >>> 8) & 0xff;
  header[3] = payload.length & 0xff;
  return new Uint8Array([...header, ...payload]);
};
const source = new Uint8Array([
  ...Buffer.from("fLaC"),
  ...block(0, streamInfo),
  ...block(6, picture, true),
  0x12, 0x34, 0x56
]);

const cleaned = stripPictureBlocks(source);
assert.ok(cleaned);
assert.deepEqual([...cleaned.subarray(0, 4)], [...Buffer.from("fLaC")]);
assert.equal(cleaned[4], 0x80);
assert.equal((cleaned[5] << 16) | (cleaned[6] << 8) | cleaned[7], 34);
assert.deepEqual([...cleaned.slice(-3)], [0x12, 0x34, 0x56]);
assert.equal(stripPictureBlocks(new Uint8Array([...Buffer.from("fLaC"), ...block(0, streamInfo, true)])), null);

console.log("FLAC metadata checks passed");
