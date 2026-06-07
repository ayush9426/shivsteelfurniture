const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://shiv-steel-furniture.netlify.app';
const TARGET_DIR = path.join(__dirname, 'images');

// Create images directory
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Generate lists of images to download
const images = [];

// 1. Furniture products: f1.jpg to f34.jpg
for (let i = 1; i <= 34; i++) {
  images.push(`images/f${i}.jpg`);
}

// 2. Railing products: r1.jpg to r27.jpg
for (let i = 1; i <= 27; i++) {
  images.push(`images/r${i}.jpg`);
}

// 3. Gallery images: 1.jpeg to 110.jpeg
for (let i = 1; i <= 110; i++) {
  images.push(`images/${i}.jpeg`);
}

console.log(`Prepared list of ${images.length} images to download...`);

// Helper to download a single file with retries
function downloadFile(relPath, retryCount = 3) {
  const url = `${BASE_URL}/${relPath}`;
  const dest = path.join(__dirname, relPath);

  // Ensure subdirectories exist
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve({ path: relPath, success: true });
        });
      } else {
        file.close();
        fs.unlink(dest, () => {}); // Delete empty file
        if (retryCount > 0) {
          console.log(`Failed to download ${relPath} (status ${response.statusCode}). Retrying... (${retryCount} left)`);
          resolve(downloadFile(relPath, retryCount - 1));
        } else {
          console.error(`Failed to download ${relPath} (status ${response.statusCode}) after retries.`);
          resolve({ path: relPath, success: false, status: response.statusCode });
        }
      }
    });

    request.on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      if (retryCount > 0) {
        console.log(`Error downloading ${relPath}: ${err.message}. Retrying... (${retryCount} left)`);
        setTimeout(() => {
          resolve(downloadFile(relPath, retryCount - 1));
        }, 1000);
      } else {
        console.error(`Error downloading ${relPath}: ${err.message}`);
        resolve({ path: relPath, success: false, error: err.message });
      }
    });
  });
}

// Concurrency-controlled batch downloader
async function downloadBatch(items, limit = 10) {
  let index = 0;
  const results = [];
  const activePromises = [];

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      const item = items[currentIndex];
      console.log(`[${currentIndex + 1}/${items.length}] Starting download of ${item}`);
      const res = await downloadFile(item);
      results.push(res);
    }
  }

  // Start initial set of workers
  const workers = [];
  for (let i = 0; i < Math.min(limit, items.length); i++) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return results;
}

async function start() {
  const startTime = Date.now();
  const results = await downloadBatch(images, 15);
  const successCount = results.filter(r => r.success).length;
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== DOWNLOAD COMPLETE ===`);
  console.log(`Successfully downloaded: ${successCount} / ${images.length} images`);
  console.log(`Failed: ${images.length - successCount}`);
  console.log(`Total duration: ${duration} seconds`);
}

start();
