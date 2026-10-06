(() => {
  "use strict";

  const STORAGE_KEY = "melodio-lang";
  const LANGUAGES = ["zh", "en"];
  const HTML_LANG = { zh: "zh-CN", en: "en" };

  const MESSAGES = {
    zh: {
      "language.label": "语言：中文",
      "language.changed": "界面语言：中文",
      "brand.home": "Melodio 首页",
      "theme.choose": "选择视觉主题",
      "theme.label": "主题",
      "skin.stamp": "邮票档案",
      "skin.stamp.desc": "暖纸、铅印与朱红标记",
      "skin.film": "夜航胶片",
      "skin.film.desc": "纯黑银幕与琥珀频谱",
      "skin.glass": "玻璃潮汐",
      "skin.glass.desc": "冰蓝折射与潮汐波形",
      "skin.terminal": "午夜终端",
      "skin.terminal.desc": "磷光字符与单色频谱",
      "skin.riso": "孔版唱片",
      "skin.riso.desc": "蓝红套印与粗粝纸面",
      "skin.carbon": "黑频控制台",
      "skin.carbon.desc": "炭黑平面与双色信号",
      "skin.instrument": "精密器材",
      "skin.instrument.desc": "拉丝金属与实体控制",
      "skin.pulse": "脉冲暖流",
      "skin.pulse.desc": "中性画布与高能波形",
      "skin.prism": "液态棱镜",
      "skin.prism.desc": "空间唱片与折射声场",
      "stage.label": "专辑试听舞台",
      "cover.current": "当前歌曲图片",
      "cover.next": "下一首歌曲图片",
      "tracks.label": "曲目列表",
      "tracks.listLabel": "点击曲目切换歌曲",
      "tracks.hint": "点按曲目播放 · 左右滑动封面切歌",
      "dock.show": "显示控制面板",
      "dock.label": "控制面板",
      "control.prev": "上一首",
      "control.prevTitle": "上一首（←）",
      "control.play": "播放",
      "control.pause": "暂停",
      "control.playTitle": "播放 / 暂停（空格）",
      "control.next": "下一首",
      "control.nextTitle": "下一首（→）",
      "control.volume": "音量",
      "control.import": "导入专辑",
      "control.mapping": "曲目设置",
      "control.appRepo": "打开 APP 版本仓库",
      "control.appVersion": "APP 版本",
      "control.more": "更多控制",
      "control.clean": "干净模式",
      "control.backgroundPlayback": "后台播放",
      "toggle.on": "开",
      "toggle.off": "关",
      "shortcut.play": "空格 播放",
      "shortcut.track": "← / → 切歌",
      "shortcut.theme": "↑ / ↓ 换主题",
      "shortcut.mapping": "G 曲目设置",
      "shortcut.motion": "M 动效",
      "shortcut.hide": "H 隐藏控制",
      "motion.soft": "柔和",
      "motion.rich": "丰富",
      "motion.strong": "强烈",
      "motion.button": "动效：{mode}",
      "motion.buttonShortcut": "动效：{mode} M",
      "motion.changed": "音频响应动效：{mode}",
      "common.close": "关闭",
      "welcome.title": "Melodio 专辑现场展示器",
      "welcome.body": "选择一个包含歌曲和图片的文件夹。支持 MP3、WAV、FLAC、M4A、OGG 等格式；歌曲按 <b>01 歌名.flac</b> 命名时，页面会直接显示“歌名”。",
      "welcome.import": "＋ 导入新专辑",
      "welcome.formatName": "01 歌名.flac",
      "welcome.formatImages": "少图多歌也可用",
      "mapping.title": "曲目与试听起点",
      "mapping.body": "歌名读取自音频文件名，例如 <code>01 歌名.flac</code> → <b>歌名</b>。可逐首指定图片和试听起点。",
      "mapping.close": "关闭映射面板",
      "mapping.autoMap": "按连续章节自动分配",
      "mapping.resetStarts": "全部起点归零",
      "mapping.shortcut": "快捷键 G 打开 / 关闭",
      "mapping.imageFor": "{title} 使用的图片",
      "mapping.noImages": "程序化视觉（当前没有图片素材）",
      "mapping.startLabel": "试听起点",
      "mapping.startFor": "{title} 的试听起点",
      "mapping.startTimeFor": "{title} 的试听起点时间",
      "mapping.startTimeHint": "可输入 01:23.5 或直接输入秒数",
      "mapping.loadingDuration": "读取时长…",
      "mapping.durationUnavailable": "时长不可用",
      "preview.play": "试听",
      "preview.stop": "停止",
      "drop.title": "放下歌曲与图片文件",
      "drop.body": "网页会按文件名前缀自动配对",
      "album.empty": "还没有专辑 · 点下方「＋ 导入新专辑」选择素材文件夹",
      "album.importedMeta": "导入专辑 · {count} 首 · 再次点击载入",
      "album.importedTitle": "导入的专辑",
      "album.importedFallback": "导入专辑",
      "album.selectToDelete": "请先选择要删除的专辑",
      "album.confirmDelete": "确认删除?",
      "album.deleteSelected": "删除所选专辑",
      "album.deleted": "已删除导入专辑",
      "toast.previewFailed": "试听失败：{error}",
      "toast.compressing": "正在压缩 {count} 张视觉素材…",
      "toast.switchFailed": "切歌失败：{error}",
      "toast.cannotPlay": "无法播放：{error}",
      "toast.chooseFolderFirst": "请先选择素材文件夹或导入专辑",
      "toast.playFailed": "播放失败：{error}",
      "toast.backgroundOn": "已允许离开标签页后继续播放",
      "toast.backgroundOff": "离开标签页时将自动暂停",
      "toast.replay": "已回到当前试听起点",
      "toast.skin": "视觉皮肤：{name}",
      "toast.cleanOn": "已进入干净录制模式 · 按 H 恢复控制",
      "toast.cleanOff": "已显示控制面板",
      "toast.loadTracksFirst": "请先载入歌曲和图片",
      "toast.startsReset": "所有歌曲的试听起点已回到 00:00",
      "toast.autoMapped": "已按连续章节重新分配图片",
      "toast.predecoding": "正在预解码 {count} 张图片…",
      "toast.loaded": "已载入 {tracks} 首歌曲 · {images} 张视觉素材 · 图片与下一首音频已预热",
      "toast.manifestInvalid": "album.json 解析失败，已改用自动分配",
      "toast.optimizingImages": "正在为录屏优化 {count} 张图片…",
      "toast.chapterMapped": "{tracks} 首歌 / {images} 张图：已按连续章节分配，可按 G 逐首调整",
      "toast.noImages": "未找到图片：已为每首歌生成程序化视觉底图",
      "toast.deleteFailed": "删除失败：{error}",
      "toast.importedLoadFailed": "导入专辑加载失败：{error}",
      "toast.autoPaused": "页面离开前台，已自动暂停，避免录制错位",
      "toast.audioLoadFailed": "音频加载失败（代码 {code}）",
      "toast.previewLoadFailed": "试听加载失败（代码 {code}）",
      "toast.importFirst": "请先导入专辑：点「＋ 导入新专辑」选择素材文件夹",
      "error.noWebAudio": "当前浏览器不支持 Web Audio API",
      "error.noPlayableTracks": "没有找到可播放的歌曲文件",
      "error.noAudioInFolder": "文件夹中没有识别到 MP3、WAV、M4A、OGG 等音频文件",
      "error.noManifest": "找不到 album.json 或素材清单",
      "error.noAudioFiles": "文件夹中没有音频文件"
    },
    en: {
      "language.label": "Language: English",
      "language.changed": "Interface language: English",
      "brand.home": "Melodio home",
      "theme.choose": "Choose visual theme",
      "theme.label": "Theme",
      "skin.stamp": "Stamp Archive",
      "skin.stamp.desc": "Warm paper, letterpress and vermilion marks",
      "skin.film": "Night Film",
      "skin.film.desc": "Pure black screen and amber spectrum",
      "skin.glass": "Glass Tide",
      "skin.glass.desc": "Ice-blue refraction and tidal waveforms",
      "skin.terminal": "Midnight Terminal",
      "skin.terminal.desc": "Phosphor glyphs and mono spectrum",
      "skin.riso": "Riso Record",
      "skin.riso.desc": "Blue-red overprint on rough paper",
      "skin.carbon": "Carbon Console",
      "skin.carbon.desc": "Charcoal planes and two-tone signals",
      "skin.instrument": "Precision Instrument",
      "skin.instrument.desc": "Brushed metal and tactile controls",
      "skin.pulse": "Warm Pulse",
      "skin.pulse.desc": "Neutral canvas and high-energy waves",
      "skin.prism": "Liquid Prism",
      "skin.prism.desc": "Spatial vinyl and refracted sound field",
      "stage.label": "Album listening stage",
      "cover.current": "Current track artwork",
      "cover.next": "Next track artwork",
      "tracks.label": "Track list",
      "tracks.listLabel": "Select a track to play",
      "tracks.hint": "Tap a track to play · Swipe the cover to switch",
      "dock.show": "Show control panel",
      "dock.label": "Control panel",
      "control.prev": "Previous track",
      "control.prevTitle": "Previous track (←)",
      "control.play": "Play",
      "control.pause": "Pause",
      "control.playTitle": "Play / Pause (Space)",
      "control.next": "Next track",
      "control.nextTitle": "Next track (→)",
      "control.volume": "Volume",
      "control.import": "Import album",
      "control.mapping": "Track settings",
      "control.appRepo": "Open the app version repository",
      "control.appVersion": "App version",
      "control.more": "More controls",
      "control.clean": "Clean mode",
      "control.backgroundPlayback": "Background playback",
      "toggle.on": "On",
      "toggle.off": "Off",
      "shortcut.play": "Space Play",
      "shortcut.track": "← / → Track",
      "shortcut.theme": "↑ / ↓ Theme",
      "shortcut.mapping": "G Track settings",
      "shortcut.motion": "M Motion",
      "shortcut.hide": "H Hide controls",
      "motion.soft": "Soft",
      "motion.rich": "Rich",
      "motion.strong": "Intense",
      "motion.button": "Motion: {mode}",
      "motion.buttonShortcut": "Motion: {mode} M",
      "motion.changed": "Audio-reactive motion: {mode}",
      "common.close": "Close",
      "welcome.title": "Melodio Live Album Showcase",
      "welcome.body": "Choose a folder with songs and images. MP3, WAV, FLAC, M4A, OGG and more are supported; when a song is named like <b>01 Song Title.flac</b>, the page shows “Song Title”.",
      "welcome.import": "＋ Import new album",
      "welcome.formatName": "01 Song Title.flac",
      "welcome.formatImages": "Fewer images than songs is fine",
      "mapping.title": "Tracks & Preview Start",
      "mapping.body": "Titles come from audio file names, e.g. <code>01 Song Title.flac</code> → <b>Song Title</b>. Set the image and preview start for each track.",
      "mapping.close": "Close track settings",
      "mapping.autoMap": "Auto-assign by chapters",
      "mapping.resetStarts": "Reset all start points",
      "mapping.shortcut": "Press G to open / close",
      "mapping.imageFor": "Image for {title}",
      "mapping.noImages": "Procedural art (no images available)",
      "mapping.startLabel": "Preview start",
      "mapping.startFor": "Preview start for {title}",
      "mapping.startTimeFor": "Preview start time for {title}",
      "mapping.startTimeHint": "Enter 01:23.5 or a number of seconds",
      "mapping.loadingDuration": "Reading duration…",
      "mapping.durationUnavailable": "Duration unavailable",
      "preview.play": "Preview",
      "preview.stop": "Stop",
      "drop.title": "Drop songs and images",
      "drop.body": "Files are paired automatically by filename prefix",
      "album.empty": "No albums yet · Click “＋ Import new album” below to choose a folder",
      "album.importedMeta": "Imported album · {count} tracks · Click again to load",
      "album.importedTitle": "Imported album",
      "album.importedFallback": "Imported album",
      "album.selectToDelete": "Select an album to delete first",
      "album.confirmDelete": "Confirm delete?",
      "album.deleteSelected": "Delete selected album",
      "album.deleted": "Imported album deleted",
      "toast.previewFailed": "Preview failed: {error}",
      "toast.compressing": "Compressing {count} visual assets…",
      "toast.switchFailed": "Could not switch track: {error}",
      "toast.cannotPlay": "Cannot play: {error}",
      "toast.chooseFolderFirst": "Choose a media folder or import an album first",
      "toast.playFailed": "Playback failed: {error}",
      "toast.backgroundOn": "Playback will continue when you leave the tab",
      "toast.backgroundOff": "Playback will pause when you leave the tab",
      "toast.replay": "Back to the current preview start",
      "toast.skin": "Visual theme: {name}",
      "toast.cleanOn": "Clean recording mode on · Press H to restore controls",
      "toast.cleanOff": "Controls shown",
      "toast.loadTracksFirst": "Load songs and images first",
      "toast.startsReset": "All preview start points reset to 00:00",
      "toast.autoMapped": "Images reassigned by chapters",
      "toast.predecoding": "Pre-decoding {count} images…",
      "toast.loaded": "Loaded {tracks} tracks · {images} visual assets · Images and next track preloaded",
      "toast.manifestInvalid": "Could not parse album.json; using automatic assignment",
      "toast.optimizingImages": "Optimizing {count} images for recording…",
      "toast.chapterMapped": "{tracks} songs / {images} images: assigned by chapters, press G to adjust each track",
      "toast.noImages": "No images found: generated procedural art for each track",
      "toast.deleteFailed": "Delete failed: {error}",
      "toast.importedLoadFailed": "Failed to load imported album: {error}",
      "toast.autoPaused": "Page moved to background; paused automatically to keep recordings in sync",
      "toast.audioLoadFailed": "Audio failed to load (code {code})",
      "toast.previewLoadFailed": "Preview failed to load (code {code})",
      "toast.importFirst": "Import an album first: click “＋ Import new album” to choose a folder",
      "error.noWebAudio": "This browser does not support the Web Audio API",
      "error.noPlayableTracks": "No playable song files found",
      "error.noAudioInFolder": "No MP3, WAV, M4A, OGG or other audio files found in the folder",
      "error.noManifest": "Could not find album.json or a file listing",
      "error.noAudioFiles": "No audio files in the folder"
    }
  };

  function normalize(value) {
    const code = String(value || "").toLowerCase();
    if (code.startsWith("zh")) return "zh";
    if (code.startsWith("en")) return "en";
    return null;
  }

  function detectLanguage() {
    const fromQuery = normalize(new URLSearchParams(location.search).get("lang"));
    if (fromQuery) return fromQuery;
    try {
      const stored = normalize(localStorage.getItem(STORAGE_KEY));
      if (stored) return stored;
    } catch (_) {}
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const code of preferred) {
      const match = normalize(code);
      if (match) return match;
    }
    return "en";
  }

  let language = detectLanguage();

  function t(key, vars = {}) {
    const template = MESSAGES[language][key] ?? MESSAGES.zh[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? String(vars[name]) : match));
  }

  function varsOf(el) {
    if (!el.dataset.i18nVars) return {};
    try { return JSON.parse(el.dataset.i18nVars); } catch (_) { return {}; }
  }

  /** 按 data-i18n / data-i18n-html / data-i18n-attr 刷新静态文案;html 只用于词典内的受信任标记 */
  function apply(root = document) {
    document.documentElement.lang = HTML_LANG[language];
    root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n, varsOf(el)); });
    root.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      for (const pair of el.dataset.i18nAttr.split(";")) {
        const [attr, key] = pair.split(":").map((part) => part.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      }
    });
  }

  function setLanguage(next) {
    const match = normalize(next);
    if (!match) return language;
    language = match;
    try { localStorage.setItem(STORAGE_KEY, language); } catch (_) {}
    apply();
    return language;
  }

  function nextLanguage() {
    return LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length];
  }

  window.MelodioI18n = {
    t,
    apply,
    setLanguage,
    nextLanguage,
    get language() { return language; }
  };
})();
