# Melodio Web

中文 | [English](#english)

浏览器本地专辑播放器。音频与图片仅在当前浏览器中处理，不上传服务器。

在线版本：<https://kuthorx.github.io/melodio-web/>。APP 版本源码：<https://github.com/sumizomeee-rgb/melodio>。

## 使用

```bash
npm run dev
```

打开 `http://localhost:4173`，选择或拖入包含音频、图片的文件夹。文件名前导编号会自动配对，例如 `01 歌名.wav` 与 `01 cover.jpg`。曲目设置支持逐首换图和设置试听起点。

快捷键：空格播放/暂停，左右方向键切歌，上下方向键切换皮肤，`G` 打开曲目设置，`M` 调整动效。

界面支持中文与英文：默认跟随浏览器语言，可在「•••」菜单中切换，或通过 `?lang=zh` / `?lang=en` 指定。文案位于 `i18n.js`。

## 构建与博客部署

```bash
npm test
npm run build
npm run deploy:grenyes
```

`build` 生成可放在任意子路径的 `dist/` 静态文件；`deploy:grenyes` 复制到 `../Grenyes/static/apps/melodio-web/`。

---

## English

A local album player that runs in the browser. Audio and images are processed only in your browser and never uploaded.

Live version: <https://kuthorx.github.io/melodio-web/>. App source: <https://github.com/sumizomeee-rgb/melodio>.

### Usage

```bash
npm run dev
```

Open `http://localhost:4173`, then choose or drop a folder containing audio and images. Files are paired by their leading number, e.g. `01 Song Title.wav` with `01 cover.jpg`. Track settings let you change the image and preview start point for each track.

Shortcuts: Space to play/pause, ←/→ to switch tracks, ↑/↓ to switch themes, `G` for track settings, `M` for motion intensity.

The interface is available in Chinese and English. It follows the browser language by default; switch it from the "•••" menu or force it with `?lang=zh` / `?lang=en`. Strings live in `i18n.js`.

### Build & blog deployment

```bash
npm test
npm run build
npm run deploy:grenyes
```

`build` produces static files in `dist/` that can be served from any sub-path; `deploy:grenyes` copies them to `../Grenyes/static/apps/melodio-web/`.
