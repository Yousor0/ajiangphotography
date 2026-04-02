const S3_BASE = import.meta.env.VITE_S3_BASE_URL;

async function fetchManifest() {
  const response = await fetch(`${S3_BASE}/manifest.json`);
  return response.json();
}

export async function getImagesFromFolder(folder) {
  const manifest = await fetchManifest();
  const items = manifest[folder] ?? [];
  return items.map((item) => `${S3_BASE}/${item.key}`);
}

export async function getImagesFromSubfolder(subfolder) {
  const manifest = await fetchManifest();
  const folder = subfolder.split("/")[0];
  const items = manifest[folder] ?? [];
  return items
    .filter((item) => item.key.startsWith(subfolder + "/"))
    .map((item) => `${S3_BASE}/${item.key}`);
}

export async function getAllImages(excludeFolders = []) {
  const manifest = await fetchManifest();

  const all = [];
  for (const [folder, items] of Object.entries(manifest)) {
    if (excludeFolders.includes(folder)) continue;
    for (const item of items) {
      all.push({
        url: `${S3_BASE}/${item.key}`,
        lastModified: new Date(item.lastModified),
      });
    }
  }

  all.sort((a, b) => b.lastModified - a.lastModified);
  return all.map((item) => item.url);
}
