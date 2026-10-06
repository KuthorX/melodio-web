const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const vm = require("node:vm");

const source = readFileSync(resolve(__dirname, "../i18n.js"), "utf8");

function load({ search = "", stored = null, languages = ["zh-CN"] } = {}) {
  const storage = new Map(stored ? [["melodio-lang", stored]] : []);
  const window = {};
  const context = {
    window,
    location: { search },
    navigator: { languages, language: languages[0] },
    localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
    document: { documentElement: {}, querySelectorAll: () => [] },
    URLSearchParams
  };
  vm.runInNewContext(source, context);
  return { i18n: window.MelodioI18n, storage, document: context.document };
}

assert.equal(load({ languages: ["zh-TW"] }).i18n.language, "zh");
assert.equal(load({ languages: ["en-US"] }).i18n.language, "en");
assert.equal(load({ languages: ["fr-FR"] }).i18n.language, "en");
assert.equal(load({ languages: ["en-US"], stored: "zh" }).i18n.language, "zh");
assert.equal(load({ search: "?lang=en", stored: "zh" }).i18n.language, "en");

const { i18n, storage, document } = load({ languages: ["en-US"] });
assert.equal(i18n.t("toast.loaded", { tracks: 3, images: 2 }), "Loaded 3 tracks · 2 visual assets · Images and next track preloaded");
assert.equal(i18n.t("missing.key"), "missing.key");
assert.equal(i18n.nextLanguage(), "zh");
i18n.setLanguage("zh");
assert.equal(i18n.language, "zh");
assert.equal(storage.get("melodio-lang"), "zh");
assert.equal(document.documentElement.lang, "zh-CN");
assert.equal(i18n.t("control.play"), "播放");

const MESSAGES = extractMessages();
const zhKeys = Object.keys(MESSAGES.zh);
const enKeys = Object.keys(MESSAGES.en);
assert.deepEqual([...enKeys].sort(), [...zhKeys].sort(), "zh and en dictionaries must have the same keys");

const html = readFileSync(resolve(__dirname, "../index.html"), "utf8");
const usedKeys = [
  ...[...html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)].map((match) => match[1]),
  ...[...html.matchAll(/data-i18n-attr="([^"]+)"/g)].flatMap((match) => match[1].split(";").map((pair) => pair.split(":")[1]))
];
const appKeys = [...readFileSync(resolve(__dirname, "../app.js"), "utf8").matchAll(/\bt\("([\w.]+)"/g)].map((match) => match[1]);
for (const key of [...usedKeys, ...appKeys]) assert.ok(enKeys.includes(key), `missing translation: ${key}`);

function extractMessages() {
  const window = {};
  vm.runInNewContext(source.replace("window.MelodioI18n = {", "window.MESSAGES = MESSAGES;\n  window.MelodioI18n = {"), {
    window, location: { search: "" }, navigator: { languages: ["en"] }, localStorage: { getItem: () => null }, URLSearchParams
  });
  return window.MESSAGES;
}

console.log("i18n checks passed");
