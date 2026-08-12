import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = join(root, "dist");
const files = ["index.html", "tokens.css", "styles.css", "app.js", "filename-utils.js", "manifest.webmanifest", "service-worker.js", "icons"];

async function build() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });
  await Promise.all(files.map((file) => cp(join(root, file), join(dist, file), { recursive: true })));
  console.log(`Built ${files.length} files in ${dist}`);
}

await build();

if (process.argv.includes("--serve")) {
  const port = Number(process.env.PORT) || 4173;
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".webmanifest": "application/manifest+json",
    ".png": "image/png"
  };
  createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
    const target = resolve(dist, `.${normalize(pathname === "/" ? "/index.html" : pathname)}`);
    if (!target.startsWith(`${dist}/`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    try {
      const body = await readFile(target);
      response.writeHead(200, { "Content-Type": types[extname(target)] || "application/octet-stream" });
      response.end(body);
    } catch {
      response.writeHead(404).end("Not found");
    }
  }).listen(port, () => console.log(`Melodio: http://localhost:${port}`));
}
