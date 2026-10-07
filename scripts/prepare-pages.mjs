import { copyFile, mkdir } from 'node:fs/promises';

// GitHub Pages serves files, so each shareable route needs an HTML entry point.
await mkdir(new URL('../dist/pairing/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../dist/index.html', import.meta.url),
  new URL('../dist/pairing/index.html', import.meta.url),
);
await copyFile(
  new URL('../dist/index.html', import.meta.url),
  new URL('../dist/pairing.html', import.meta.url),
);

// Social preview metadata needs a stable, unhashed image URL.
await mkdir(new URL('../dist/static/', import.meta.url), { recursive: true });
await copyFile(
  new URL('../static/cats.png', import.meta.url),
  new URL('../dist/static/cats.png', import.meta.url),
);
