const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const filesToOptimize = [
  'hero-bg.png',
  'hero-movies.png',
  'hero-sports.png',
  'tv-showcase.png',
  'bg/hero_bg.png'
];

async function optimizeImages() {
  for (const file of filesToOptimize) {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      console.log(`Optimizing ${file}...`);
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .png({ palette: true, quality: 65, effort: 10 })
        .toFile(tempPath);
      
      fs.renameSync(tempPath, filePath);
      const newStats = fs.statSync(filePath);
      console.log(`- ${file} new size: ${(newStats.size / 1024).toFixed(2)} KB`);
    } else {
      console.log(`${file} not found.`);
    }
  }

  // Optimize Logo separately to resize it
  const logoPath = path.join(publicDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    console.log(`Optimizing logo.png...`);
    const tempPath = logoPath + '.tmp';
    await sharp(logoPath)
      .resize({ width: 400 }) // Resize logo down
      .png({ palette: true, quality: 80 })
      .toFile(tempPath);
    
    fs.renameSync(tempPath, logoPath);
    const newStats = fs.statSync(logoPath);
    console.log(`- logo.png new size: ${(newStats.size / 1024).toFixed(2)} KB`);
  }
}

optimizeImages().catch(console.error);
