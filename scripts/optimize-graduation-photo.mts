// scripts/optimize-graduation-photo.mts
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/images/me-graduate.png";
const OUT_DIR = "public/images/graduation";
const WIDTHS = [640, 960, 1200];

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  for (const w of WIDTHS) {
    const out = path.join(OUT_DIR, `me-graduate-${w}.webp`);
    await sharp(SRC).resize({ width: w }).webp({ quality: 82 }).toFile(out);
    console.log("wrote", out);
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
