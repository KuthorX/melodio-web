(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MelodioFlac = api;
})(typeof globalThis === "object" ? globalThis : this, function () {
  "use strict";

  function concat(parts) {
    const result = new Uint8Array(parts.reduce((size, part) => size + part.length, 0));
    let offset = 0;
    for (const part of parts) { result.set(part, offset); offset += part.length; }
    return result;
  }

  /** Chromium rejects some local FLAC files with malformed attached-picture metadata. */
  function stripPictureBlocks(buffer) {
    const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    if (bytes.length < 8 || String.fromCharCode(...bytes.subarray(0, 4)) !== "fLaC") return null;
    const blocks = [];
    let offset = 4;
    while (offset + 4 <= bytes.length) {
      const header = bytes[offset];
      const type = header & 0x7f;
      const length = (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3];
      const end = offset + 4 + length;
      if (end > bytes.length) return null;
      blocks.push({ header, type, start: offset + 4, end });
      offset = end;
      if (header & 0x80) break;
    }
    if (!blocks.length || !blocks.some((block) => block.type === 6)) return null;
    const kept = blocks.filter((block) => block.type !== 6);
    if (!kept.length) return null;
    const metadata = kept.map((block, index) => {
      const payload = bytes.subarray(block.start, block.end);
      const header = new Uint8Array([((index === kept.length - 1) ? 0x80 : 0) | block.type, (payload.length >>> 16) & 0xff, (payload.length >>> 8) & 0xff, payload.length & 0xff]);
      return concat([header, payload]);
    });
    return concat([bytes.subarray(0, 4), ...metadata, bytes.subarray(offset)]);
  }

  async function sanitizeFlacFile(file) {
    if (!/\.flac$/i.test(file.name || "")) return file;
    try {
      const stripped = stripPictureBlocks(new Uint8Array(await file.arrayBuffer()));
      return stripped ? new Blob([stripped], { type: file.type || "audio/flac" }) : file;
    } catch (_) { return file; }
  }

  return { stripPictureBlocks, sanitizeFlacFile };
});
