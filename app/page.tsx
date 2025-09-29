import Link from 'next/link';

export default function HomePage() {
  // カテゴリ別おすすめプランセクションは削除（要望対応）

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* BreadcrumbList (ホーム単体) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://example.com/' }
            ]
          })
        }}
      />
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '格安SIMに乗り換えるとどのくらい安くなりますか？',
                acceptedAnswer: { '@type': 'Answer', text: '大手キャリアから格安SIMに乗り換えると、月額料金を2,000〜4,000円削減できます。年間で24,000〜48,000円の節約が可能です。データ使用量3GB以下なら月990円から利用でき、30GBでも2,970円程度で利用できます。' }
              },
              {
                '@type': 'Question',
                name: '乗り換え時に電話番号は変わりますか？',
                acceptedAnswer: { '@type': 'Answer', text: 'MNP（携帯電話番号ポータビリティ）を利用すれば、現在の電話番号をそのまま使用できます。手続きは約30分程度で完了し、番号が使えない期間はほとんどありません。' }
              },
              {
                '@type': 'Question',
                name: '格安SIMでも通信速度は問題ありませんか？',
                acceptedAnswer: { '@type': 'Answer', text: 'ahamo、povo、LINEMOなどのオンライン専用プランは大手キャリアの回線を直接使用しているため、通信品質は大手キャリアと同等です。ただし、昼休みや夜間など混雑時間帯は速度低下する可能性があります。' }
              },
              {
                '@type': 'Question',
                name: 'eSIMと通常のSIMカードの違いは何ですか？',
                acceptedAnswer: { '@type': 'Answer', text: 'eSIMは端末内蔵型の電子SIMで物理カード不要。オンラインで即時開通でき、複数回線の切り替えや海外現地プランへの変更が容易です。紛失や破損リスクもありません。' }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/40 to-blue-500/30 blur-3xl" aria-hidden="true"></div>
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-500/25 blur-[120px]" aria-hidden="true"></div>
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top,_rgba(255,255,255,0.35)_0%,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(96,165,250,0.25)_0%,_transparent_60%)]" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <i className="ri-award-line text-yellow-400 mr-2"></i>
                <span className="text-sm font-medium">2025年最新 中立比較ガイド</span>
              </div>
              <div className="mb-6">
                {/* AdDisclosure (インライン化でクライアントJS削減) */}
                <span 
                  className="inline-flex items-center rounded-full text-xs font-medium tracking-wide px-3 py-1 bg-black/40 text-white border border-white/20 backdrop-blur-sm" 
                  aria-label="広告・PRを含む表示" role="note"
                >
                  <i className="ri-advertisement-line text-base mr-1" aria-hidden="true"></i>
                  広告・PRを含みます
                  <span className="sr-only"> 本サイトの一部リンク経由で成果が発生した場合、運営に報酬が入ることがあります。掲載内容は中立性維持に努めています。</span>
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  格安SIM
                </span>
                <br />
                完全比較ガイド
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                月額990円〜の主要オンライン専用/格安プランを横断比較。
                <br />
                節約目安：月2,000〜4,000円（年24,000〜48,000円）。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/diagnosis" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <i className="ri-search-eye-line mr-2"></i>
                  プラン診断を始める
                </Link>
                <Link href="/compare" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <i className="ri-search-line mr-2"></i>
                  プラン比較を見る
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">主要指標</div>
                    <div className="text-sm text-blue-200">料金/速度/キャンペーン</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">比較軸</div>
                    <div className="text-sm text-purple-200">コスト/利便性</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">節約目安</div>
                    <div className="text-sm text-green-200">年24,000〜48,000円</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 to-purple-500/30 blur-3xl" aria-hidden="true"></div>
                <div className="relative h-full w-full rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-8 shadow-2xl flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.3em] text-blue-100">Dashboard</span>
                      <span className="text-2xl font-semibold">格安SIM診断</span>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/20">リアルタイム</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                      <p className="text-xs uppercase tracking-wide text-blue-200 mb-2">節約額</p>
                      <p className="text-3xl font-bold text-white">¥4,200</p>
                      <p className="text-xs text-blue-100 mt-1">平均月額の削減見込み</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 border border-white/20 p-4">
                      <p className="text-xs uppercase tracking-wide text-blue-200 mb-2">適合率</p>
                      <p className="text-3xl font-bold text-white">92%</p>
                      <p className="text-xs text-blue-100 mt-1">利用スタイルとのマッチ度</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 border border-white/20 p-4 col-span-2">
                      <p className="text-xs uppercase tracking-wide text-blue-200 mb-2">推奨プラン</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold text-white">LINEMO ミニプラン</span>
                          <span className="text-sm text-blue-100">月990円 / 3GB</span>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-100 text-xs border border-emerald-300/40">おすすめ</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-blue-100">
                    <span>データ更新：1分前</span>
                    <span className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      リアルタイム解析
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Diagnosis CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:radial-gradient(circle_at_top_left,_rgba(255,255,255,0.45)_0%,_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.35)_0%,_transparent_60%)]"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                  <i className="ri-flashlight-line text-yellow-300 mr-2"></i>
                  <span className="text-sm font-medium">新機能リリース</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-4">
                  2分で完了
                  <br />
                  <span className="text-yellow-200">最適プラン診断</span>
                </h2>
                
                <p className="text-xl text-green-100 mb-6 leading-relaxed">
                  6つの簡単な質問に答えるだけで、あなたの使用スタイルに
                  ぴったりの格安SIMプランをAI診断します。
                </p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <i className="ri-time-line text-2xl text-yellow-300 mr-2"></i>
                    <span className="font-medium">約2分で完了</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-shield-check-line text-2xl text-yellow-300 mr-2"></i>
                    <span className="font-medium">個人情報不要</span>
                  </div>
                </div>
                
                <Link 
                  href="/diagnosis"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-search-eye-line mr-3"></i>
                  無料でプラン診断を始める
                </Link>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-yellow-200 mb-1">6</div>
                    <div className="text-sm text-green-100">つの質問</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-yellow-200 mb-1">AI</div>
                    <div className="text-sm text-green-100">最適化</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-yellow-200 mb-1">100%</div>
                    <div className="text-sm text-green-100">無料</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold text-yellow-200 mb-1">即時</div>
                    <div className="text-sm text-green-100">結果表示</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* カテゴリ別おすすめプランセクション削除済み */}

      {/* Selection Guide */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">3ステップで最適プラン選び</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              あなたのライフスタイルに合わせた格安SIMを見つけましょう
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  1
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">データ使用量を確認</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  現在のスマホ設定から月間データ使用量をチェック。動画視聴やテザリング頻度も考慮しましょう。
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">目安</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3GB未満：ライトユーザー</li>
                    <li>• 3-10GB：一般的な使用</li>
                    <li>• 10GB以上：ヘビーユーザー</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">通話スタイルを決める</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  通話頻度に応じて、かけ放題オプションの必要性を判断。LINE通話が中心なら不要な場合も。
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">選択肢</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 通話なし：基本プランのみ</li>
                    <li>• 月30分程度：5分かけ放題</li>
                    <li>• 頻繁に通話：無制限かけ放題</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  3
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">サポート体制を選ぶ</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  店舗サポートの必要性、eSIM対応の可否、家族割の有無など、付加価値を比較検討。
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">チェック項目</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 店舗サポート有無</li>
                    <li>• eSIM対応状況</li>
                    <li>• 家族割・セット割</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/compare" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
              <i className="ri-search-line mr-3"></i>
              詳細比較で最適プランを見つける
            </Link>
          </div>
        </div>
      </section>

      {/* eSIM Special Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-6">
                  <i className="ri-smartphone-line mr-2"></i>
                  最新技術対応
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  eSIM特集
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text">
                    即日開通
                  </span>
                </h2>

                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  物理SIMカードは不要。申し込みから最短1時間で利用開始できる次世代の通信サービス。
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="font-medium">申し込み後、最短1時間で利用開始</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="font-medium">SIMカード紛失・破損の心配なし</span>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="font-medium">海外でも現地プランに簡単切り替え</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/guide/esim" className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform group-hover:scale-105 whitespace-nowrap">
                    <i className="ri-guide-line mr-2"></i>
                    eSIM設定ガイド
                  </Link>
                  <Link href="/compare?filter=esim" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 whitespace-nowrap">
                    <i className="ri-smartphone-line mr-2"></i>
                    eSIM対応プラン一覧
                  </Link>
                </div>
              </div>

              <div className="relative p-8 lg:p-12 flex items-center justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/25 to-blue-500/25 blur-3xl" aria-hidden="true"></div>
                  <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-2xl flex flex-col gap-5">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="text-sm font-semibold uppercase tracking-[0.2em]">eSIM Setup</span>
                      <span className="inline-flex items-center gap-2 text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 text-white">
                        <p className="text-sm text-blue-100 mb-2">アクティベーションコード</p>
                        <p className="text-2xl font-semibold tracking-[0.3em]">AB3F-92KD</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 text-white">
                        <p className="text-sm text-blue-100 mb-2">開通まで</p>
                        <p className="text-2xl font-semibold">約 45 分</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 border border-white/20 p-4 text-white">
                        <p className="text-sm text-blue-100 mb-2">サポート</p>
                        <p className="text-base font-medium">24時間チャット対応</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-dashed border-white/30 text-white/80 text-sm p-4">
                      QRコードを端末に読み込むだけで即日開通。海外プラン切り替えもスムーズです。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">よくある質問</h2>
            <p className="text-xl text-gray-600">
              格安SIM乗り換えに関する疑問にお答えします
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "格安SIMに乗り換えるとどのくらい安くなりますか？",
                answer: "大手キャリアから格安SIMに乗り換えると、月額料金を2,000〜4,000円削減できます。年間で24,000〜48,000円の節約が可能です。データ使用量3GB以下なら月990円から利用でき、30GBでも2,970円程度で利用できます。"
              },
              {
                question: "乗り換え時に電話番号は変わりますか？",
                answer: "MNP（携帯電話番号ポータビリティ）を利用すれば、現在の電話番号をそのまま使用できます。乗り換え手続きは約30分程度で完了し、番号が使えない期間はほとんどありません。"
              },
              {
                question: "格安SIMでも通信速度は問題ありませんか？",
                answer: "客観的な最新情報に基づく中立の比較を目指しています。ahamo、povo、LINEMOなどのオンライン専用プランは大手キャリアの回線を直接使用しているため、通信品質は大手キャリアと同等です。ただし、昼休みや夜間など利用者が集中する時間帯は速度が低下する場合があります。"
              },
              {
                question: "eSIMと通常のSIMカードの違いは何ですか？",
                answer: "eSIMは端末に内蔵された電子SIMで、物理的なSIMカードが不要です。オンラインで即座に開通でき、複数の回線を1台の端末で管理できます。紛失や破損の心配がなく、海外でも現地プランに簡単に切り替えられます。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <div className="ml-12">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
              <i className="ri-question-line mr-2"></i>
              さらに詳しいFAQを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}