'use client';

import Link from 'next/link';
import AdDisclosure from '../../components/AdDisclosure';

export default function LinemoPage() {
  return (
    <div className="min-h-screen bg-white">
  {/* グローバルヘッダーは layout.tsx で提供 */}

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm" aria-label="パンくず">
            <ol className="flex flex-wrap gap-1 items-center">
              <li><Link href="/" className="text-gray-500 hover:text-blue-600 underline-offset-2 hover:underline">ホーム</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/compare" className="text-gray-500 hover:text-blue-600 underline-offset-2 hover:underline">料金比較</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900" aria-current="page">LINEMO</li>
            </ol>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/` },
                  { '@type': 'ListItem', position: 2, name: '料金比較', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/compare` },
                  { '@type': 'ListItem', position: 3, name: 'LINEMO', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/brands/linemo` }
                ]
              }) }}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-pink-600">LINEMO</span>
                <span className="ml-4 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-semibold">最安級</span>
              </div>
              <div className="mb-6">
                <AdDisclosure variant="plain" compact />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                ソフトバンクの高品質回線が
                <br />
                <span className="text-pink-600">月額990円から</span>
              </h1>

              {/* 結論ボックス */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-pink-600 shadow-lg mb-8">
                <h2 className="font-bold text-lg mb-3 text-gray-900">結論：こんな人におすすめ</h2>
                <div className="space-y-2 text-sm">
                  <p><span className="text-green-600 font-semibold">◎ おすすめ：</span> 月3GB以下の軽いユーザー、eSIMで即日開通したい方、ソフトバンク回線重視</p>
                  <p><span className="text-orange-600 font-semibold">△ 注意点：</span> 大容量プランなし、店舗サポートなし、家族割引なし</p>
                  <p><span className="text-blue-600 font-semibold">★ 総評：</span> 料金の安さと回線品質のバランスが優秀。ライトユーザーにベストチョイス。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  LINEMO公式で申込
                </a>
                <Link 
                  href="/guide/esim"
                  className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-50 transition-colors whitespace-nowrap"
                >
                  eSIM設定方法
                </Link>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://readdy.ai/api/search-image?query=smartphone%20displaying%20LINEMO%20mobile%20plan%20interface%20with%20clean%20pink%20and%20white%20design%2C%20professional%20tech%20illustration%20showing%20data%20usage%20and%20pricing%2C%20modern%20minimalist%20background&width=500&height=400&seq=linemo-hero&orientation=landscape"
                alt="LINEMO プラン画面"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">料金プランと総額</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-pink-200 rounded-xl p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                おすすめ
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-pink-600 mb-2">ベストプラン</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">990<span className="text-lg">円/月</span></div>
                <p className="text-gray-600">～10GB + 通話オプション割引</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>データ容量</span>
                  <span className="font-semibold">～10GB</span>
                </div>
                <div className="flex justify-between">
                  <span>通話オプション</span>
                  <span className="font-semibold text-green-600">7ヶ月間割引</span>
                </div>
                <div className="flex justify-between">
                  <span>LINEギガフリー</span>
                  <span className="font-semibold text-green-600">対象</span>
                </div>
                <div className="flex justify-between">
                  <span>eSIM対応</span>
                  <span className="font-semibold text-green-600">○</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">実質料金（12ヶ月）</h4>
                <div className="text-2xl font-bold text-green-600">490円/月</div>
                <p className="text-sm text-gray-600 mt-1">6ヶ月基本料無料キャンペーン適用時</p>
              </div>

              <a 
                href="#" 
                className="block text-center bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer"
              >
                このプランで申込む
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-pink-600 mb-2">ベストプランV</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">2,970<span className="text-lg">円/月</span></div>
                <p className="text-gray-600">～30GB + 5分通話込み</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span>データ容量</span>
                  <span className="font-semibold">～30GB</span>
                </div>
                <div className="flex justify-between">
                  <span>データ超過後</span>
                  <span className="font-semibold">最大1Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span>5分通話</span>
                  <span className="font-semibold text-green-600">込み</span>
                </div>
                <div className="flex justify-between">
                  <span>LINEギガフリー</span>
                  <span className="font-semibold text-green-600">対象</span>
                </div>
                <div className="flex justify-between">
                  <span>eSIM対応</span>
                  <span className="font-semibold text-green-600">○</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">実質料金（12ヶ月）</h4>
                <div className="text-2xl font-bold text-green-600">1,628円/月</div>
                <p className="text-sm text-gray-600 mt-1">6ヶ月基本料無料キャンペーン適用時</p>
              </div>

              <a 
                href="#" 
                className="block text-center bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer"
              >
                このプランで申込む
              </a>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">キャンペーン詳細</h4>
            <ul className="text-sm space-y-1 text-yellow-700">
              <li>• キャンペーンは時期により内容が変動します。最新情報は公式をご確認ください。</li>
              <li>• 5分かけ放題オプション8ヶ月間無料（550円×8ヶ月 = 4,400円おトク）</li>
              <li>• LINEスタンププレミアムポイントバックキャンペーン</li>
              <li>• PayPayポイント還元（条件達成時）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 通信速度 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">通信速度の傾向</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <i className="ri-sun-line text-3xl text-yellow-500 mb-3"></i>
              <h3 className="font-bold mb-2">朝（7-9時）</h3>
              <div className="text-2xl font-bold text-green-600">快適</div>
              <p className="text-sm text-gray-600 mt-1">50-80Mbps程度</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <i className="ri-sun-fill text-3xl text-orange-500 mb-3"></i>
              <h3 className="font-bold mb-2">昼（12-13時）</h3>
              <div className="text-2xl font-bold text-yellow-600">普通</div>
              <p className="text-sm text-gray-600 mt-1">10-30Mbps程度</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <i className="ri-sun-line text-3xl text-orange-400 mb-3"></i>
              <h3 className="font-bold mb-2">夜（18-22時）</h3>
              <div className="text-2xl font-bold text-green-600">快適</div>
              <p className="text-sm text-gray-600 mt-1">40-70Mbps程度</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-lg">
              <i className="ri-calendar-line text-3xl text-blue-500 mb-3"></i>
              <h3 className="font-bold mb-2">休日</h3>
              <div className="text-2xl font-bold text-green-600">快適</div>
              <p className="text-sm text-gray-600 mt-1">平日より安定</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">速度に関する特徴</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-600 mb-2">メリット</h4>
                <ul className="space-y-1 text-sm">
                  <li>• ソフトバンク本家回線で安定した品質</li>
                  <li>• 5G対応エリアでは高速通信可能</li>
                  <li>• LINEアプリはギガフリーで快適</li>
                  <li>• 朝夕の通勤時間も比較的安定</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">注意点</h4>
                <ul className="space-y-1 text-sm">
                  <li>• お昼の時間帯は速度低下する場合あり</li>
                  <li>• 大容量通信では他キャリアに劣る場合も</li>
                  <li>• 地方エリアでは差が出にくい場合あり</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 申込から開通まで */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">申込から開通までの流れ</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">事前準備</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 本人確認書類</li>
                <li>• クレジットカード</li>
                <li>• MNP予約番号</li>
                <li>• メールアドレス</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">オンライン申込</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• プラン選択</li>
                <li>• 個人情報入力</li>
                <li>• 本人確認書類アップ</li>
                <li>• eKYC認証</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">eSIM設定</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 審査完了後即日</li>
                <li>• QRコード読取</li>
                <li>• プロファイルDL</li>
                <li>• 回線切替</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">利用開始</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• APN設定確認</li>
                <li>• 通話・通信テスト</li>
                <li>• LINEアプリ設定</li>
                <li>• キャンペーン適用</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-blue-900">
              <i className="ri-lightbulb-line mr-2"></i>
              開通時の注意点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">eSIM設定のポイント</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• WiFi環境で設定作業を行う</li>
                  <li>• 別端末でQRコード表示推奨</li>
                  <li>• プロファイル削除は慎重に</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">よくあるトラブル</h4>
                <ul className="space-y-1 text-blue-800">
                  <li>• 圏外表示：APN設定確認</li>
                  <li>• 発信不可：VoLTE設定確認</li>
                  <li>• データ不可：プロファイル再設定</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 競合比較 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">競合3社との比較</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">項目</th>
                  <th className="px-6 py-4 text-left font-semibold text-pink-600">LINEMO</th>
                  <th className="px-6 py-4 text-left font-semibold">ahamo</th>
                  <th className="px-6 py-4 text-left font-semibold">povo2.0</th>
                  <th className="px-6 py-4 text-left font-semibold">UQモバイル</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">月額料金</td>
                  <td className="px-6 py-4 text-pink-600 font-bold">990円</td>
                  <td className="px-6 py-4">2,970円</td>
                  <td className="px-6 py-4">0円</td>
                  <td className="px-6 py-4">3,278円</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">データ容量</td>
                  <td className="px-6 py-4 text-pink-600 font-bold">3GB</td>
                  <td className="px-6 py-4">20GB</td>
                  <td className="px-6 py-4">トッピング制</td>
                  <td className="px-6 py-4">20GB</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">通話オプション</td>
                  <td className="px-6 py-4 text-pink-600 font-bold">5分無料（8ヶ月）</td>
                  <td className="px-6 py-4">5分無料込み</td>
                  <td className="px-6 py-4">トッピング制</td>
                  <td className="px-6 py-4">10分無料込み</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">eSIM対応</td>
                  <td className="px-6 py-4 text-green-600"><i className="ri-check-line"></i></td>
                  <td className="px-6 py-4 text-green-600"><i className="ri-check-line"></i></td>
                  <td className="px-6 py-4 text-green-600"><i className="ri-check-line"></i></td>
                  <td className="px-6 py-4 text-green-600"><i className="ri-check-line"></i></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">店舗サポート</td>
                  <td className="px-6 py-4 text-red-600"><i className="ri-close-line"></i></td>
                  <td className="px-6 py-4 text-red-600"><i className="ri-close-line"></i></td>
                  <td className="px-6 py-4 text-red-600"><i className="ri-close-line"></i></td>
                  <td className="px-6 py-4 text-green-600"><i className="ri-check-line"></i></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-green-600">LINEMOが勝る点</h3>
              <ul className="space-y-2 text-sm">
                <li>• 3GBプランの料金が最安</li>
                <li>• LINEギガフリーで実質容量増</li>
                <li>• 6ヶ月無料キャンペーン</li>
                <li>• ソフトバンク回線の安定性</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-orange-600">競合が勝る点</h3>
              <ul className="space-y-2 text-sm">
                <li>• 大容量プランの選択肢</li>
                <li>• 店舗サポート（UQ）</li>
                <li>• 家族割引（UQ）</li>
                <li>• 完全0円運用（povo）</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-blue-600">乗り換え候補</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/brands/povo" className="text-blue-600 hover:underline">povo2.0</Link> - より安く運用したい</li>
                <li><Link href="/brands/ahamo" className="text-blue-600 hover:underline">ahamo</Link> - 大容量が必要</li>
                <li><Link href="/brands/uqmobile" className="text-blue-600 hover:underline">UQモバイル</Link> - 店舗サポート重視</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            LINEMOで格安SIMデビュー
          </h2>
          <p className="text-xl mb-8 opacity-90">
            6ヶ月基本料無料 + 5分かけ放題8ヶ月無料で最大10,340円おトク
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              LINEMO公式サイトで申込
            </a>
            <Link 
              href="/compare"
              className="bg-pink-700 text-white border-2 border-pink-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-800 transition-colors whitespace-nowrap"
            >
              他プランと比較する
            </Link>
          </div>
        </div>
      </section>

  {/* Global footer is provided by root layout */}
    </div>
  );
}
