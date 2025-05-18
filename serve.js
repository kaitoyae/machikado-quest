const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8081;
const ROOT_DIR = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  // デフォルトのページをindex.htmlに設定
  let filePath = path.join(ROOT_DIR, req.url);
  if (req.url === '/' || req.url === '') {
    filePath = path.join(ROOT_DIR, 'index.html');
  }
  
  // URLにファイル拡張子が含まれていない場合はディレクトリとみなし、index.htmlを追加
  if (!path.extname(filePath) && !filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(filePath) && filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // ファイルが見つからない場合は404.htmlに転送
        fs.readFile(path.join(ROOT_DIR, '404.html'), (err, content) => {
          if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // サーバーエラー
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // 成功
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Network access at http://0.0.0.0:${PORT}/`);
}); 