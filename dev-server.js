const { spawn } = require('child_process');
const readline = require('readline');

// プロセスの終了を防止するために、uncaughtExceptionイベントをキャッチ
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

// SIGINT（Ctrl+C）シグナルを監視して、複数回押された場合のみ終了
let sigintCount = 0;
process.on('SIGINT', () => {
  sigintCount++;
  console.log(`SIGINT received (${sigintCount}/3). Press Ctrl+C ${3-sigintCount} more times to exit.`);
  
  if (sigintCount >= 3) {
    console.log('Exiting...');
    process.exit(0);
  }
});

console.log('Starting Next.js development server...');

// Next.js開発サーバーを起動
const nextServer = spawn('npx', ['next', 'dev', '-H', '0.0.0.0'], {
  stdio: ['pipe', 'pipe', 'pipe'],
  shell: true
});

// 標準出力のストリームを処理
nextServer.stdout.on('data', (data) => {
  process.stdout.write(data);
});

// 標準エラー出力のストリームを処理
nextServer.stderr.on('data', (data) => {
  process.stderr.write(data);
});

// プロセスの終了を監視
nextServer.on('close', (code) => {
  console.log(`Next.js server process exited with code ${code}`);
  console.log('Restarting server...');
  
  // 5秒後にサーバーを再起動
  setTimeout(() => {
    // 再帰的に自身を実行
    const newServer = spawn('node', ['dev-server.js'], {
      stdio: 'inherit',
      shell: true,
      detached: true
    });
    newServer.unref();
    process.exit(0);
  }, 5000);
});

// 10秒ごとにハートビートを出力
setInterval(() => {
  process.stdout.write('♥');
}, 10000);

console.log('Next.js server wrapper is running. Press Ctrl+C three times to exit.'); 