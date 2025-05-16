export default function customImageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/machikado-quest' : '';
  
  // 既に完全なURLまたはbasePath付きのパスの場合はそのまま返す
  if (src.startsWith('http') || (basePath && src.startsWith(basePath))) {
    return src;
  }
  
  // プレースホルダー画像の場合
  if (src.includes('placeholder')) {
    return `${basePath}${src}`;
  }
  
  // app/ フォルダ内の画像かチェック
  if (src.includes('app-')) {
    // app/ フォルダが既に含まれているかチェック
    if (src.includes('/app/')) {
      return `${basePath}${src}`;
    }
    // app-で始まる画像は images/ に直接配置されている
    return `${basePath}${src}`;
  }
  
  // 通常の画像
  return `${basePath}${src}${quality ? `?q=${quality}` : ''}`;
} 