'use client';

import AdDisclosure from './components/AdDisclosure';
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20patterns%20with%20flowing%20lines%2C%20modern%20technology%20background%2C%20dark%20blue%20and%20purple%20gradients%2C%20minimalist%20design%2C%20professional%20corporate%20style%2C%20subtle%20lighting%20effects%2C%20clean%20composition&width=1920&height=800&seq=hero-bg&orientation=landscape')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <i className="ri-award-line text-yellow-400 mr-2"></i>
                <span className="text-sm font-medium">2025年最新 中立比較ガイド</span>
              </div>
              <div className="mb-6">
                <AdDisclosure variant="dark" compact />
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-3xl blur-xl"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20mobile%20app%20interface%2C%20clean%20minimalist%20design%2C%20floating%20in%20space%20with%20glowing%20effects%2C%20professional%20product%20photography%2C%20blue%20and%20purple%20lighting%2C%20futuristic%20technology%20concept&width=600&height=400&seq=hero-phone&orientation=landscape"
                  alt="格安SIM比較"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Diagnosis CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20diagnostic%20icons%2C%20medical%20checkmark%20patterns%2C%20green%20gradient%20background%2C%20professional%20healthcare%20design%2C%20modern%20technology%20symbols%2C%20clean%20geometric%20shapes&width=1200&height=400&seq=diagnosis-bg&orientation=landscape')] bg-cover bg-center opacity-10"></div>
            
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl animate-pulse"></div>
                  <img
                    src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20with%20eSIM%20activation%20screen%2C%20glowing%20digital%20interface%2C%20futuristic%20holographic%20effects%2C%20purple%20and%20blue%20neon%20lighting%2C%20high-tech%20visualization%2C%20clean%20product%20photography%2C%20professional%20tech%20showcase&width=500&height=600&seq=esim-phone&orientation=portrait"
                    alt="eSIM対応スマートフォン"
                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
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
                answer: "大手キャリアから格安SIMに乗り換えると、月額料金を2,000〜4,000円削減できます。年間で24,000〜48,000円の節約が可能です。データ使用量3GB以下なら月990円から利用でき、20GBでも2,970円程度で利用できます。"
              },
              {
                question: "乗り換え時に電話番号は変わりますか？",
                answer: "MNP（携帯電話番号ポータビリティ）を利用すれば、現在の電話番号をそのまま使用できます。乗り換え手続きは約30分程度で完了し、番号が使えない期間はほとんどありません。"
              },
              {
                question: "格安SIMでも通信速度は問題ありませんか？",
                answer: "主要な格安SIMサービス（ahamo、povo、LINEMO）は大手キャリアの回線を直接使用しているため、通信品質は大手キャリアと同等です。ただし、昼休みや夜間など利用者が集中する時間帯は速度が低下する場合があります。"
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