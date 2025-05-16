// このファイルはNext.jsによってビルド時に使用され、
// デフォルトのドキュメント構造をカスタマイズします
import fs from 'fs';
import path from 'path';

export async function injectCss(html) {
  // ビルド時にスタイルシートをインジェクションする
  try {
    // outディレクトリからCSSファイルを探す
    const outDir = path.join(process.cwd(), 'out', '_next', 'static', 'css');
    const cssFiles = fs.readdirSync(outDir).filter(file => file.endsWith('.css'));
    
    if (cssFiles.length > 0) {
      // CSSファイルの内容を読み込む
      const cssPath = path.join(outDir, cssFiles[0]);
      let cssContent = fs.readFileSync(cssPath, 'utf8');
      
      // HTMLにCSSを直接埋め込む
      const styleTag = `<style id="inline-css">${cssContent}</style>`;
      html = html.replace('</head>', `${styleTag}</head>`);
      
      // 元のCSSリンクタグを削除
      const linkRegex = new RegExp(`<link[^>]*href=["'][^"']*${cssFiles[0]}["'][^>]*>`, 'g');
      html = html.replace(linkRegex, '');
    }
  } catch (error) {
    console.error('Error injecting CSS:', error);
  }
  
  return html;
}

export default {}; 