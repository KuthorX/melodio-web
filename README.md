# Melodio Web

浏览器本地专辑播放器。音频与图片仅在当前浏览器中处理，不上传服务器。

## 使用

```bash
npm run dev
```

打开 `http://localhost:4173`，选择或拖入包含音频、图片的文件夹。文件名前导编号会自动配对，例如 `01 歌名.wav` 与 `01 cover.jpg`。曲目设置支持逐首换图和设置试听起点。

快捷键：空格播放/暂停，左右方向键切歌，上下方向键切换皮肤，`G` 打开曲目设置，`M` 调整动效。

## 构建与博客部署

```bash
npm test
npm run build
npm run deploy:grenyes
```

`build` 生成可放在任意子路径的 `dist/` 静态文件；`deploy:grenyes` 复制到 `../Grenyes/static/apps/melodio-web/`。
