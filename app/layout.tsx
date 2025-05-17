import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DevNotice from '@/components/dev-notice'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'まちかどクエスト - 街中冒険ARゲーム',
  description: '地域活性・観光・防災教育に応用可能な、社会接続型ARゲーム『まちかどクエスト』',
  generator: 'v0.dev',
  icons: {
    icon: '/placeholder-logo.png',
    apple: '/placeholder-logo.png',
  },
  openGraph: {
    title: 'まちかどクエスト - 街中冒険ARゲーム',
    description: '地域活性・観光・防災教育に応用可能な、社会接続型ARゲーム『まちかどクエスト』',
    images: ['/placeholder-logo.png'],
  },
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
        <style>{`
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
            --card: 0 0% 100%;
            --card-foreground: 0 0% 3.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 0 0% 3.9%;
            --primary: 174 51% 50%;
            --primary-foreground: 0 0% 98%;
            --secondary: 49 100% 68%;
            --secondary-foreground: 0 0% 9%;
            --muted: 0 0% 96.1%;
            --muted-foreground: 0 0% 45.1%;
            --accent: 214 100% 34%;
            --accent-foreground: 0 0% 98%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
            --border: 174 51% 90%;
            --input: 174 51% 90%;
            --ring: 174 51% 50%;
            --radius: 0.5rem;
          }
          
          .dark {
            --background: 214 70% 10%;
            --foreground: 0 0% 98%;
            --card: 214 50% 15%;
            --card-foreground: 0 0% 98%;
            --popover: 214 50% 15%;
            --popover-foreground: 0 0% 98%;
            --primary: 174 51% 50%;
            --primary-foreground: 0 0% 98%;
            --secondary: 49 100% 68%;
            --secondary-foreground: 214 70% 10%;
            --muted: 214 30% 25%;
            --muted-foreground: 0 0% 63.9%;
            --accent: 214 100% 34%;
            --accent-foreground: 0 0% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
            --border: 214 30% 25%;
            --input: 214 30% 25%;
            --ring: 174 51% 50%;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        {children}
        <DevNotice />
      </body>
    </html>
  )
}
