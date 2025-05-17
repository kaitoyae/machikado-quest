import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Lightbulb, Zap, ChevronRight, Building2, GraduationCap, ShoppingBag } from "lucide-react"

// 環境に応じてbasePath（プレフィックス）を追加する関数
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/machikado-quest' : '';
  
  // 既に完全なURLまたはbasePath付きのパスの場合はそのまま返す
  if (path.startsWith('http') || path.startsWith('/machikado-quest/')) {
    return path;
  }
  
  // プレースホルダー画像の場合
  if (path.includes('placeholder')) {
    return `${basePath}${path}`;
  }
  
  // app- で始まる画像の場合も通常の画像と同様に処理する
  // 通常の画像
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
};

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/placeholder-logo.png" alt="まちかどクエスト" width={120} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#overview"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              概要
            </Link>
            <Link
              href="#poc"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              実証事例
            </Link>
            <Link
              href="#use-cases"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              活用シーン
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              お問い合わせ
            </Link>
            <Button size="sm" className="ml-4 bg-primary hover:bg-primary/80">
              デモ申し込み
            </Button>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src={getImagePath("/images/main-visual-tower.png")}
              alt="電波塔を含む住宅街の風景"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32 flex flex-col md:flex-row items-center">
            <div className="md:w-6/12 space-y-6 md:pr-8">
              <div className="inline-block mb-4">
                <span className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm px-5 py-2 rounded-full text-sm font-bold shadow-lg">2025年夏リリース予定</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-shadow-lg leading-tight">
                あなたの街が、<br className="hidden md:block" />
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  "冒険の舞台"
                </span>
                <br className="hidden md:block" />になる。
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                地域活性・観光・防災教育に応用可能な、<br className="hidden md:block" />社会接続型ARゲーム『まちかどクエスト』
              </p>
              <p className="text-lg md:text-xl text-white/80">
                スマホで楽しめる位置情報×AR×地域連携型のRPG
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]">
                  導入相談を申し込む
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="md:w-6/12 mt-10 md:mt-0 relative">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-lg shadow-2xl transform rotate-3 opacity-80">
                  <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-primary/10 backdrop-blur-sm"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90%] h-[90%] overflow-hidden rounded-lg shadow-2xl">
                    <Image
                      src={getImagePath("/images/main-visual-tower.png")}
                      alt="電波塔を含む住宅街の風景"
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-white">
                        <MapPin className="h-5 w-5" />
                        <span className="text-sm font-medium">あなたの街をマップに</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="font-bold text-xl">AR</div>
                    <div className="text-xs">EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 to-transparent h-12"></div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">🎯 地方自治体の課題 × まちかどクエストの解決策</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                『まちかどクエスト』は、現実の街を舞台にプレイヤーが"記憶の冒険者"となって探索・戦闘・交流を行うARリアルフィールドRPGです。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="bg-rose-50 p-5 md:w-2/5">
                    <div className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">課題</div>
                    <h3 className="text-xl font-bold">若者の街への関心の低下</h3>
                  </div>
                  <div className="p-5 md:w-3/5 flex flex-col">
                    <div className="bg-primary/20 text-primary font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">解決策</div>
                    <p className="text-foreground/80 font-medium mb-3">
                      スマホ×ARで街を"冒険"の場に変える体験設計
                    </p>
                    <div className="mt-auto flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        ARバトルやストーリーベースのクエストで地域探索のインセンティブを作成
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="bg-rose-50 p-5 md:w-2/5">
                    <div className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">課題</div>
                    <h3 className="text-xl font-bold">商店街の集客不足</h3>
                  </div>
                  <div className="p-5 md:w-3/5 flex flex-col">
                    <div className="bg-primary/20 text-primary font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">解決策</div>
                    <p className="text-foreground/80 font-medium mb-3">
                      店舗がアイテムスポットに→ゲーム目的で来訪
                    </p>
                    <div className="mt-auto flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        地元のランドマーク、店舗、伝説を没入型のクエストコンテンツに変換
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="bg-rose-50 p-5 md:w-2/5">
                    <div className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">課題</div>
                    <h3 className="text-xl font-bold">防災・地域教育の難しさ</h3>
                  </div>
                  <div className="p-5 md:w-3/5 flex flex-col">
                    <div className="bg-primary/20 text-primary font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">解決策</div>
                    <p className="text-foreground/80 font-medium mb-3">
                      ストーリーに街の歴史や災害知識を組み込む
                    </p>
                    <div className="mt-auto flex items-start gap-2">
                      <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        政府、学校、住民がゲーム内コンテンツを協力して形作る共創型設計
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="bg-rose-50 p-5 md:w-2/5">
                    <div className="bg-rose-100 text-rose-800 font-bold px-3 py-1 rounded-full text-xs inline-block mb-3">課題</div>
                    <h3 className="text-xl font-bold">住民参加イベントのマンネリ</h3>
                  </div>
                  <div className="p-5 md:w-3/5 flex flex-col">
                    <div className="bg-primary/20 text-primary font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">解決策</div>
                    <p className="text-foreground/80 font-medium mb-3">
                      季節イベントやギルド戦で地域内の継続的な関心を創出
                    </p>
                    <div className="mt-auto flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        カスタムインフラ不要、モバイルブラウザや軽量アプリで簡単導入
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">実際のARゲーム体験</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-md group">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <Image 
                      src={getImagePath("/images/monster-battle.png")}
                      alt="街中でのARモンスターバトル"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-white font-bold mb-1 text-shadow-sm">街中でのARバトル</h4>
                    <p className="text-white/80 text-sm">ランドマークでモンスターと対戦</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl shadow-md group">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <Image 
                      src={getImagePath("/images/item-spot.png")}
                      alt="商店街のARアイテムスポット"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-white font-bold mb-1 text-shadow-sm">店舗連携システム</h4>
                    <p className="text-white/80 text-sm">商店街がゲーム内アイテムスポットに</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-xl shadow-md group">
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <Image 
                      src={getImagePath("/images/history-quest.png")}
                      alt="地域の歴史学習クエスト"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-white font-bold mb-1 text-shadow-sm">歴史学習クエスト</h4>
                    <p className="text-white/80 text-sm">地域の伝承や防災知識を楽しく学ぶ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PoC Examples Section */}
        <section id="poc" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">実証実験の事例</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                すでに実施されている実証実験から、『まちかどクエスト』の可能性をご覧ください。
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">川口市でのパイロット事例 <span className="text-primary text-lg ml-2">2025年7月ローンチ</span></h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>地元のボスバトル：市内の名所でARボスと対戦</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>地元店舗で"魔除けアイテム"を配布、活性化へ</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    詳細な事例を見る
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Image 
                    src={getImagePath("/images/kawaguchi-poc.png")}
                    alt="Kawaguchi City AR Map"
                    width={800}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium text-shadow">あなたの街でも、このような体験を</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">活用シーン</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                『まちかどクエスト』は様々な分野で活用できます。あなたの地域のニーズに合わせてカスタマイズが可能です。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>教育</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    歴史や防災について教える学校のクエスト。子どもたちが楽しみながら学べる体験型学習を提供します。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>地域の歴史を学ぶARタイムトラベル</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>防災知識を身につける冒険クエスト</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <ShoppingBag className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>商業</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    ゲーム内アイテムドロップを通じて小規模ビジネスへの来店を促進。地元経済の活性化に貢献します。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>商店街スタンプラリーの現代版</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>地元店舗限定の特典アイテム</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>観光</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    地元の神話や物語を取り入れたAR案内ツアー。観光客に新しい体験を提供し、リピーターを増やします。
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>伝説の生き物と出会えるAR観光</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>隠れた名所を発見する冒険</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">🔍 他サービスとの違いは？（競合比較）</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                ポケモンGOでは描けなかった"あなたの街らしさ"が、ここにある。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* 競合製品1: ポケモンGO */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100">
                <div className="p-1 bg-gradient-to-br from-gray-50 to-gray-200">
                  <div className="h-40 flex items-center justify-center p-4">
                    <Image 
                      src="/placeholder-xosu1.png" 
                      alt="ポケモンGO"
                      width={120}
                      height={120}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">ポケモンGO</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-sm">決まった地図・固定体験</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-sm">地域資源の活用は限定的</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-sm">グローバル運営で調整不可</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-sm">教育・福祉との接続なし</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <span className="text-sm">高額ライセンス</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 競合製品2: SCRAP */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100">
                <div className="p-1 bg-gradient-to-br from-gray-50 to-gray-200">
                  <div className="h-40 flex items-center justify-center p-4">
                    <Image 
                      src="/placeholder-y8siu.png" 
                      alt="SCRAP（リアル脱出ゲーム）"
                      width={120}
                      height={120}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">SCRAP</h3>
                  <p className="text-sm text-center text-muted-foreground mb-4">（リアル脱出ゲーム）</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span className="text-sm">特定会場のみ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span className="text-sm">地域資源を物語的に演出</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span className="text-sm">都度イベント発注</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span className="text-sm">物語によっては教育連携可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      <span className="text-sm">イベント単発型</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 自社製品: まちかどクエスト */}
              <div className="bg-primary/10 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] border-2 border-primary relative">
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">おすすめ</div>
                </div>
                <div className="p-1 bg-gradient-to-br from-white to-primary/10">
                  <div className="h-40 flex items-center justify-center p-4">
                    <Image 
                      src="/placeholder-logo.png" 
                      alt="まちかどクエスト"
                      width={160}
                      height={160}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center text-primary">まちかどクエスト</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm font-medium">実際の街を自由に冒険フィールド化</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm font-medium">店舗・歴史・伝承などを自在に組み込める</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm font-medium">自治体と共創できるPoC型モデル</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm font-medium">防災・探究・地域福祉と連携設計が可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-sm font-medium">低コストでの持続運用が可能</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
                <span className="mr-2">✨</span>
                <p className="text-lg">
                  他社製品が"一時的なエンタメ"にとどまる中で、まちかどクエストは"地域と共に育つ社会接続型コンテンツ"です。
                </p>
              </div>
            </div>
            
            {/* 評価レーティングバー */}
            <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">製品比較レーダーチャート</h3>
              
              <div className="space-y-8">
                {/* 地域特性の反映 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">地域特性の反映</span>
                    <span className="text-sm text-muted-foreground">高いほど良い</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm">ポケモンGO</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-red-300 to-red-500 h-full rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">30%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm">SCRAP</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '55%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">55%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm font-medium text-primary">まちかどクエスト</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary/70 to-primary h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">95%</span>
                  </div>
                </div>
                
                {/* 地域課題への貢献 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">地域課題への貢献</span>
                    <span className="text-sm text-muted-foreground">高いほど良い</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm">ポケモンGO</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-red-300 to-red-500 h-full rounded-full transition-all duration-500" style={{ width: '20%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">20%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm">SCRAP</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '40%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">40%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm font-medium text-primary">まちかどクエスト</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary/70 to-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">90%</span>
                  </div>
                </div>
                
                {/* カスタマイズ性 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">カスタマイズ性</span>
                    <span className="text-sm text-muted-foreground">高いほど良い</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm">ポケモンGO</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-red-300 to-red-500 h-full rounded-full transition-all duration-500" style={{ width: '10%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">10%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm">SCRAP</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">60%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm font-medium text-primary">まちかどクエスト</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary/70 to-primary h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">95%</span>
                  </div>
                </div>
                
                {/* コスト効率 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">コスト効率</span>
                    <span className="text-sm text-muted-foreground">高いほど良い</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-28 text-sm">ポケモンGO</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-red-300 to-red-500 h-full rounded-full transition-all duration-500" style={{ width: '15%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">15%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm">SCRAP</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-300 to-amber-500 h-full rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">30%</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="w-28 text-sm font-medium text-primary">まちかどクエスト</span>
                    <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-primary/70 to-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                    </div>
                    <span className="w-8 text-sm text-center">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* アプリの主要機能セクション */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">アプリの主要機能</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                『まちかどクエスト』で体験できる主な機能をご紹介します。
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 overflow-hidden max-w-5xl mx-auto">
              <div className="md:w-1/3 relative">
                <div className="aspect-[9/16] overflow-hidden rounded-3xl shadow-lg border-8 border-gray-900 relative mx-auto max-w-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Image 
                      src={getImagePath("/images/app-map-screen.png")}
                      alt="メインマップ画面"
                      width={300}
                      height={600}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-bold text-xl mb-2">マップ探索</h3>
                  <p className="text-muted-foreground">位置情報と連動した冒険マップで街を探索</p>
                </div>
              </div>
              <div className="md:w-1/3 relative md:mt-12">
                <div className="aspect-[9/16] overflow-hidden rounded-3xl shadow-lg border-8 border-gray-900 relative mx-auto max-w-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Image 
                      src={getImagePath("/images/app-battle-screen.png")}
                      alt="バトル画面"
                      width={300}
                      height={600}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-bold text-xl mb-2">ARバトル</h3>
                  <p className="text-muted-foreground">カメラを通してモンスターと臨場感ある戦闘</p>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <div className="aspect-[9/16] overflow-hidden rounded-3xl shadow-lg border-8 border-gray-900 relative mx-auto max-w-[300px]">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Image 
                      src={getImagePath("/images/app-quest-screen.png")}
                      alt="クエスト一覧画面"
                      width={300}
                      height={600}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-bold text-xl mb-2">クエスト管理</h3>
                  <p className="text-muted-foreground">地域に即したストーリーや季節イベント</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary/80">
                デモ体験を申し込む
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">まずは無料で、お試しいただけます。</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                PoC（実証実験）を導入検討中の自治体様に向けて、
                初回のヒアリング・企画設計・簡易デモ作成、小規模な街区でのテスト運用までは完全無料でご提供しています。
                その後、徐々に街全体や観光・教育エリアへの拡張が可能です。
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* 縦の線 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
                
                {/* ステップ1: 無料導入相談プラン */}
                <div className="relative z-10 mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
                    <h3 className="text-xl font-bold mb-2 text-center">無料導入相談プラン</h3>
                    <div className="flex justify-center mb-3">
                      <span className="inline-block bg-primary/20 text-primary font-bold px-4 py-1 rounded-full text-sm">¥0</span>
                    </div>
                    <p className="text-center text-muted-foreground mb-4">オンライン相談＋地域課題ヒアリング＋簡易デモ作成</p>
                  <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>現地調査・地域資源の洗い出し</span>
                    </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>地域課題に合わせたシナリオ提案</span>
                    </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>小規模エリアでのPoCデモ実施</span>
                    </li>
                  </ul>
                  </div>
                </div>
                
                {/* 中央の矢印 */}
                <div className="flex justify-center mb-8">
                  <div className="bg-white rounded-full p-2 shadow-md z-10">
                    <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                  </div>
                </div>
                
                {/* ステップ2: 拡張導入プラン */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary">
                    <h3 className="text-xl font-bold mb-2 text-center">拡張導入プラン（オプション）</h3>
                    <div className="flex justify-center mb-3">
                      <span className="inline-block bg-slate-100 text-slate-800 font-bold px-4 py-1 rounded-full text-sm">ご相談ください</span>
                    </div>
                    <p className="text-center text-muted-foreground mb-4">小規模エリアからスタートし、教育・観光・福祉などへ段階的に拡張可能なカスタム設計</p>
                  <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>対象エリアの拡大（街全体、観光地など）</span>
                    </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>地域資源との連携強化（商店街、学校など）</span>
                    </li>
                      <li className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                        <span>長期的な運用体制の構築と効果測定</span>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg font-medium mb-6">導入の第一歩として、まずはお気軽にご相談ください。</p>
              <Button size="lg" className="bg-primary hover:bg-primary/80">
                無料相談を申し込む
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-accent/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">あなたの街を、共に冒険に。</h2>
              <p className="text-lg text-muted-foreground">
                『まちかどクエスト』で、地域の新しい魅力を発見し、コミュニティを活性化しましょう。
                私たちのチームがあなたの自治体に最適なソリューションをご提案します。
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/80 text-white">
                  今すぐPoCの相談をする
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-slate-50">
        <div className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image src="/placeholder-logo.png" alt="まちかどクエスト" width={120} height={40} className="h-10 w-auto" />
              <p className="text-sm text-muted-foreground">地域と技術を繋ぎ、新しい体験を創造する</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">会社情報</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    ミッション
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    チーム
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    採用情報
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">リソース</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    導入事例
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    ブログ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    ドキュメント
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">お問い合わせ</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-muted-foreground">
                  <strong>メール:</strong> contact@wovi.jp
                </li>
                <li className="text-muted-foreground">
                  <strong>所在地:</strong> 東京都渋谷区
                </li>
                <li className="text-muted-foreground">
                  <strong>設立:</strong> 2025年
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">X</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Wovi Inc. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                利用規約
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
