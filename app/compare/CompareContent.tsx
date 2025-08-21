'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import AdDisclosure from '../components/AdDisclosure';

export default function CompareContent() {
  const searchParams = useSearchParams();

  // category パラメータ: 旧仕様 ?filter=xxx も受け入れる（ユーザー報告で /compare?filter=esim が読み込み続ける症状）
  // 無効値は 'all' にフォールバックし、クリーンな値を category へ。
  const category = useMemo(() => {
    const raw = (searchParams?.get('category') || searchParams?.get('filter') || 'all').toLowerCase();
    const valid = ['all', 'popular', 'cheapest', 'unlimited', 'esim'];
    return valid.includes(raw) ? raw : 'all';
  }, [searchParams]);

  const [filters, setFilters] = useState({
    maxPrice: '',
    dataAmount: '',
    callOption: '',
    support: '',
    networkType: ''
  });

  const [sortBy, setSortBy] = useState('overall');

  const plans = [
    {
      id: 1,
      brand: 'LINEMO',
      brandColor: 'text-pink-600',
      plan: 'ミニプラン',
      monthlyPrice: 990,
      initialCost: 0,
      realMonthlyPrice: 490,
      dataAmount: '3GB',
      callOption: '5分かけ放題：550円',
      esim: true,
      campaign: '6ヶ月間実質無料',
      speed: '高速',
      satisfaction: 4.3,
      popular: true,
      cheapest: true
    },
    {
      id: 2,
      brand: 'povo2.0',
      brandColor: 'text-purple-600',
      plan: '基本料金',
      monthlyPrice: 0,
      initialCost: 0,
      realMonthlyPrice: 390,
      dataAmount: 'トッピング制',
      callOption: '5分かけ放題：550円',
      esim: true,
      campaign: 'データトッピング特典',
      speed: '高速',
      satisfaction: 4.1,
      popular: true,
      cheapest: true
    },
    {
      id: 3,
      brand: 'ahamo',
      brandColor: 'text-green-600',
      plan: '基本プラン',
      monthlyPrice: 2970,
      initialCost: 0,
      realMonthlyPrice: 2470,
      dataAmount: '20GB',
      callOption: '5分かけ放題込み',
      esim: true,
      campaign: 'dポイント還元',
      speed: '最高速',
      satisfaction: 4.5,
      popular: true,
      unlimited: true
    },
    {
      id: 4,
      brand: 'UQモバイル',
      brandColor: 'text-orange-600',
      plan: 'コミコミプラン',
      monthlyPrice: 3278,
      initialCost: 3850,
      realMonthlyPrice: 2178,
      dataAmount: '20GB',
      callOption: '10分かけ放題込み',
      esim: true,
      campaign: '家族割・auでんきセット割',
      speed: '高速',
      satisfaction: 4.2,
      popular: true,
      unlimited: true
    },
    {
      id: 5,
      brand: 'ワイモバイル',
      brandColor: 'text-red-600',
      plan: 'シンプルS',
      monthlyPrice: 2178,
      initialCost: 3850,
      realMonthlyPrice: 1628,
      dataAmount: '3GB',
      callOption: '10分かけ放題：770円',
      esim: true,
      campaign: '家族割・おうち割光セット',
      speed: '高速',
      satisfaction: 4.0,
      popular: true
    },
    {
      id: 6,
      brand: 'mineo',
      brandColor: 'text-green-500',
      plan: 'マイピタ 5GB',
      monthlyPrice: 1518,
      initialCost: 3740,
      realMonthlyPrice: 1830,
      dataAmount: '5GB',
      callOption: '10分かけ放題：550円',
      esim: false,
      campaign: 'パケット放題Plus無料',
      speed: '標準',
      satisfaction: 3.8,
      cheapest: true
    },
    {
      id: 7,
      brand: 'IIJmio',
      brandColor: 'text-blue-500',
      plan: 'ギガプラン 5GB',
      monthlyPrice: 990,
      initialCost: 3733,
      realMonthlyPrice: 1301,
      dataAmount: '5GB',
      callOption: '5分かけ放題：500円',
      esim: true,
      campaign: '初期費用割引',
      speed: '標準',
      satisfaction: 3.9,
      cheapest: true
    },
    {
      id: 8,
      brand: 'OCNモバイルONE',
      brandColor: 'text-orange-500',
      plan: '1GB',
      monthlyPrice: 770,
      initialCost: 3733,
      realMonthlyPrice: 1081,
      dataAmount: '1GB',
      callOption: '10分かけ放題：935円',
      esim: false,
      campaign: 'スマホセール',
      speed: '標準',
      satisfaction: 3.7,
      cheapest: true
    }
  ];

  const getCategoryTitle = () => {
    switch (category) {
      case 'popular': return '人気ランキング';
      case 'cheapest': return '最安プラン';
      case 'unlimited': return 'かけ放題プラン';
      case 'esim': return 'eSIM対応プラン';
      default: return '料金比較';
    }
  };

  const filteredPlans = plans.filter(plan => {
    if (category === 'popular' && !plan.popular) return false;
    if (category === 'cheapest' && !plan.cheapest) return false;
    if (category === 'unlimited' && !plan.unlimited) return false;
    if (category === 'esim' && !plan.esim) return false;
    return true;
  });

  const sortedPlans = [...filteredPlans].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest': return a.realMonthlyPrice - b.realMonthlyPrice;
      case 'speed': return b.speed === '最高速' ? 1 : a.speed === '最高速' ? -1 : 0;
      case 'satisfaction': return b.satisfaction - a.satisfaction;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* BreadcrumbList Structured Data (動的カテゴリ対応) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://example.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: getCategoryTitle(),
                item: 'https://example.com/compare'
              }
            ]
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">ホーム</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900">{getCategoryTitle()}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{getCategoryTitle()}</h1>
          <div className="mb-4 flex justify-center">
            <AdDisclosure variant="plain" compact />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category === 'popular' && '利用者に選ばれている人気の格安SIMプランを比較できます'}
            {category === 'cheapest' && '月額料金が安い格安SIMプランを厳選して比較できます'}
            {category === 'unlimited' && 'かけ放題オプション付きの格安SIMプランを比較できます'}
            {category === 'esim' && 'eSIM対応で即日開通可能な格安SIMプランを比較できます'}
            {category === 'all' && '主要格安SIMプランの料金・サービス内容を一覧で比較できます'}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Link 
              href="/compare"
              className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                category === 'all' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              すべて
            </Link>
            <Link 
              href="/compare?category=popular"
              className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                category === 'popular' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              人気ランキング
            </Link>
            <Link 
              href="/compare?category=cheapest"
              className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                category === 'cheapest' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              最安プラン
            </Link>
            <Link 
              href="/compare?category=unlimited"
              className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                category === 'unlimited' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              かけ放題
            </Link>
            <Link 
              href="/compare?category=esim"
              className={`px-6 py-2 rounded-full border font-medium transition-colors ${
                category === 'esim' 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'text-gray-700 border-gray-300 hover:border-blue-300'
              }`}
            >
              eSIM対応
            </Link>
          </div>

          {/* Sort Options */}
          <div className="flex flex-wrap gap-4 justify-center">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg pr-8"
            >
              <option value="overall">総合評価順</option>
              <option value="cheapest">料金が安い順</option>
              <option value="speed">通信速度順</option>
              <option value="satisfaction">満足度順</option>
            </select>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">ランキング</th>
                  <th className="px-6 py-4 text-left font-semibold">ブランド・プラン</th>
                  <th className="px-6 py-4 text-left font-semibold">月額料金</th>
                  <th className="px-6 py-4 text-left font-semibold">実質月額*</th>
                  <th className="px-6 py-4 text-left font-semibold">データ量</th>
                  <th className="px-6 py-4 text-left font-semibold">通話オプション</th>
                  <th className="px-6 py-4 text-left font-semibold">eSIM</th>
                  <th className="px-6 py-4 text-left font-semibold">キャンペーン</th>
                  <th className="px-6 py-4 text-left font-semibold">詳細</th>
                </tr>
              </thead>
              <tbody>
                {sortedPlans.map((plan, index) => (
                  <tr key={plan.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600">#{index + 1}</span>
                        {index === 0 && (
                          <span className="ml-2 bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                            <i className="ri-trophy-line mr-1"></i>1位
                          </span>
                        )}
                        {plan.cheapest && (
                          <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">最安</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className={`font-bold text-lg ${plan.brandColor}`}>{plan.brand}</div>
                        <div className="text-gray-600 text-sm">{plan.plan}</div>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400 text-sm">
                            {[...Array(5)].map((_, i) => (
                              <i 
                                key={i} 
                                className={i < Math.floor(plan.satisfaction) ? "ri-star-fill" : "ri-star-line"}
                              ></i>
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{plan.satisfaction}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-lg">{plan.monthlyPrice.toLocaleString()}円</div>
                      <div className="text-sm text-gray-500">初期費用: {plan.initialCost.toLocaleString()}円</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-lg text-green-600">{plan.realMonthlyPrice.toLocaleString()}円</div>
                      <div className="text-sm text-gray-500">キャンペーン適用時</div>
                    </td>
                    <td className="px-6 py-4 font-semibold">{plan.dataAmount}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm">{plan.callOption}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {plan.esim ? (
                        <i className="ri-check-line text-green-500 text-xl"></i>
                      ) : (
                        <i className="ri-close-line text-gray-400 text-xl"></i>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-blue-600">{plan.campaign}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Link 
                        href={`/brands/${plan.brand.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
                      >
                        詳細を見る
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <p>*実質月額 = (月額×12 - キャンペーン割引 + 初期費用) ÷ 12で計算</p>
              <p>※料金は税込価格です。最新の料金・特典は各公式サイトでご確認ください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">シーン別おすすめプラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <i className="ri-money-dollar-circle-line text-4xl text-green-500 mb-4"></i>
                <h3 className="text-xl font-bold">とにかく安くしたい</h3>
                <p className="text-gray-600 mt-2">月額料金を最重視する方</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">LINEMO ミニプラン</span>
                  <span className="text-green-600 font-bold">490円/月</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">povo2.0 基本料</span>
                  <span className="text-green-600 font-bold">390円/月</span>
                </div>
              </div>
              <Link 
                href="/compare?category=cheapest"
                className="block text-center bg-green-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-green-700 transition-colors"
              >
                最安プランを比較
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <i className="ri-speed-line text-4xl text-blue-500 mb-4"></i>
                <h3 className="text-xl font-bold">速度重視</h3>
                <p className="text-gray-600 mt-2">通信品質を重視する方</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">ahamo</span>
                  <span className="text-blue-600 font-bold">2,470円/月</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">UQモバイル</span>
                  <span className="text-blue-600 font-bold">2,178円/月</span>
                </div>
              </div>
              <Link 
                href="/compare?category=popular"
                className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-blue-700 transition-colors"
              >
                高品質プランを比較
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <i className="ri-smartphone-line text-4xl text-purple-500 mb-4"></i>
                <h3 className="text-xl font-bold">すぐ使いたい</h3>
                <p className="text-gray-600 mt-2">eSIMで即日開通したい方</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">LINEMO</span>
                  <span className="text-purple-600 font-bold">eSIM対応</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">ahamo</span>
                  <span className="text-purple-600 font-bold">eSIM対応</span>
                </div>
              </div>
              <Link 
                href="/compare?category=esim"
                className="block text-center bg-purple-600 text-white py-3 rounded-lg font-semibold mt-6 hover:bg-purple-700 transition-colors"
              >
                eSIM対応プラン比較
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            最適なプランは見つかりましたか？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            乗り換え手順ガイドで、スムーズに格安SIMデビュー
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guide/mnp"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              乗り換え手順を見る
            </Link>
            <Link 
              href="/guide/esim"
              className="bg-blue-700 text-white border-2 border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors whitespace-nowrap"
            >
              eSIM設定方法
            </Link>
          </div>
        </div>
      </section>

  {/* Footer はグローバル layout.tsx に統合済み */}
    </div>
  );
}