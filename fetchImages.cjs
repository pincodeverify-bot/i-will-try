const https = require('https');

https.get('https://www.sinteredfilter.net/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      images.add(match[1]);
    }
    
    // Also try to find background images if any
    const bgRegex = /background-image:\s*url\((['"]?)([^'">]+)\1\)/g;
    while ((match = bgRegex.exec(data)) !== null) {
      images.add(match[2]);
    }
    
    console.log(Array.from(images).join('\n'));
  });
}).on('error', err => console.error(err));
