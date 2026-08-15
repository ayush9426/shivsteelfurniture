const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const itemsToCopy = ['index.html', 'app.js', 'styles.css', 'activate-email.html', 'images'];

itemsToCopy.forEach(item => {
  copyRecursiveSync(path.join(__dirname, item), path.join(dist, item));
});

console.log('Build completed successfully. Files copied to dist/');
