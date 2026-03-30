import sharp from 'sharp';
import { join } from 'path';
import { existsSync, readdirSync, statSync } from 'fs';

const CLIENT_DIR = '/Users/dinkoibukic/Library/CloudStorage/Dropbox-DinkoDesign/Dinko Design Team Folder/Trinity Life Chiropractic/Images/From Client';
const ASSETS_DIR = '/Users/dinkoibukic/GitHub/trinitylifechiro/src/assets';
const OUT_DIR = '/Users/dinkoibukic/GitHub/trinitylifechiro/src/assets/images';

const mappings = [
  // home page/
  { src: join(CLIENT_DIR, 'home page', '1st big picture option 2.jpg'), out: 'chiropractor-cervical-adjustment-allen-tx.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-40.jpg'), out: 'pediatric-chiropractor-baby-adjustment-family.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-51.jpg'), out: 'family-chiropractor-newborn-care-allen-tx.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-128.jpg'), out: 'chiropractor-consultation-spine-model.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-148 (1).jpg'), out: 'trinity-life-chiropractic-treatment-room.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-143.jpg'), out: 'trinity-life-chiropractic-office-allen-texas.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-44 (2).jpg'), out: 'pediatric-chiropractor-toddler-adjustment.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-103.jpg'), out: 'chiropractor-explaining-nervous-system-chart.webp' },
  { src: join(CLIENT_DIR, 'home page', 'picture at the bottom of page.jpg'), out: 'chiropractic-office-bottom-homepage.webp' },
  { src: join(CLIENT_DIR, 'home page', 'TrinityLifeChiropractic-70 (3).jpg'), out: 'chiropractor-patient-high-five-celebration.webp' },

  // Pediatric/
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-22.jpg'), out: 'pediatric-chiropractor-infant-care.webp' },
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-27.jpg'), out: 'chiropractor-child-neck-adjustment.webp' },
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-48.jpg'), out: 'gentle-pediatric-chiropractic-hands.webp' },
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-49.jpg'), out: 'infant-spinal-adjustment-overhead.webp' },
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-45 (1).jpg'), out: 'baby-chiropractic-adjustment-smiling.webp' },
  { src: join(CLIENT_DIR, 'Pediatric', 'TrinityLifeChiropractic-31 (2).jpg'), out: 'pediatric-chiropractor-gentle-baby-adjustment.webp' },

  // Family/
  { src: join(CLIENT_DIR, 'Family', 'TrinityLifeChiropractic-13 (1).jpg'), out: 'family-chiropractic-consultation-allen-tx.webp' },
  { src: join(CLIENT_DIR, 'Family', 'TrinityLifeChiropractic-10.jpg'), out: 'chiropractic-office-front-desk-welcome.webp' },

  // wellness/
  { src: join(CLIENT_DIR, 'wellness', 'TOP photo.jpg'), out: 'pregnancy-chiropractic-adjustment-care.webp' },
  { src: join(CLIENT_DIR, 'wellness', 'TrinityLifeChiropractic-81.jpg'), out: 'adult-cervical-chiropractic-adjustment.webp' },
  { src: join(CLIENT_DIR, 'wellness', 'TrinityLifeChiropractic-98.jpg'), out: 'wellness-chiropractic-patient-handshake.webp' },
  { src: join(CLIENT_DIR, 'wellness', 'TrinityLifeChiropractic-127.jpg'), out: 'chiropractor-spine-model-education.webp' },

  // Nervous system chiropractic care/
  { src: join(CLIENT_DIR, 'Nervous system chiropractic care', 'TrinityLifeChiropractic-114.jpg'), out: 'insight-nervous-system-scan-hand.webp' },
  { src: join(CLIENT_DIR, 'Nervous system chiropractic care', 'TrinityLifeChiropractic-124.jpg'), out: 'chiropractic-nervous-system-spine-scan.webp' },
  { src: join(CLIENT_DIR, 'Nervous system chiropractic care', 'TrinityLifeChiropractic-125.jpg'), out: 'nervous-system-chiropractic-consultation.webp' },

  // What to Expect/
  { src: join(CLIENT_DIR, 'What to Expect', 'In-depth consult .jpg'), out: 'chiropractic-in-depth-consultation.webp' },
  { src: join(CLIENT_DIR, 'What to Expect', '1st adjustment.jpg'), out: 'first-chiropractic-adjustment.webp' },
  { src: join(CLIENT_DIR, 'What to Expect', 'Exam.jpg'), out: 'chiropractic-spinal-examination.webp' },
  { src: join(CLIENT_DIR, 'What to Expect', 'Insight Scans.jpg'), out: 'insight-subluxation-scan-exam.webp' },

  // Services/
  { src: join(CLIENT_DIR, 'Services', 'Wellness.jpg'), out: 'wellness-chiropractic-care-service.webp' },
  { src: join(CLIENT_DIR, 'Services', 'Pediatric.jpg'), out: 'pediatric-chiropractic-care-service.webp' },

  // our approach page/
  { src: join(CLIENT_DIR, 'our approach page', 'TrinityLifeChiropractic-103 (1).jpg'), out: 'chiropractor-explaining-approach-nervous-system.webp' },
  { src: join(CLIENT_DIR, 'our approach page', 'TrinityLifeChiropractic-44 (3).jpg'), out: 'chiropractor-adjusting-infant-approach.webp' },

  // kids little and big/
  { src: join(CLIENT_DIR, 'kids little and big', 'TrinityLifeChiropractic-20.jpg'), out: 'kids-chiropractic-care-toddler.webp' },
  { src: join(CLIENT_DIR, 'kids little and big', 'TrinityLifeChiropractic-31 (1).jpg'), out: 'children-chiropractic-gentle-adjustment.webp' },
  { src: join(CLIENT_DIR, 'kids little and big', 'TrinityLifeChiropractic-45.jpg'), out: 'baby-overhead-chiropractic-care.webp' },

  // Root portrait photos
  { src: join(CLIENT_DIR, '276A7223.jpg'), out: 'dr-obrien-chiropractor-portrait-1.webp' },
  { src: join(CLIENT_DIR, '276A7268.jpg'), out: 'dr-obrien-chiropractor-portrait-2.webp' },
  { src: join(CLIENT_DIR, '276A7283.jpg'), out: 'dr-obrien-chiropractor-portrait-3.webp' },
  { src: join(CLIENT_DIR, '276A7408.jpg'), out: 'dr-obrien-chiropractor-headshot-1.webp' },
  { src: join(CLIENT_DIR, '276A7421.jpg'), out: 'dr-obrien-chiropractor-headshot-2.webp' },
  { src: join(CLIENT_DIR, '276A7428.jpg'), out: 'dr-obrien-chiropractor-headshot-3.webp' },
  { src: join(CLIENT_DIR, '276A7442.jpg'), out: 'dr-obrien-chiropractor-headshot-4.webp' },

  // Existing PNG conversions from src/assets/
  { src: join(ASSETS_DIR, '0042f13a153888e204d34c19f8fb2b1a8454b463.png'), out: 'chiropractor-patient-high-five.webp' },
  { src: join(ASSETS_DIR, '023fbc767981ef2ecd3fbe4de658a30d5d662501.png'), out: 'dr-obrien-smiling-patient-care.webp' },
  { src: join(ASSETS_DIR, '11c918fdd89fdab71e3738ff27a1d42c36311040.png'), out: 'pediatric-chiropractor-baby-care.webp' },
  { src: join(ASSETS_DIR, 'b3f48ea3427a35b55e6c4b7f80bebb87b5929149.png'), out: 'chiropractor-nervous-system-education.webp' },
];

async function convertImage(srcPath, outName) {
  const outPath = join(OUT_DIR, outName);

  if (!existsSync(srcPath)) {
    console.warn(`WARNING: Source file not found, skipping: ${srcPath}`);
    return false;
  }

  try {
    const image = sharp(srcPath);
    const metadata = await image.metadata();
    const longestSide = Math.max(metadata.width || 0, metadata.height || 0);

    let pipeline = image;

    if (longestSide > 1920) {
      if ((metadata.width || 0) >= (metadata.height || 0)) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      } else {
        pipeline = pipeline.resize({ height: 1920, withoutEnlargement: true });
      }
    }

    await pipeline
      .webp({ quality: 80 })
      .toFile(outPath);

    const stat = statSync(outPath);
    const sizeKB = (stat.size / 1024).toFixed(1);
    console.log(`OK: ${outName} (${sizeKB} KB)`);
    return true;
  } catch (err) {
    console.error(`ERROR converting ${srcPath}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`Converting ${mappings.length} images...\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const { src, out } of mappings) {
    const result = await convertImage(src, out);
    if (result) {
      successCount++;
    } else if (!existsSync(src)) {
      skipCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Total mappings: ${mappings.length}`);
  console.log(`Converted: ${successCount}`);
  console.log(`Skipped (not found): ${skipCount}`);
  console.log(`Errors: ${errorCount}`);

  // Print output directory stats
  const files = readdirSync(OUT_DIR);
  let totalSize = 0;
  for (const f of files) {
    totalSize += statSync(join(OUT_DIR, f)).size;
  }
  console.log(`\nOutput directory: ${OUT_DIR}`);
  console.log(`Total files: ${files.length}`);
  console.log(`Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
