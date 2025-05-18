const fs = require('fs');
const path = require('path');

// outディレクトリのパス
const OUT_DIR = path.join(__dirname, 'out');

// next.config.mjsのbasePathを取得
const getBasePath = () => {
  try {
    const nextConfigPath = path.join(__dirname, 'next.config.mjs');
    const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
    const basePathMatch = nextConfigContent.match(/basePath: [^,]+'([^']+)'/);
    if (basePathMatch && basePathMatch[1]) {
      return basePathMatch[1];
    }
    return '';
  } catch (error) {
    console.error('Error reading next.config.mjs:', error);
    return '';
  }
};

// HTMLファイル内のパス参照を修正
const fixHtmlPaths = () => {
  console.log('Fixing HTML file paths...');
  const htmlFiles = findFiles(OUT_DIR, '.html');
  console.log(`Found ${htmlFiles.length} HTML files`);

  htmlFiles.forEach(filePath => {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // すでに /machikado-quest/ で始まるパスを / に修正
    html = html.replace(/["'](\/machikado-quest\/)/g, '"$1');
    
    // パスの修正を適用
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Fixed: ${filePath}`);
  });
};

// 特定の拡張子を持つファイルを再帰的に検索
const findFiles = (dir, extension) => {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extension));
    } else if (path.extname(file) === extension) {
      results.push(filePath);
    }
  });
  
  return results;
};

// ディレクトリ構造を表示
const printDirectoryStructure = (dir, level = 0) => {
  const indent = '  '.repeat(level);
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      console.log(`${indent}📁 ${item}/`);
      if (level < 2) { // 深さを制限して出力を抑える
        printDirectoryStructure(itemPath, level + 1);
      } else {
        console.log(`${indent}  ...`);
      }
    } else {
      console.log(`${indent}📄 ${item}`);
    }
  });
};

// リダイレクト用のindex.htmlを作成
const createRedirectIndex = () => {
  const basePath = getBasePath();
  if (!basePath) return;
  
  console.log(`Creating redirect for basePath: ${basePath}`);
  
  const redirectHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    window.location.href = "${basePath}/";
  </script>
  <meta http-equiv="refresh" content="0; url=${basePath}/">
</head>
<body>
  <p>Redirecting to <a href="${basePath}/">${basePath}/</a>...</p>
</body>
</html>
`;

  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), redirectHtml, 'utf8');
  console.log('Created redirect index.html');
};

// imagesディレクトリをmachikado-quest/imagesにコピー
const copyImagesDirectory = () => {
  const sourceDir = path.join(OUT_DIR, 'images');
  const targetDir = path.join(OUT_DIR, 'machikado-quest', 'images');
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    return;
  }
  
  // machikado-quest ディレクトリが存在しない場合は作成
  if (!fs.existsSync(path.join(OUT_DIR, 'machikado-quest'))) {
    fs.mkdirSync(path.join(OUT_DIR, 'machikado-quest'), { recursive: true });
  }
  
  // machikado-quest/images ディレクトリが存在しない場合は作成
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  console.log(`Copying images from ${sourceDir} to ${targetDir}`);
  
  // imagesディレクトリの内容をコピー
  const copyFiles = (source, target) => {
    const items = fs.readdirSync(source);
    
    items.forEach(item => {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory()) {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
        }
        copyFiles(sourcePath, targetPath);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Copied: ${sourcePath} -> ${targetPath}`);
      }
    });
  };
  
  copyFiles(sourceDir, targetDir);
};

// _nextディレクトリをmachikado-quest/_nextにコピー
const copyNextDirectory = () => {
  const sourceDir = path.join(OUT_DIR, '_next');
  const targetDir = path.join(OUT_DIR, 'machikado-quest', '_next');
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    return;
  }
  
  // machikado-quest ディレクトリが存在しない場合は作成
  if (!fs.existsSync(path.join(OUT_DIR, 'machikado-quest'))) {
    fs.mkdirSync(path.join(OUT_DIR, 'machikado-quest'), { recursive: true });
  }
  
  // machikado-quest/_next ディレクトリが存在しない場合は作成
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  console.log(`Copying _next from ${sourceDir} to ${targetDir}`);
  
  // _nextディレクトリの内容を再帰的にコピー
  const copyFiles = (source, target) => {
    const items = fs.readdirSync(source);
    
    items.forEach(item => {
      const sourcePath = path.join(source, item);
      const targetPath = path.join(target, item);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory()) {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
        }
        copyFiles(sourcePath, targetPath);
      } else {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Copied: ${sourcePath} -> ${targetPath}`);
      }
    });
  };
  
  copyFiles(sourceDir, targetDir);
};

// メイン処理
console.log('Starting path fixing process...');
console.log('Current out directory structure:');
printDirectoryStructure(OUT_DIR);

// コピー処理の実行
copyImagesDirectory();
copyNextDirectory();
//fixHtmlPaths();
//createRedirectIndex();

console.log('Path fixing process completed.');
console.log('Updated out directory structure:');
printDirectoryStructure(OUT_DIR);

console.log('Now restart the server with: node forever-server.js'); 