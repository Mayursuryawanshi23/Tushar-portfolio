const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Folders inside public to scan
const folders = [
  path.join(__dirname, '..', 'public', 'profilepic'),
  path.join(__dirname, '..', 'public', 'ExpertieseImages'),
  path.join(__dirname, '..', 'public', 'TherapeuticAeasImages')
];

const widths = [480, 800, 1200];

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const dir = path.dirname(filePath);
  const name = path.basename(filePath, ext);
  for (const w of widths) {
    const outWebp = path.join(dir, `${name}-${w}.webp`);
    const outAvif = path.join(dir, `${name}-${w}.avif`);
    try {
      await sharp(filePath).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
      await sharp(filePath).resize({ width: w }).avif({ quality: 60 }).toFile(outAvif);
      console.log(`Created ${outWebp} and ${outAvif}`);
    } catch (err) {
      console.error('Error processing', filePath, err);
    }
  }
}

async function run() {
  for (const folder of folders) {
    if (!fs.existsSync(folder)) continue;
    const files = fs.readdirSync(folder);
    for (const file of files) {
      const full = path.join(folder, file);
      const stat = fs.statSync(full);
      if (stat.isFile()) {
        // skip already generated files
        if (/-\d+\.(webp|avif)$/.test(file)) continue;
        await processFile(full);
      }
    }
  }
}

run().then(() => console.log('Done')).catch((e) => console.error(e));
