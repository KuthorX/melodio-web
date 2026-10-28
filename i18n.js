(() => {
  "use strict";

  const STORAGE_KEY = "melodio-lang";
  const LANGUAGES = ["zh", "en", "fr", "ru", "es", "ja", "ko"];
  const HTML_LANG = {
    zh: "zh-CN", en: "en", fr: "fr", ru: "ru", es: "es", ja: "ja", ko: "ko"
  };

  const MESSAGES = {
    zh: {
      "mapping.globalCover": "全局封面",
      "mapping.keepPerTrack": "选择图片，应用到全部曲目",
      "mapping.uploadCover": "选择新图片",
      "mapping.globalCoverHint": "应用到当前专辑全部曲目，之后仍可逐首调整。",
      "album.localNotice": "专辑文件与配置仅保存在此浏览器，不上传。清除网站数据或浏览器回收存储会删除历史。",
      "album.cachedTitle": "历史专辑",
      "album.cachedMeta": "本地缓存 · {count} 首 · {size} MB",
      "album.cacheMissing": "缓存已不存在，请重新导入原文件夹",
      "album.loadSelected": "载入所选专辑",
      "album.saving": "正在保存到此浏览器，请稍候…",
      "album.saved": "文件与配置已保存在此浏览器，下次可直接载入。",
      "album.cacheFailed": "未能保存历史，当前仍可播放；请释放空间并重新导入。",
      "album.sessionOnly": "历史已删除，当前会话仍可播放。",
      "toast.globalCover": "已为全部曲目设置封面：{name}",
      "toast.cacheFailed": "浏览器缓存不可用或空间不足，未保存历史；当前专辑仍可播放。",
      "toast.cachedLoaded": "已从本地缓存恢复专辑与设置",
      "toast.cachedLoadFailed": "历史专辑载入失败：{error}",
      "error.invalidImage": "无法读取这张图片，请选择有效的图片文件",

      "language.label": "语言",
      "language.choose": "选择语言",
      "language.zh": "中文", "language.en": "English", "language.fr": "Français", "language.ru": "Русский", "language.es": "Español", "language.ja": "日本語", "language.ko": "한국어",
      "language.changed": "界面语言：中文",
      "brand.home": "Melodio 首页",
      "theme.choose": "选择视觉主题",
      "theme.label": "主题",
      "skin.poster": "瑞士海报",
      "skin.poster.desc": "巨字回声与严格网格",
      "skin.obi": "侧封腰带",
      "skin.obi.desc": "竖排书脊与朱印编号",
      "skin.gallery": "画廊白墙",
      "skin.gallery.desc": "留白挂画与展签",
      "skin.liner": "内页小册",
      "skin.liner.desc": "对开书页与衬线曲目",
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
      "control.import": "专辑库",
      "control.mapping": "曲目设置",
      "control.appRepo": "打开 APP 版本仓库",
      "control.appVersion": "APP 版本",
      "control.more": "更多控制",
      "control.clean": "沉浸模式",
      "motion.label": "动效",
      "control.backgroundPlayback": "后台播放",
      "control.duotone": "封面双色调",
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
      "mapping.title": "曲目与试听区间",
      "mapping.body": "歌名读取自音频文件名，例如 <code>01 歌名.flac</code> → <b>歌名</b>。可逐首指定图片和试听区间。",
      "mapping.close": "关闭映射面板",
      "mapping.autoMap": "按连续章节自动分配",
      "mapping.resetStarts": "全部起点归零",
      "mapping.resetEnds": "全部终点归零",
      "mapping.shortcut": "快捷键 G 打开 / 关闭",
      "mapping.imageFor": "{title} 使用的图片",
      "mapping.noImages": "程序化视觉（当前没有图片素材）",
      "mapping.startLabel": "试听起点",
      "mapping.endLabel": "试听终点",
      "mapping.startFor": "{title} 的试听起点",
      "mapping.endFor": "{title} 的试听终点",
      "mapping.startTimeFor": "{title} 的试听起点时间",
      "mapping.endTimeFor": "{title} 的试听终点时间",
      "mapping.startTimeHint": "可输入 01:23.5 或直接输入秒数",
      "mapping.endTimeHint": "可输入 02:34.5 或直接输入秒数",
      "mapping.loadingDuration": "读取时长…",
      "mapping.durationUnavailable": "时长不可用",
      "mapping.rangeLabel": "试听区间",
      "mapping.rangeHint": "拖动两端或使用方向键 · Home / End 到两端",
      "mapping.startPoint": "试听起点",
      "mapping.startShort": "起",
      "mapping.endShort": "终",
      "mapping.endPoint": "试听终点",
      "mapping.nudgeBack": "微调{point} −5 秒",
      "mapping.nudgeForward": "微调{point} +5 秒",
      "track.previewDuration": "试听 {duration}",
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
      "album.deleteSelected": "删除所选历史",
      "album.deleted": "已删除历史缓存，原文件不受影响",
      "toast.previewFailed": "试听失败：{error}",
      "toast.compressing": "正在压缩 {count} 张视觉素材…",
      "toast.switchFailed": "切歌失败：{error}",
      "toast.cannotPlay": "无法播放：{error}",
      "toast.chooseFolderFirst": "请先选择素材文件夹或导入专辑",
      "toast.playFailed": "播放失败：{error}",
      "toast.backgroundOn": "已允许离开标签页后继续播放",
      "toast.backgroundOff": "离开标签页时将自动暂停",
      "toast.duotoneOn": "封面以双色调显示（不修改原图）",
      "toast.duotoneOff": "封面恢复原色",
      "toast.replay": "已回到当前试听起点",
      "toast.skin": "视觉皮肤：{name}",
      "toast.cleanOn": "已进入沉浸模式 · 按 H 恢复控制",
      "toast.cleanOff": "已显示控制面板",
      "toast.loadTracksFirst": "请先载入歌曲和图片",
      "toast.startsReset": "所有歌曲的试听起点已回到 00:00",
      "toast.endsReset": "所有歌曲的试听终点已恢复为原曲结尾",
      "toast.autoMapped": "已按连续章节重新分配图片",
      "toast.predecoding": "正在预解码 {count} 张图片…",
      "toast.loaded": "已载入 {tracks} 首歌曲 · {images} 张视觉素材 · 图片与下一首音频已预热",
      "toast.manifestInvalid": "album.json 解析失败，已改用自动分配",
      "toast.optimizingImages": "正在为录屏优化 {count} 张图片…",
      "toast.chapterMapped": "{tracks} 首歌 / {images} 张图：已按连续章节分配，可按 G 逐首调整",
      "toast.noImages": "未找到图片：已为每首歌生成程序化视觉底图",
      "toast.deleteFailed": "删除失败：{error}",
      "toast.importedLoadFailed": "导入专辑加载失败：{error}",
      "toast.autoPaused": "页面离开前台，已自动暂停，避免播放错位",
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
      "mapping.globalCover": "Album-wide cover",
      "mapping.keepPerTrack": "Choose an image for all tracks",
      "mapping.uploadCover": "Choose new image",
      "mapping.globalCoverHint": "Applies to every track in this album. You can still change individual tracks afterward.",
      "album.localNotice": "Files and settings stay in this browser, never uploaded. Clearing site data or browser storage eviction removes your library.",
      "album.cachedTitle": "Saved album",
      "album.cachedMeta": "Cached locally · {count} tracks · {size} MB",
      "album.cacheMissing": "Cache missing. Import the original folder again.",
      "album.loadSelected": "Load selected album",
      "album.saving": "Saving in this browser. Please wait…",
      "album.saved": "Files and settings saved in this browser, ready to load next time.",
      "album.cacheFailed": "History could not be saved. Playback still works; free up space and import again.",
      "album.sessionOnly": "History removed. This session can still play.",
      "toast.globalCover": "Cover applied to all tracks: {name}",
      "toast.cacheFailed": "Browser storage is unavailable or full. History was not saved; playback still works.",
      "toast.cachedLoaded": "Album and settings restored from local cache",
      "toast.cachedLoadFailed": "Could not load saved album: {error}",
      "error.invalidImage": "Could not read this image. Choose a valid image file.",

      "language.label": "Language",
      "language.choose": "Choose language",
      "language.zh": "中文", "language.en": "English", "language.fr": "Français", "language.ru": "Русский", "language.es": "Español", "language.ja": "日本語", "language.ko": "한국어",
      "language.changed": "Interface language: English",
      "brand.home": "Melodio home",
      "theme.choose": "Choose visual theme",
      "theme.label": "Theme",
      "skin.poster": "Swiss Poster",
      "skin.poster.desc": "Echoing giant type on a strict grid",
      "skin.obi": "Obi Strip",
      "skin.obi.desc": "Vertical spine type and a vermilion stamp",
      "skin.gallery": "Gallery Wall",
      "skin.gallery.desc": "Hung like a print, labelled like a museum",
      "skin.liner": "Liner Notes",
      "skin.liner.desc": "Booklet spread with a serif track list",
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
      "control.import": "Album library",
      "control.mapping": "Track settings",
      "control.appRepo": "Open the app version repository",
      "control.appVersion": "App version",
      "control.more": "More controls",
      "control.clean": "Immersive mode",
      "motion.label": "Motion",
      "control.backgroundPlayback": "Background playback",
      "control.duotone": "Duotone cover",
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
      "mapping.title": "Tracks & Preview Range",
      "mapping.body": "Titles come from audio file names, e.g. <code>01 Song Title.flac</code> → <b>Song Title</b>. Set the image and preview range for each track.",
      "mapping.close": "Close track settings",
      "mapping.autoMap": "Auto-assign by chapters",
      "mapping.resetStarts": "Reset all start points",
      "mapping.resetEnds": "Reset all end points",
      "mapping.shortcut": "Press G to open / close",
      "mapping.imageFor": "Image for {title}",
      "mapping.noImages": "Procedural art (no images available)",
      "mapping.startLabel": "Preview start",
      "mapping.endLabel": "Preview end",
      "mapping.startFor": "Preview start for {title}",
      "mapping.endFor": "Preview end for {title}",
      "mapping.startTimeFor": "Preview start time for {title}",
      "mapping.endTimeFor": "Preview end time for {title}",
      "mapping.startTimeHint": "Enter 01:23.5 or a number of seconds",
      "mapping.endTimeHint": "Enter 02:34.5 or a number of seconds",
      "mapping.loadingDuration": "Reading duration…",
      "mapping.durationUnavailable": "Duration unavailable",
      "mapping.rangeLabel": "Preview range",
      "mapping.rangeHint": "Drag either handle or use arrow keys · Home / End for the ends",
      "mapping.startPoint": "Preview start",
      "mapping.startShort": "Start",
      "mapping.endShort": "End",
      "mapping.endPoint": "Preview end",
      "mapping.nudgeBack": "Nudge {point} −5s",
      "mapping.nudgeForward": "Nudge {point} +5s",
      "track.previewDuration": "Preview {duration}",
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
      "album.deleteSelected": "Remove saved album",
      "album.deleted": "Cached album removed; original files are unchanged",
      "toast.previewFailed": "Preview failed: {error}",
      "toast.compressing": "Compressing {count} visual assets…",
      "toast.switchFailed": "Could not switch track: {error}",
      "toast.cannotPlay": "Cannot play: {error}",
      "toast.chooseFolderFirst": "Choose a media folder or import an album first",
      "toast.playFailed": "Playback failed: {error}",
      "toast.backgroundOn": "Playback will continue when you leave the tab",
      "toast.backgroundOff": "Playback will pause when you leave the tab",
      "toast.duotoneOn": "Cover shown in duotone (original file untouched)",
      "toast.duotoneOff": "Cover back to original colors",
      "toast.replay": "Back to the current preview start",
      "toast.skin": "Visual theme: {name}",
      "toast.cleanOn": "Immersive mode on · Press H to restore controls",
      "toast.cleanOff": "Controls shown",
      "toast.loadTracksFirst": "Load songs and images first",
      "toast.startsReset": "All preview start points reset to 00:00",
      "toast.endsReset": "All preview end points reset to the original endings",
      "toast.autoMapped": "Images reassigned by chapters",
      "toast.predecoding": "Pre-decoding {count} images…",
      "toast.loaded": "Loaded {tracks} tracks · {images} visual assets · Images and next track preloaded",
      "toast.manifestInvalid": "Could not parse album.json; using automatic assignment",
      "toast.optimizingImages": "Optimizing {count} images for playback…",
      "toast.chapterMapped": "{tracks} songs / {images} images: assigned by chapters, press G to adjust each track",
      "toast.noImages": "No images found: generated procedural art for each track",
      "toast.deleteFailed": "Delete failed: {error}",
      "toast.importedLoadFailed": "Failed to load imported album: {error}",
      "toast.autoPaused": "Page moved to background; paused automatically to keep playback in sync",
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

  // Core UI labels are localized here; uncommon skin descriptions inherit English.
  const LOCALE_OVERRIDES = {
    fr: {
      "language.label": "Langue", "language.choose": "Choisir la langue", "language.changed": "Langue : français",
      "brand.home": "Accueil Melodio", "theme.choose": "Choisir le thème visuel", "theme.label": "Thème",
      "stage.label": "Scène d'écoute de l'album", "cover.current": "Pochette du titre actuel", "cover.next": "Pochette du titre suivant",
      "tracks.label": "Liste des titres", "tracks.listLabel": "Choisir un titre", "tracks.hint": "Touchez un titre · Glissez la pochette pour changer",
      "dock.show": "Afficher le panneau de contrôle", "dock.label": "Panneau de contrôle",
      "control.prev": "Précédent", "control.prevTitle": "Précédent (←)", "control.play": "Lecture", "control.pause": "Pause", "control.playTitle": "Lecture / pause (Espace)", "control.next": "Suivant", "control.nextTitle": "Suivant (→)", "control.volume": "Volume", "control.import": "Bibliothèque", "control.mapping": "Réglages des titres", "control.appRepo": "Ouvrir le dépôt de l'application", "control.appVersion": "Version application", "control.more": "Plus de contrôles", "control.clean": "Mode immersif", "control.backgroundPlayback": "Lecture en arrière-plan", "control.duotone": "Pochette bichrome",
      "toggle.on": "Activé", "toggle.off": "Désactivé", "shortcut.play": "Espace Lecture", "shortcut.track": "← / → Titre", "shortcut.theme": "↑ / ↓ Thème", "shortcut.mapping": "G Réglages", "shortcut.motion": "M Mouvement", "shortcut.hide": "H Masquer",
      "motion.soft": "Doux", "motion.rich": "Riche", "motion.strong": "Intense", "motion.button": "Mouvement : {mode}", "motion.buttonShortcut": "Mouvement : {mode} M", "motion.changed": "Mouvement réactif : {mode}", "common.close": "Fermer",
      "welcome.title": "Melodio · Présentation d'album", "welcome.body": "Choisissez un dossier contenant des titres et des images. MP3, WAV, FLAC, M4A et OGG sont pris en charge ; un nom comme <b>01 Titre.flac</b> affiche directement le titre.", "welcome.import": "＋ Importer un album", "welcome.formatName": "01 Titre.flac", "welcome.formatImages": "Moins d'images que de titres convient",
      "mapping.title": "Titres et plage d'écoute", "mapping.body": "Les titres viennent des noms de fichiers, par exemple <code>01 Titre.flac</code> → <b>Titre</b>. Choisissez une image et une plage d'écoute.", "mapping.close": "Fermer les réglages", "mapping.autoMap": "Répartir par chapitres", "mapping.resetStarts": "Réinitialiser les débuts", "mapping.shortcut": "G pour ouvrir / fermer", "mapping.imageFor": "Image de {title}", "mapping.noImages": "Visuel généré (aucune image)", "mapping.startLabel": "Début d'écoute", "mapping.startFor": "Début d'écoute de {title}", "mapping.startTimeFor": "Heure de début de {title}", "mapping.startTimeHint": "Entrez 01:23.5 ou un nombre de secondes", "mapping.loadingDuration": "Lecture de la durée…", "mapping.durationUnavailable": "Durée indisponible",
      "preview.play": "Écouter", "preview.stop": "Arrêter", "drop.title": "Déposez titres et images", "drop.body": "Les fichiers sont associés par leur préfixe",
      "album.empty": "Aucun album · cliquez sur « ＋ Importer un album »", "album.importedMeta": "Album importé · {count} titres · cliquez encore pour charger", "album.importedTitle": "Album importé", "album.importedFallback": "Album importé", "album.selectToDelete": "Sélectionnez d'abord un album", "album.confirmDelete": "Confirmer la suppression ?", "album.deleteSelected": "Supprimer l'historique", "album.deleted": "Historique supprimé ; les fichiers originaux restent inchangés",
      "toast.previewFailed": "Échec de l'écoute : {error}", "toast.compressing": "Compression de {count} visuels…", "toast.switchFailed": "Impossible de changer de titre : {error}", "toast.cannotPlay": "Lecture impossible : {error}", "toast.chooseFolderFirst": "Choisissez un dossier ou un album importé", "toast.playFailed": "Échec de la lecture : {error}", "toast.backgroundOn": "La lecture continue en quittant l'onglet", "toast.backgroundOff": "La lecture s'arrête en quittant l'onglet", "toast.duotoneOn": "Pochette affichée en bichromie", "toast.duotoneOff": "Pochette en couleurs originales", "toast.replay": "Retour au début d'écoute", "toast.skin": "Thème visuel : {name}", "toast.cleanOn": "Mode immersif activé · H pour restaurer les contrôles", "toast.cleanOff": "Contrôles affichés", "toast.loadTracksFirst": "Chargez d'abord des titres et des images", "toast.startsReset": "Tous les débuts sont revenus à 00:00", "toast.autoMapped": "Images réparties par chapitres", "toast.predecoding": "Pré-décodage de {count} images…", "toast.loaded": "{tracks} titres chargés · {images} visuels · préchargement terminé", "toast.manifestInvalid": "album.json illisible ; association automatique utilisée", "toast.optimizingImages": "Optimisation de {count} images…", "toast.chapterMapped": "{tracks} titres / {images} images : répartition par chapitres", "toast.noImages": "Aucune image : visuels générés pour chaque titre", "toast.deleteFailed": "Suppression impossible : {error}", "toast.importedLoadFailed": "Chargement impossible : {error}", "toast.autoPaused": "Page en arrière-plan : lecture mise en pause", "toast.audioLoadFailed": "Échec audio (code {code})", "toast.previewLoadFailed": "Échec de l'écoute (code {code})", "toast.importFirst": "Importez d'abord un album",
      "error.noWebAudio": "Ce navigateur ne prend pas en charge Web Audio", "error.noPlayableTracks": "Aucun titre lisible", "error.noAudioInFolder": "Aucun fichier audio reconnu dans le dossier", "error.noManifest": "album.json ou la liste des fichiers est introuvable", "error.noAudioFiles": "Aucun fichier audio dans le dossier",
      "mapping.globalCover": "Pochette globale", "mapping.keepPerTrack": "Choisir une image pour tous les titres", "mapping.uploadCover": "Choisir une nouvelle image", "mapping.globalCoverHint": "Applique cette image à tout l'album ; chaque titre reste modifiable.", "album.localNotice": "Fichiers et réglages conservés dans ce navigateur, jamais envoyés. L'effacement des données du site supprime la bibliothèque.", "album.cachedTitle": "Album enregistré", "album.cachedMeta": "Cache local · {count} titres · {size} Mo", "album.cacheMissing": "Cache absent. Importez à nouveau le dossier original.", "album.loadSelected": "Charger l'album sélectionné", "album.saving": "Enregistrement dans ce navigateur…", "album.saved": "Fichiers et réglages enregistrés dans ce navigateur.", "album.cacheFailed": "Historique non enregistré ; la lecture reste disponible.", "album.sessionOnly": "Historique supprimé ; cette session reste lisible.", "toast.globalCover": "Pochette appliquée à tous les titres : {name}", "toast.cacheFailed": "Stockage indisponible ou plein ; historique non enregistré.", "toast.cachedLoaded": "Album et réglages restaurés depuis le cache", "toast.cachedLoadFailed": "Chargement de l'album enregistré impossible : {error}", "error.invalidImage": "Image illisible. Choisissez un fichier valide.", "mapping.rangeLabel": "Plage d'écoute", "mapping.rangeHint": "Faites glisser un repère ou utilisez les flèches · Home / End pour les extrémités", "mapping.startPoint": "Début d'écoute", "mapping.endPoint": "Fin d'écoute", "mapping.nudgeBack": "Ajuster {point} de −5 s", "mapping.nudgeForward": "Ajuster {point} de +5 s", "mapping.startShort": "Début", "mapping.endShort": "Fin"
    },
    ru: {
      "language.label": "Язык", "language.choose": "Выбрать язык", "language.changed": "Язык интерфейса: русский", "brand.home": "Главная Melodio", "theme.choose": "Выбрать тему", "theme.label": "Тема", "stage.label": "Сцена прослушивания альбома", "cover.current": "Обложка текущего трека", "cover.next": "Обложка следующего трека", "tracks.label": "Список треков", "tracks.listLabel": "Выберите трек", "tracks.hint": "Нажмите трек · Смахните обложку для смены", "dock.show": "Показать панель управления", "dock.label": "Панель управления", "control.prev": "Назад", "control.prevTitle": "Назад (←)", "control.play": "Воспроизвести", "control.pause": "Пауза", "control.playTitle": "Воспроизведение / пауза (Пробел)", "control.next": "Вперёд", "control.nextTitle": "Вперёд (→)", "control.volume": "Громкость", "control.import": "Медиатека", "control.mapping": "Настройки треков", "control.appRepo": "Открыть репозиторий приложения", "control.appVersion": "Версия приложения", "control.more": "Ещё", "control.clean": "Иммерсивный режим", "control.backgroundPlayback": "Фоновое воспроизведение", "control.duotone": "Дуотон обложки", "toggle.on": "Вкл.", "toggle.off": "Выкл.", "shortcut.play": "Пробел: играть", "shortcut.track": "← / →: трек", "shortcut.theme": "↑ / ↓: тема", "shortcut.mapping": "G: настройки", "shortcut.motion": "M: движение", "shortcut.hide": "H: скрыть", "motion.soft": "Мягко", "motion.rich": "Насыщенно", "motion.strong": "Сильно", "motion.button": "Движение: {mode}", "motion.buttonShortcut": "Движение: {mode} M", "motion.changed": "Реактивное движение: {mode}", "common.close": "Закрыть", "welcome.title": "Melodio · Просмотр альбома", "welcome.body": "Выберите папку с треками и изображениями. Поддерживаются MP3, WAV, FLAC, M4A и OGG; имя вроде <b>01 Название.flac</b> станет названием трека.", "welcome.import": "＋ Импортировать альбом", "welcome.formatName": "01 Название.flac", "welcome.formatImages": "Изображений может быть меньше, чем треков", "mapping.title": "Треки и диапазон прослушивания", "mapping.body": "Названия берутся из имён файлов, например <code>01 Название.flac</code> → <b>Название</b>. Можно выбрать обложку и диапазон прослушивания.", "mapping.close": "Закрыть настройки", "mapping.autoMap": "Распределить по главам", "mapping.resetStarts": "Сбросить начала", "mapping.shortcut": "G: открыть / закрыть", "mapping.imageFor": "Изображение для {title}", "mapping.noImages": "Сгенерированное изображение", "mapping.startLabel": "Начало прослушивания", "mapping.startFor": "Начало для {title}", "mapping.startTimeFor": "Время начала для {title}", "mapping.startTimeHint": "Введите 01:23.5 или секунды", "mapping.loadingDuration": "Читаем длительность…", "mapping.durationUnavailable": "Длительность недоступна", "preview.play": "Прослушать", "preview.stop": "Остановить", "drop.title": "Перетащите треки и изображения", "drop.body": "Файлы связываются по префиксу имени", "album.empty": "Альбомов нет · нажмите «＋ Импортировать альбом»", "album.importedMeta": "Импортированный альбом · {count} треков · нажмите ещё раз для загрузки", "album.importedTitle": "Импортированный альбом", "album.importedFallback": "Импортированный альбом", "album.selectToDelete": "Сначала выберите альбом", "album.confirmDelete": "Удалить?", "album.deleteSelected": "Удалить историю", "album.deleted": "История удалена; исходные файлы не изменены", "toast.previewFailed": "Ошибка прослушивания: {error}", "toast.compressing": "Сжимаем {count} изображений…", "toast.switchFailed": "Не удалось сменить трек: {error}", "toast.cannotPlay": "Не удалось воспроизвести: {error}", "toast.chooseFolderFirst": "Выберите папку или импортированный альбом", "toast.playFailed": "Ошибка воспроизведения: {error}", "toast.backgroundOn": "Воспроизведение продолжится в фоне", "toast.backgroundOff": "При уходе со страницы воспроизведение остановится", "toast.duotoneOn": "Обложка показана в дуотоне", "toast.duotoneOff": "Возвращены исходные цвета", "toast.replay": "Возврат к началу прослушивания", "toast.skin": "Тема: {name}", "toast.cleanOn": "Иммерсивный режим включён · H вернёт управление", "toast.cleanOff": "Управление показано", "toast.loadTracksFirst": "Сначала загрузите треки и изображения", "toast.startsReset": "Все начала сброшены на 00:00", "toast.autoMapped": "Изображения распределены по главам", "toast.predecoding": "Подготавливаем {count} изображений…", "toast.loaded": "Загружено треков: {tracks} · изображений: {images}", "toast.manifestInvalid": "Не удалось прочитать album.json; включено авто-сопоставление", "toast.optimizingImages": "Оптимизируем {count} изображений…", "toast.chapterMapped": "{tracks} треков / {images} изображений: распределено по главам", "toast.noImages": "Изображений нет: созданы процедурные обложки", "toast.deleteFailed": "Не удалось удалить: {error}", "toast.importedLoadFailed": "Не удалось загрузить альбом: {error}", "toast.autoPaused": "Страница скрыта: воспроизведение приостановлено", "toast.audioLoadFailed": "Ошибка аудио (код {code})", "toast.previewLoadFailed": "Ошибка прослушивания (код {code})", "toast.importFirst": "Сначала импортируйте альбом", "error.noWebAudio": "Браузер не поддерживает Web Audio", "error.noPlayableTracks": "Нет воспроизводимых треков", "error.noAudioInFolder": "В папке нет распознанных аудиофайлов", "error.noManifest": "Не найден album.json или список файлов", "error.noAudioFiles": "В папке нет аудиофайлов", "mapping.globalCover": "Общая обложка", "mapping.keepPerTrack": "Выберите изображение для всех треков", "mapping.uploadCover": "Выбрать новое изображение", "mapping.globalCoverHint": "Применить ко всему альбому; отдельные треки можно изменить.", "album.localNotice": "Файлы и настройки хранятся в этом браузере и не отправляются. Очистка данных сайта удалит библиотеку.", "album.cachedTitle": "Сохранённый альбом", "album.cachedMeta": "Локальный кэш · {count} треков · {size} МБ", "album.cacheMissing": "Кэш отсутствует. Импортируйте исходную папку снова.", "album.loadSelected": "Загрузить выбранный альбом", "album.saving": "Сохраняем в браузере…", "album.saved": "Файлы и настройки сохранены в браузере.", "album.cacheFailed": "История не сохранена; воспроизведение доступно.", "album.sessionOnly": "История удалена; текущая сессия доступна.", "toast.globalCover": "Обложка применена ко всем трекам: {name}", "toast.cacheFailed": "Хранилище недоступно или заполнено; история не сохранена.", "toast.cachedLoaded": "Альбом и настройки восстановлены из кэша", "toast.cachedLoadFailed": "Не удалось загрузить сохранённый альбом: {error}", "error.invalidImage": "Не удалось прочитать изображение. Выберите корректный файл.", "mapping.rangeLabel": "Диапазон прослушивания", "mapping.rangeHint": "Перетащите маркер или используйте стрелки · Home / End — к краям", "mapping.startPoint": "Начало прослушивания", "mapping.endPoint": "Конец прослушивания", "mapping.nudgeBack": "Сдвинуть {point} на −5 с", "mapping.nudgeForward": "Сдвинуть {point} на +5 с", "mapping.startShort": "Старт", "mapping.endShort": "Конец"
    },
    es: {
      "language.label": "Idioma", "language.choose": "Elegir idioma", "language.changed": "Idioma de la interfaz: español", "brand.home": "Inicio de Melodio", "theme.choose": "Elegir tema visual", "theme.label": "Tema", "stage.label": "Escenario del álbum", "cover.current": "Portada de la pista actual", "cover.next": "Portada de la siguiente pista", "tracks.label": "Lista de pistas", "tracks.listLabel": "Elegir una pista", "tracks.hint": "Toca una pista · Desliza la portada para cambiar", "dock.show": "Mostrar controles", "dock.label": "Controles", "control.prev": "Anterior", "control.prevTitle": "Anterior (←)", "control.play": "Reproducir", "control.pause": "Pausa", "control.playTitle": "Reproducir / pausar (Espacio)", "control.next": "Siguiente", "control.nextTitle": "Siguiente (→)", "control.volume": "Volumen", "control.import": "Biblioteca", "control.mapping": "Ajustes de pistas", "control.appRepo": "Abrir repositorio de la app", "control.appVersion": "Versión de la app", "control.more": "Más controles", "control.clean": "Modo inmersivo", "control.backgroundPlayback": "Reproducción en segundo plano", "control.duotone": "Portada en duotono", "toggle.on": "Activado", "toggle.off": "Desactivado", "shortcut.play": "Espacio: reproducir", "shortcut.track": "← / →: pista", "shortcut.theme": "↑ / ↓: tema", "shortcut.mapping": "G: ajustes", "shortcut.motion": "M: movimiento", "shortcut.hide": "H: ocultar", "motion.soft": "Suave", "motion.rich": "Rico", "motion.strong": "Intenso", "motion.button": "Movimiento: {mode}", "motion.buttonShortcut": "Movimiento: {mode} M", "motion.changed": "Movimiento reactivo: {mode}", "common.close": "Cerrar", "welcome.title": "Melodio · Presentación de álbum", "welcome.body": "Elige una carpeta con canciones e imágenes. Se admiten MP3, WAV, FLAC, M4A y OGG; un nombre como <b>01 Título.flac</b> se mostrará como título.", "welcome.import": "＋ Importar álbum", "welcome.formatName": "01 Título.flac", "welcome.formatImages": "Puede haber menos imágenes que canciones", "mapping.title": "Pistas y rango de escucha", "mapping.body": "Los títulos usan el nombre del archivo, por ejemplo <code>01 Título.flac</code> → <b>Título</b>. Elige imagen y rango de escucha.", "mapping.close": "Cerrar ajustes", "mapping.autoMap": "Asignar por capítulos", "mapping.resetStarts": "Restablecer inicios", "mapping.shortcut": "G para abrir / cerrar", "mapping.imageFor": "Imagen de {title}", "mapping.noImages": "Arte generado (sin imágenes)", "mapping.startLabel": "Inicio de escucha", "mapping.startFor": "Inicio de {title}", "mapping.startTimeFor": "Hora de inicio de {title}", "mapping.startTimeHint": "Escribe 01:23.5 o segundos", "mapping.loadingDuration": "Leyendo duración…", "mapping.durationUnavailable": "Duración no disponible", "preview.play": "Escuchar", "preview.stop": "Detener", "drop.title": "Suelta canciones e imágenes", "drop.body": "Los archivos se emparejan por prefijo", "album.empty": "No hay álbumes · pulsa «＋ Importar álbum»", "album.importedMeta": "Álbum importado · {count} pistas · pulsa otra vez para cargar", "album.importedTitle": "Álbum importado", "album.importedFallback": "Álbum importado", "album.selectToDelete": "Selecciona un álbum primero", "album.confirmDelete": "¿Confirmar eliminación?", "album.deleteSelected": "Eliminar historial", "album.deleted": "Historial eliminado; los archivos originales no cambian", "toast.previewFailed": "Error de escucha: {error}", "toast.compressing": "Comprimiendo {count} imágenes…", "toast.switchFailed": "No se pudo cambiar de pista: {error}", "toast.cannotPlay": "No se puede reproducir: {error}", "toast.chooseFolderFirst": "Elige una carpeta o un álbum importado", "toast.playFailed": "Error de reproducción: {error}", "toast.backgroundOn": "La reproducción continuará en segundo plano", "toast.backgroundOff": "Se pausará al salir de la página", "toast.duotoneOn": "Portada mostrada en duotono", "toast.duotoneOff": "Portada con colores originales", "toast.replay": "Volver al inicio de escucha", "toast.skin": "Tema visual: {name}", "toast.cleanOn": "Modo inmersivo activado · H para mostrar controles", "toast.cleanOff": "Controles visibles", "toast.loadTracksFirst": "Carga canciones e imágenes primero", "toast.startsReset": "Todos los inicios volvieron a 00:00", "toast.autoMapped": "Imágenes asignadas por capítulos", "toast.predecoding": "Preparando {count} imágenes…", "toast.loaded": "Cargadas {tracks} pistas · {images} imágenes", "toast.manifestInvalid": "No se pudo leer album.json; se usó la asignación automática", "toast.optimizingImages": "Optimizando {count} imágenes…", "toast.chapterMapped": "{tracks} pistas / {images} imágenes: asignadas por capítulos", "toast.noImages": "No hay imágenes: se generó arte para cada pista", "toast.deleteFailed": "No se pudo eliminar: {error}", "toast.importedLoadFailed": "No se pudo cargar el álbum: {error}", "toast.autoPaused": "Página en segundo plano: reproducción pausada", "toast.audioLoadFailed": "Error de audio (código {code})", "toast.previewLoadFailed": "Error de escucha (código {code})", "toast.importFirst": "Importa un álbum primero", "error.noWebAudio": "Este navegador no admite Web Audio", "error.noPlayableTracks": "No hay pistas reproducibles", "error.noAudioInFolder": "No se encontraron archivos de audio reconocidos", "error.noManifest": "No se encontró album.json ni la lista de archivos", "error.noAudioFiles": "No hay archivos de audio en la carpeta", "mapping.globalCover": "Portada global", "mapping.keepPerTrack": "Elegir una imagen para todas las pistas", "mapping.uploadCover": "Elegir una imagen nueva", "mapping.globalCoverHint": "Se aplica a todo el álbum; después puedes cambiar cada pista.", "album.localNotice": "Los archivos y ajustes se guardan en este navegador y nunca se suben. Borrar los datos del sitio elimina la biblioteca.", "album.cachedTitle": "Álbum guardado", "album.cachedMeta": "Caché local · {count} pistas · {size} MB", "album.cacheMissing": "No existe la caché. Importa otra vez la carpeta original.", "album.loadSelected": "Cargar álbum seleccionado", "album.saving": "Guardando en este navegador…", "album.saved": "Archivos y ajustes guardados en este navegador.", "album.cacheFailed": "No se guardó el historial; la reproducción sigue disponible.", "album.sessionOnly": "Historial eliminado; la sesión actual sigue disponible.", "toast.globalCover": "Portada aplicada a todas las pistas: {name}", "toast.cacheFailed": "El almacenamiento no está disponible o está lleno; no se guardó el historial.", "toast.cachedLoaded": "Álbum y ajustes restaurados desde la caché", "toast.cachedLoadFailed": "No se pudo cargar el álbum guardado: {error}", "error.invalidImage": "No se pudo leer la imagen. Elige un archivo válido.", "mapping.rangeLabel": "Rango de escucha", "mapping.rangeHint": "Arrastra un tirador o usa las flechas · Home / End para los extremos", "mapping.startPoint": "Inicio de escucha", "mapping.endPoint": "Fin de escucha", "mapping.nudgeBack": "Ajustar {point} −5 s", "mapping.nudgeForward": "Ajustar {point} +5 s", "mapping.startShort": "Inicio", "mapping.endShort": "Fin"
    },
    ja: {
      "language.label": "言語", "language.choose": "言語を選択", "language.changed": "表示言語：日本語", "brand.home": "Melodio ホーム", "theme.choose": "テーマを選択", "theme.label": "テーマ", "stage.label": "アルバム再生ステージ", "cover.current": "現在の曲の画像", "cover.next": "次の曲の画像", "tracks.label": "曲目リスト", "tracks.listLabel": "曲を選択", "tracks.hint": "曲をタップ · ジャケットをスワイプして変更", "dock.show": "操作パネルを表示", "dock.label": "操作パネル", "control.prev": "前の曲", "control.prevTitle": "前の曲（←）", "control.play": "再生", "control.pause": "一時停止", "control.playTitle": "再生 / 一時停止（スペース）", "control.next": "次の曲", "control.nextTitle": "次の曲（→）", "control.volume": "音量", "control.import": "ライブラリ", "control.mapping": "曲目設定", "control.appRepo": "アプリ版リポジトリを開く", "control.appVersion": "アプリ版", "control.more": "その他の操作", "control.clean": "没入モード", "control.backgroundPlayback": "バックグラウンド再生", "control.duotone": "ジャケットを2色表示", "toggle.on": "オン", "toggle.off": "オフ", "shortcut.play": "スペース 再生", "shortcut.track": "← / → 曲変更", "shortcut.theme": "↑ / ↓ テーマ", "shortcut.mapping": "G 曲目設定", "shortcut.motion": "M モーション", "shortcut.hide": "H 操作を隠す", "motion.soft": "ソフト", "motion.rich": "リッチ", "motion.strong": "強い", "motion.button": "モーション：{mode}", "motion.buttonShortcut": "モーション：{mode} M", "motion.changed": "音声反応モーション：{mode}", "common.close": "閉じる", "welcome.title": "Melodio アルバムショーケース", "welcome.body": "曲と画像が入ったフォルダーを選択してください。MP3、WAV、FLAC、M4A、OGG に対応しています。<b>01 曲名.flac</b> のような名前は曲名として表示されます。", "welcome.import": "＋ アルバムを読み込む", "welcome.formatName": "01 曲名.flac", "welcome.formatImages": "曲数より画像が少なくても利用できます", "mapping.title": "曲目と試聴区間", "mapping.body": "曲名はファイル名から読み取ります。例：<code>01 曲名.flac</code> → <b>曲名</b>。画像と試聴区間を設定できます。", "mapping.close": "曲目設定を閉じる", "mapping.autoMap": "章ごとに自動割り当て", "mapping.resetStarts": "開始位置をすべてリセット", "mapping.shortcut": "G で開閉", "mapping.imageFor": "{title} の画像", "mapping.noImages": "生成ビジュアル（画像なし）", "mapping.startLabel": "試聴開始", "mapping.startFor": "{title} の試聴開始", "mapping.startTimeFor": "{title} の開始時間", "mapping.startTimeHint": "01:23.5 または秒数を入力", "mapping.loadingDuration": "長さを読み込み中…", "mapping.durationUnavailable": "長さを取得できません", "preview.play": "試聴", "preview.stop": "停止", "drop.title": "曲と画像をドロップ", "drop.body": "ファイル名の先頭番号で自動対応", "album.empty": "アルバムはありません · 「＋ アルバムを読み込む」を押してください", "album.importedMeta": "読み込み済みアルバム · {count} 曲 · もう一度押して読み込む", "album.importedTitle": "読み込み済みアルバム", "album.importedFallback": "読み込み済みアルバム", "album.selectToDelete": "先にアルバムを選択してください", "album.confirmDelete": "削除しますか？", "album.deleteSelected": "履歴を削除", "album.deleted": "履歴を削除しました。元ファイルは変更されません", "toast.previewFailed": "試聴に失敗：{error}", "toast.compressing": "{count} 枚の画像を圧縮中…", "toast.switchFailed": "曲を変更できません：{error}", "toast.cannotPlay": "再生できません：{error}", "toast.chooseFolderFirst": "フォルダーまたはアルバムを選択してください", "toast.playFailed": "再生に失敗：{error}", "toast.backgroundOn": "タブを離れても再生を続けます", "toast.backgroundOff": "タブを離れると一時停止します", "toast.duotoneOn": "ジャケットを2色で表示", "toast.duotoneOff": "元の色に戻しました", "toast.replay": "試聴開始位置に戻しました", "toast.skin": "テーマ：{name}", "toast.cleanOn": "没入モード：H で操作を戻す", "toast.cleanOff": "操作を表示しました", "toast.loadTracksFirst": "先に曲と画像を読み込んでください", "toast.startsReset": "すべての開始位置を 00:00 に戻しました", "toast.autoMapped": "画像を章ごとに再割り当てしました", "toast.predecoding": "{count} 枚の画像を準備中…", "toast.loaded": "{tracks} 曲を読み込み · {images} ビジュアルを準備しました", "toast.manifestInvalid": "album.json を読めないため自動割り当てを使用", "toast.optimizingImages": "{count} 枚の画像を最適化中…", "toast.chapterMapped": "{tracks} 曲 / {images} 枚：章ごとに割り当てました", "toast.noImages": "画像がないため曲ごとにビジュアルを生成しました", "toast.deleteFailed": "削除に失敗：{error}", "toast.importedLoadFailed": "アルバムを読み込めません：{error}", "toast.autoPaused": "ページが非表示になったため一時停止しました", "toast.audioLoadFailed": "音声の読み込みに失敗（コード {code}）", "toast.previewLoadFailed": "試聴の読み込みに失敗（コード {code}）", "toast.importFirst": "先にアルバムを読み込んでください", "error.noWebAudio": "このブラウザーは Web Audio に対応していません", "error.noPlayableTracks": "再生できる曲がありません", "error.noAudioInFolder": "認識できる音声ファイルがありません", "error.noManifest": "album.json またはファイル一覧が見つかりません", "error.noAudioFiles": "フォルダーに音声ファイルがありません", "mapping.globalCover": "全曲のカバー", "mapping.keepPerTrack": "全曲に適用する画像を選択", "mapping.uploadCover": "新しい画像を選択", "mapping.globalCoverHint": "アルバム全体に適用します。曲ごとの変更も可能です。", "album.localNotice": "ファイルと設定はこのブラウザー内だけに保存され、送信されません。サイトデータを消すとライブラリも消えます。", "album.cachedTitle": "保存済みアルバム", "album.cachedMeta": "ローカルキャッシュ · {count} 曲 · {size} MB", "album.cacheMissing": "キャッシュがありません。元のフォルダーを再度読み込んでください。", "album.loadSelected": "選択したアルバムを読み込む", "album.saving": "ブラウザーに保存中…", "album.saved": "ファイルと設定をブラウザーに保存しました。", "album.cacheFailed": "履歴を保存できませんでした。再生は可能です。", "album.sessionOnly": "履歴を削除しました。現在のセッションは再生できます。", "toast.globalCover": "全曲にカバーを設定：{name}", "toast.cacheFailed": "保存領域を利用できないか満杯です。履歴は保存されません。", "toast.cachedLoaded": "キャッシュからアルバムと設定を復元しました", "toast.cachedLoadFailed": "保存済みアルバムを読み込めません：{error}", "error.invalidImage": "画像を読み込めません。有効な画像を選択してください。", "mapping.rangeLabel": "試聴区間", "mapping.rangeHint": "ハンドルをドラッグ、または矢印キー · Home / End で両端へ", "mapping.startPoint": "試聴開始", "mapping.endPoint": "試聴終了", "mapping.nudgeBack": "「{point}」を −5 秒", "mapping.nudgeForward": "「{point}」を +5 秒", "mapping.startShort": "開始", "mapping.endShort": "終了"
    },
    ko: {
      "language.label": "언어", "language.choose": "언어 선택", "language.changed": "인터페이스 언어: 한국어", "brand.home": "Melodio 홈", "theme.choose": "시각 테마 선택", "theme.label": "테마", "stage.label": "앨범 감상 무대", "cover.current": "현재 트랙 이미지", "cover.next": "다음 트랙 이미지", "tracks.label": "트랙 목록", "tracks.listLabel": "트랙 선택", "tracks.hint": "트랙을 누르세요 · 커버를 밀어 곡 변경", "dock.show": "컨트롤 패널 표시", "dock.label": "컨트롤 패널", "control.prev": "이전 곡", "control.prevTitle": "이전 곡 (←)", "control.play": "재생", "control.pause": "일시정지", "control.playTitle": "재생 / 일시정지 (스페이스)", "control.next": "다음 곡", "control.nextTitle": "다음 곡 (→)", "control.volume": "볼륨", "control.import": "앨범 보관함", "control.mapping": "트랙 설정", "control.appRepo": "앱 버전 저장소 열기", "control.appVersion": "앱 버전", "control.more": "더 보기", "control.clean": "몰입 모드", "control.backgroundPlayback": "백그라운드 재생", "control.duotone": "커버 듀오톤", "toggle.on": "켬", "toggle.off": "끔", "shortcut.play": "스페이스 재생", "shortcut.track": "← / → 곡 변경", "shortcut.theme": "↑ / ↓ 테마", "shortcut.mapping": "G 트랙 설정", "shortcut.motion": "M 모션", "shortcut.hide": "H 컨트롤 숨기기", "motion.soft": "부드럽게", "motion.rich": "풍부하게", "motion.strong": "강하게", "motion.button": "모션: {mode}", "motion.buttonShortcut": "모션: {mode} M", "motion.changed": "오디오 반응 모션: {mode}", "common.close": "닫기", "welcome.title": "Melodio 앨범 쇼케이스", "welcome.body": "곡과 이미지가 있는 폴더를 선택하세요. MP3, WAV, FLAC, M4A, OGG를 지원합니다. <b>01 곡명.flac</b>처럼 이름을 지으면 곡명으로 표시됩니다.", "welcome.import": "＋ 새 앨범 가져오기", "welcome.formatName": "01 곡명.flac", "welcome.formatImages": "곡보다 이미지가 적어도 됩니다", "mapping.title": "트랙 및 미리듣기 구간", "mapping.body": "곡명은 파일 이름에서 읽습니다. 예: <code>01 곡명.flac</code> → <b>곡명</b>. 이미지와 미리듣기 구간을 설정할 수 있습니다.", "mapping.close": "트랙 설정 닫기", "mapping.autoMap": "챕터별 자동 배정", "mapping.resetStarts": "시작점 모두 초기화", "mapping.shortcut": "G로 열기 / 닫기", "mapping.imageFor": "{title} 이미지", "mapping.noImages": "생성 이미지 (이미지 없음)", "mapping.startLabel": "감상 시작점", "mapping.startFor": "{title} 시작점", "mapping.startTimeFor": "{title} 시작 시간", "mapping.startTimeHint": "01:23.5 또는 초 단위 입력", "mapping.loadingDuration": "재생 시간 읽는 중…", "mapping.durationUnavailable": "재생 시간을 알 수 없음", "preview.play": "미리 듣기", "preview.stop": "정지", "drop.title": "곡과 이미지를 놓으세요", "drop.body": "파일명 앞부분으로 자동 연결합니다", "album.empty": "앨범이 없습니다 · 아래에서 「＋ 새 앨범 가져오기」를 누르세요", "album.importedMeta": "가져온 앨범 · {count}곡 · 다시 눌러 불러오기", "album.importedTitle": "가져온 앨범", "album.importedFallback": "가져온 앨범", "album.selectToDelete": "먼저 앨범을 선택하세요", "album.confirmDelete": "삭제할까요?", "album.deleteSelected": "기록 삭제", "album.deleted": "기록을 삭제했습니다. 원본 파일은 변경되지 않습니다", "toast.previewFailed": "미리 듣기 실패: {error}", "toast.compressing": "{count}개 이미지 압축 중…", "toast.switchFailed": "트랙을 바꿀 수 없습니다: {error}", "toast.cannotPlay": "재생할 수 없습니다: {error}", "toast.chooseFolderFirst": "폴더나 가져온 앨범을 선택하세요", "toast.playFailed": "재생 실패: {error}", "toast.backgroundOn": "탭을 떠나도 재생을 계속합니다", "toast.backgroundOff": "페이지를 떠나면 일시정지합니다", "toast.duotoneOn": "커버를 듀오톤으로 표시합니다", "toast.duotoneOff": "원래 색으로 돌아갑니다", "toast.replay": "현재 시작점으로 돌아갑니다", "toast.skin": "테마: {name}", "toast.cleanOn": "몰입 모드 켬 · H로 컨트롤 복원", "toast.cleanOff": "컨트롤 표시", "toast.loadTracksFirst": "먼저 곡과 이미지를 불러오세요", "toast.startsReset": "모든 시작점을 00:00으로 초기화했습니다", "toast.autoMapped": "이미지를 챕터별로 다시 배정했습니다", "toast.predecoding": "{count}개 이미지 준비 중…", "toast.loaded": "{tracks}곡 로드 · {images}개 이미지 준비 완료", "toast.manifestInvalid": "album.json을 읽지 못해 자동 배정 사용", "toast.optimizingImages": "{count}개 이미지 최적화 중…", "toast.chapterMapped": "{tracks}곡 / {images}개 이미지: 챕터별 배정", "toast.noImages": "이미지가 없어 곡마다 생성 이미지를 만들었습니다", "toast.deleteFailed": "삭제 실패: {error}", "toast.importedLoadFailed": "앨범을 불러올 수 없습니다: {error}", "toast.autoPaused": "페이지가 숨겨져 재생을 일시정지했습니다", "toast.audioLoadFailed": "오디오 로드 실패 (코드 {code})", "toast.previewLoadFailed": "미리 듣기 로드 실패 (코드 {code})", "toast.importFirst": "먼저 앨범을 가져오세요", "error.noWebAudio": "이 브라우저는 Web Audio를 지원하지 않습니다", "error.noPlayableTracks": "재생 가능한 트랙이 없습니다", "error.noAudioInFolder": "인식 가능한 오디오 파일이 없습니다", "error.noManifest": "album.json 또는 파일 목록을 찾을 수 없습니다", "error.noAudioFiles": "폴더에 오디오 파일이 없습니다", "mapping.globalCover": "전체 커버", "mapping.keepPerTrack": "모든 트랙에 적용할 이미지 선택", "mapping.uploadCover": "새 이미지 선택", "mapping.globalCoverHint": "앨범 전체에 적용합니다. 이후 트랙별로 바꿀 수 있습니다.", "album.localNotice": "파일과 설정은 이 브라우저에만 저장되며 업로드되지 않습니다. 사이트 데이터를 지우면 보관함도 삭제됩니다.", "album.cachedTitle": "저장된 앨범", "album.cachedMeta": "로컬 캐시 · {count}곡 · {size}MB", "album.cacheMissing": "캐시가 없습니다. 원본 폴더를 다시 가져오세요.", "album.loadSelected": "선택한 앨범 불러오기", "album.saving": "브라우저에 저장 중…", "album.saved": "파일과 설정을 브라우저에 저장했습니다.", "album.cacheFailed": "기록을 저장하지 못했습니다. 재생은 계속할 수 있습니다.", "album.sessionOnly": "기록을 삭제했습니다. 현재 세션은 재생할 수 있습니다.", "toast.globalCover": "모든 트랙에 커버 적용: {name}", "toast.cacheFailed": "저장 공간을 사용할 수 없거나 가득 찼습니다. 기록을 저장하지 않았습니다.", "toast.cachedLoaded": "캐시에서 앨범과 설정을 복원했습니다", "toast.cachedLoadFailed": "저장된 앨범을 불러오지 못했습니다: {error}", "error.invalidImage": "이미지를 읽을 수 없습니다. 올바른 이미지 파일을 선택하세요.", "mapping.rangeLabel": "미리듣기 구간", "mapping.rangeHint": "핸들을 끌거나 방향키 사용 · Home / End 로 양 끝", "mapping.startPoint": "미리듣기 시작", "mapping.endPoint": "미리듣기 끝", "mapping.nudgeBack": "{point} −5초 조정", "mapping.nudgeForward": "{point} +5초 조정", "mapping.startShort": "시작", "mapping.endShort": "끝"
    }
  };

  Object.entries(LOCALE_OVERRIDES).forEach(([locale, overrides]) => {
    MESSAGES[locale] = { ...MESSAGES.en, ...overrides };
  });

  function normalize(value) {
    const code = String(value || "").toLowerCase();
    if (code.startsWith("zh")) return "zh";
    if (code.startsWith("en")) return "en";
    if (code.startsWith("fr")) return "fr";
    if (code.startsWith("ru")) return "ru";
    if (code.startsWith("es")) return "es";
    if (code.startsWith("ja")) return "ja";
    if (code.startsWith("ko")) return "ko";
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
    const template = MESSAGES[language][key] ?? MESSAGES.en[key] ?? MESSAGES.zh[key] ?? key;
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
