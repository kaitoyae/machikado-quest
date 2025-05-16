import type { Metadata } from 'next'
import './globals.css'
import DevNotice from '@/components/dev-notice'

export const metadata: Metadata = {
  title: 'Machikado Quest - 街中冒険ARゲーム',
  description: '地域活性・観光・防災教育に応用可能な、社会接続型ARゲーム『まちかどクエスト』',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
        <DevNotice />
      </body>
    </html>
  )
}
