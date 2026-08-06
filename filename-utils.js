(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MelodioFilename = api;
})(typeof globalThis === "object" ? globalThis : this, function () {
  "use strict";

  function extension(name) {
    const match = String(name).toLowerCase().match(/\.([a-z0-9]+)$/);
    return match ? match[1] : "";
  }

  function stem(name) {
    return String(name).replace(/\.[^.]+$/, "");
  }

  function pairingKey(name) {
    const base = stem(name).trim().toLowerCase();
    const leading = base.match(/^\s*(\d{1,4})/);
    if (leading) return `n:${String(Number(leading[1])).padStart(4, "0")}`;
    return `s:${base.replace(/[\s_-]+/g, " ")}`;
  }

  function titleFromFilename(name) {
    const base = stem(name).trim();
    const numbered = base.match(/^\s*\d{1,4}(?:\s+|[._\-、—–]+\s*)(.+?)\s*$/);
    const title = (numbered?.[1] || base).replace(/_+/g, " ").replace(/\s{2,}/g, " ").trim();
    return title || base;
  }

  return { extension, pairingKey, titleFromFilename };
});
