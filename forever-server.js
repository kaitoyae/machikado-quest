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

// プロセスの終了を防止するために、uncaughtExceptionイベントをキャッチ
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

// SIGINT（Ctrl+C）シグナルを無視して、強制終了を防止
process.on('SIGINT', () => {
  console.log('SIGINT received. Server will continue running...');
  console.log('Press Ctrl+C again (multiple times) to force exit.');
});

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  // デバッグのためにリクエストヘッダーを出力
  console.log('Request headers:', req.headers);
  
  // パスの正規化: 'machikado-quest' プレフィックスを削除
  let normalizedUrl = req.url;
  if (normalizedUrl.startsWith('/machikado-quest/')) {
    normalizedUrl = normalizedUrl.replace('/machikado-quest', '');
    console.log(`Normalized URL: ${normalizedUrl}`);
  }
  
  // デフォルトのページをindex.htmlに設定
  let filePath = path.join(ROOT_DIR, normalizedUrl);
  if (normalizedUrl === '/' || normalizedUrl === '') {
    filePath = path.join(ROOT_DIR, 'index.html');
  }
  
  // URLにファイル拡張子が含まれていない場合はディレクトリとみなし、index.htmlを追加
  if (!path.extname(filePath) && !filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(filePath) && filePath.endsWith('/')) {
    filePath = path.join(filePath, 'index.html');
  }
  
  console.log(`Trying to serve file: ${filePath}`);
  
  // ファイルが存在するか確認
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // ファイルが見つからない場合、別のパスを試す
      // 例: /machikado-quest/_next/static/... -> /out/_next/static/...
      if (normalizedUrl.includes('/_next/')) {
        const alternativePath = path.join(ROOT_DIR, normalizedUrl.replace('/_next/', '/_next/'));
        console.log(`Trying alternative path: ${alternativePath}`);
        
        fs.access(alternativePath, fs.constants.F_OK, (altErr) => {
          if (altErr) {
            handleFileNotFound(res, filePath);
          } else {
            serveFile(alternativePath, res);
          }
        });
      } else {
        handleFileNotFound(res, filePath);
      }
    } else {
      serveFile(filePath, res);
    }
  });
});

// ファイル提供関数
function serveFile(filePath, res) {
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error(`Error reading file: ${filePath}`, error);
      
      if (error.code === 'ENOENT') {
        handleFileNotFound(res, filePath);
      } else {
        // サーバーエラー
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // 成功
      console.log(`Successfully served: ${filePath}`);
      
      // CORSヘッダーを追加
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
      });
      res.end(content, 'utf-8');
    }
  });
}

// 404エラー処理関数
function handleFileNotFound(res, filePath) {
  console.warn(`File not found: ${filePath}`);
  
  fs.readFile(path.join(ROOT_DIR, '404.html'), (err, content) => {
    if (err) {
      console.error(`Error reading 404.html file`, err);
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
}

// タイムアウトを長く設定
server.timeout = 120000; // 2分

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Network access at http://0.0.0.0:${PORT}/`);
  console.log(`Also try http://127.0.0.1:${PORT}/`);
  console.log('Press Ctrl+C multiple times to exit.');
  
  // ファイル構造をデバッグ出力
  console.log('Directory structure for images:');
  try {
    const imagesDir = path.join(ROOT_DIR, 'images');
    if (fs.existsSync(imagesDir)) {
      console.log(`Images directory exists: ${imagesDir}`);
      const files = fs.readdirSync(imagesDir);
      console.log('Files in images directory:', files);
    } else {
      console.log(`Images directory not found: ${imagesDir}`);
    }
  } catch (err) {
    console.error('Error checking directory structure:', err);
  }
  
  // サーバーを起動したことを明確に表示
  setInterval(() => {
    process.stdout.write('.');
  }, 10000);
}); 