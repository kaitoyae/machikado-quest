const fs = require('fs');
const path = require('path');
const glob = require('glob');

// CSSファイルの内容を読み込む関数
function readCssContent() {
  try {
    const outDir = path.join(process.cwd(), 'out', '_next', 'static', 'css');
    const cssFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.css'));
    
    if (cssFiles.length > 0) {
      const cssPath = path.join(outDir, cssFiles[0]);
      return {
        content: fs.readFileSync(cssPath, 'utf8'),
        fileName: cssFiles[0]
      };
    }
  } catch (error) {
    console.error('Error reading CSS file:', error);
  }
  
  return { content: '', fileName: '' };
}

// HTMLファイルにCSSを埋め込む関数
function injectCssToHtml(htmlPath, cssContent, cssFileName) {
  try {
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // リンクタグを見つけてスタイルタグに置き換える
    const linkRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFileName}["'][^>]*>`, 'g');
    const styleTag = `<style id="inline-css">${cssContent}</style>`;
    
    // リンクタグを削除する
    html = html.replace(linkRegex, '');
    
    // スタイルタグを追加する
    html = html.replace('</head>', `${styleTag}</head>`);
    
    // ファイルに書き戻す
    fs.writeFileSync(htmlPath, html);
    console.log(`Injected CSS into ${htmlPath}`);
  } catch (error) {
    console.error(`Error injecting CSS to ${htmlPath}:`, error);
  }
}

// メイン処理
function main() {
  console.log('Starting post-build CSS injection...');
  
  const { content, fileName } = readCssContent();
  
  if (!content || !fileName) {
    console.error('No CSS file found or could not read CSS content.');
    return;
  }
  
  console.log(`Found CSS file: ${fileName}`);
  
  // 全HTMLファイルを処理
  const htmlFiles = glob.sync('out/**/*.html');
  
  htmlFiles.forEach(htmlFile => {
    injectCssToHtml(htmlFile, content, fileName);
  });
  
  console.log(`Processed ${htmlFiles.length} HTML files.`);
}

main(); 