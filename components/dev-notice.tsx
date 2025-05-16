'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DevNotice() {
  const [visible, setVisible] = useState(true)
  const [url, setUrl] = useState('')

  useEffect(() => {
    // サーバーの場合にはwindowオブジェクトにアクセスしない
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      const port = window.location.port
      setUrl(`http://${hostname}:${port}`)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-emerald-600 text-white p-4 rounded-lg shadow-lg z-50">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold mb-1">開発サーバー稼働中</h3>
          <p className="text-sm mb-2">
            以下のURLでアクセスできます：
          </p>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white underline font-medium"
          >
            {url}
          </a>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6 text-white hover:bg-emerald-700" 
          onClick={() => setVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 