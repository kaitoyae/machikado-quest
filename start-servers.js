const { spawn } = require('child_process');

console.log('Starting both development and static servers...');

// Next.js開発サーバーを起動（バックグラウンド）
const nextServer = spawn('node', ['dev-server.js'], {
  stdio: 'inherit',
  shell: true,
  detached: true
});

// 静的ファイルサーバーを起動（フォアグラウンド）
console.log('Starting static file server on port 8081...');
const staticServer = spawn('node', ['forever-server.js'], {
  stdio: 'inherit',
  shell: true
});

console.log('Both servers should be running now.');
console.log('Next.js development server: http://localhost:3000');
console.log('Static file server: http://localhost:8081/');
console.log('Use Ctrl+C multiple times to exit'); 