const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { name: 'action.jpg', url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&h=600&fit=crop' },
  { name: 'scifi.jpg', url: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=400&h=600&fit=crop' },
  { name: 'horror.jpg', url: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=400&h=600&fit=crop' },
  { name: 'drama.jpg', url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=400&h=600&fit=crop' },
  { name: 'comedy.jpg', url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=400&h=600&fit=crop' },
  { name: 'thriller.jpg', url: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=400&h=600&fit=crop' },
  { name: 'documentary.jpg', url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&h=600&fit=crop' }
];

const dir = path.join(__dirname, 'public', 'images', 'vod');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

images.forEach(img => {
  const filePath = path.join(dir, img.name);
  const file = fs.createWriteStream(filePath);
  https.get(img.url, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      https.get(response.headers.location, function(redirectResponse) {
         redirectResponse.pipe(file);
      });
    } else {
      response.pipe(file);
    }
    file.on('finish', () => {
      file.close();
      console.log('Downloaded ' + img.name);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error('Error downloading ' + img.name + ': ' + err.message);
  });
});
