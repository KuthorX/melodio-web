(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MelodioAlbumStore = api;
})(typeof globalThis === "object" ? globalThis : this, function () {
  "use strict";

  function openDatabase() {
    if (!globalThis.indexedDB) return Promise.reject(new Error("IndexedDB unavailable"));
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("melodio-library", 2);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("albums")) db.createObjectStore("albums", { keyPath: "id" });
        if (!db.objectStoreNames.contains("files")) db.createObjectStore("files");
        // Separate old file payloads so configuration edits never rewrite an entire album.
        const cursor = request.transaction.objectStore("albums").openCursor();
        cursor.onsuccess = () => {
          const entry = cursor.result;
          if (!entry) return;
          const { files, ...album } = entry.value;
          if (files) {
            request.transaction.objectStore("files").put(files, album.id);
            entry.update(album);
          }
          entry.continue();
        };
      };
      request.onsuccess = () => {
        request.result.onversionchange = () => request.result.close();
        resolve(request.result);
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Close other Melodio tabs and retry"));
    });
  }

  async function run(stores, mode, action) {
    const db = await openDatabase();
    try {
      return await new Promise((resolve, reject) => {
        const transaction = db.transaction(stores, mode);
        let result;
        transaction.oncomplete = () => resolve(result);
        transaction.onabort = () => reject(transaction.error || new Error("Album cache transaction aborted"));
        transaction.onerror = () => reject(transaction.error || new Error("Album cache transaction failed"));
        try { action(transaction, (value) => { result = value; }); }
        catch (error) { transaction.abort(); reject(error); }
      });
    } finally { db.close(); }
  }

  function packFiles(files) {
    return [...files].map((file) => ({
      name: file.name,
      relativePath: file.webkitRelativePath || file.name,
      type: file.type,
      lastModified: file.lastModified,
      blob: file.slice()
    }));
  }

  function unpackFiles(record) {
    return record.files.map((entry) => {
      const file = new File([entry.blob], entry.name, { type: entry.type, lastModified: entry.lastModified });
      try { Object.defineProperty(file, "webkitRelativePath", { value: entry.relativePath }); } catch (_) {}
      return file;
    });
  }

  function save({ files, ...album }) {
    return run(["albums", "files"], "readwrite", (tx) => {
      tx.objectStore("albums").put(album);
      tx.objectStore("files").put(files, album.id);
    });
  }

  function list() {
    return run(["albums"], "readonly", (tx, done) => {
      const request = tx.objectStore("albums").getAll();
      request.onsuccess = () => done(request.result
        .map(({ id, title, trackCount, updatedAt, bytes }) => ({ id, title, trackCount, updatedAt, bytes }))
        .sort((a, b) => b.updatedAt - a.updatedAt));
    });
  }

  function get(id) {
    return run(["albums", "files"], "readonly", (tx, done) => {
      const album = tx.objectStore("albums").get(id);
      const files = tx.objectStore("files").get(id);
      files.onsuccess = () => done(album.result && { ...album.result, files: files.result || [] });
    });
  }

  function updateConfig(id, config) {
    return run(["albums"], "readwrite", (tx, done) => {
      const store = tx.objectStore("albums");
      const request = store.get(id);
      request.onsuccess = () => {
        if (!request.result) return done(false);
        store.put({ ...request.result, config, updatedAt: Date.now() });
        done(true);
      };
    });
  }

  function remove(id) {
    return run(["albums", "files"], "readwrite", (tx) => {
      tx.objectStore("albums").delete(id);
      tx.objectStore("files").delete(id);
    });
  }

  return { packFiles, unpackFiles, save, list, get, updateConfig, remove };
});
