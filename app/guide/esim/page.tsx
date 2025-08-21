'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EsimGuidePage() {
  const [activeDevice, setActiveDevice] = useState('iPhone');

  const devices = [
    { id: 'iPhone', name: 'iPhone', icon: 'ri-phone-line' },
    { id: 'Android', name: 'Android', icon: 'ri-smartphone-line' },
    { id: 'iPad', name: 'iPad', icon: 'ri-tablet-line' }
  ];

  return (
  <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm" aria-label="パンくず">
            <ol className="flex items-center flex-wrap gap-1">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600 underline-offset-2 hover:underline">ホーム</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900" aria-current="page">eSIM設定ガイド</li>
            </ol>
            <script
              type="application/ld+json"
              // JSON-LD for BreadcrumbList
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'ホーム', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/` },
                    { '@type': 'ListItem', position: 2, name: 'eSIM設定ガイド', item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/guide/esim` }
                  ]
                })
              }}
            />
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            eSIM設定完全ガイド
            <br />
            <span className="text-purple-600">機種別詳細手順</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            物理SIMカード不要のeSIMを簡単設定。iPhone・Android・iPadの機種別に、
            つまずきやすいポイントも含めて分かりやすく解説します。
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <i className="ri-time-line text-3xl text-green-600 mb-2"></i>
                <h3 className="font-bold text-lg">最短5分で完了</h3>
                <p className="text-sm text-gray-600">QRコード読み取りから利用開始まで</p>
              </div>
              <div className="text-center p-4">
                <i className="ri-shield-check-line text-3xl text-blue-600 mb-2"></i>
                <h3 className="font-bold text-lg">紛失リスクゼロ</h3>
                <p className="text-sm text-gray-600">物理SIMカードの破損・紛失の心配なし</p>
              </div>
              <div className="text-center p-4">
                <i className="ri-global-line text-3xl text-purple-600 mb-2"></i>
                <h3 className="font-bold text-lg">海外でも便利</h3>
                <p className="text-sm text-gray-600">現地プランに即座に切り替え可能</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {devices.map((device) => (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeDevice === device.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className={`${device.icon} mr-2`}></i>
                {device.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* iPhone Setup */}
      {activeDevice === 'iPhone' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <i className="ri-phone-line text-4xl text-blue-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">iPhone eSIM設定手順</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-6">対応機種</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">iPhone 14シリーズ</h4>
                      <ul className="space-y-1 text-blue-800">
                        <li>• iPhone 14 Pro Max</li>
                        <li>• iPhone 14 Pro</li>
                        <li>• iPhone 14 Plus</li>
                        <li>• iPhone 14</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">iPhone 13シリーズ</h4>
                      <ul className="space-y-1 text-blue-800">
                        <li>• iPhone 13 Pro Max</li>
                        <li>• iPhone 13 Pro</li>
                        <li>• iPhone 13 mini</li>
                        <li>• iPhone 13</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">iPhone 12シリーズ</h4>
                      <ul className="space-y-1 text-blue-800">
                        <li>• iPhone 12 Pro Max</li>
                        <li>• iPhone 12 Pro</li>
                        <li>• iPhone 12 mini</li>
                        <li>• iPhone 12</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-900">その他対応機種</h4>
                      <ul className="space-y-1 text-blue-800">
                        <li>• iPhone SE（第3世代）</li>
                        <li>• iPhone 11シリーズ</li>
                        <li>• iPhone XSシリーズ</li>
                        <li>• iPhone XR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">事前準備</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">必要なもの</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Wi-Fi環境</li>
                      <li>• QRコード表示用の別端末（PC・タブレット等）</li>
                      <li>• eSIMプロファイル情報</li>
                      <li>• Apple ID</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">注意事項</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• 既存のeSIMプロファイルは削除される場合があります</li>
                      <li>• 設定中はモバイルデータ通信が一時的に使用できません</li>
                      <li>• iOS 12.1以降が必要です</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">QRコードの準備</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">格安SIM会社からメールで送られてきたQRコードを別端末（PC・タブレット等）で表示します。</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>ポイント：</strong> iPhoneでQRコードを表示して同じ端末で読み取ることはできません。
                      別の画面で表示するか、紙に印刷して準備してください。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">設定アプリを開く</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">iPhoneの「設定」アプリを開き、「モバイル通信」をタップします。</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      設定 → モバイル通信 → モバイル通信プランを追加
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">QRコードを読み取る</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">「QRコードを使用」をタップし、カメラでQRコードを読み取ります。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">読み取り成功のサイン</h4>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• 「モバイル通信プランが検出されました」と表示</li>
                        <li>• キャリア名が正しく表示される</li>
                        <li>• 「続ける」ボタンが有効になる</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">読み取りに失敗する場合</h4>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• QRコードが不鮮明</li>
                        <li>• 既に使用済みのQRコード</li>
                        <li>• Wi-Fi接続の問題</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-2xl font-bold">プロファイルのダウンロード</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">「モバイル通信プランを追加」をタップし、プロファイルのダウンロードを開始します。</p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">ダウンロード中の注意</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Wi-Fi接続を維持してください</li>
                      <li>• ダウンロード中はアプリを終了しないでください</li>
                      <li>• 通常1-3分程度で完了します</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold text-xl">5</span>
                  </div>
                  <h3 className="text-2xl font-bold">回線の切り替えと確認</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">プロファイル設定完了後、回線切り替え手続きを行い、正常に通信できるか確認します。</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">確認項目</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• アンテナ表示の確認</li>
                        <li>• データ通信テスト（Safari等）</li>
                        <li>• 通話テスト（111番等）</li>
                        <li>• SMS送受信テスト</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">設定の最終確認</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• VoLTE設定：ON</li>
                        <li>• データローミング：用途に応じて</li>
                        <li>• モバイルデータ通信：ON</li>
                        <li>• 優先回線の設定</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Android Setup */}
      {activeDevice === 'Android' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <i className="ri-smartphone-line text-4xl text-green-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">Android eSIM設定手順</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-6">対応機種（主要メーカー）</h3>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-900">Google Pixel</h4>
                      <p className="text-green-800">Pixel 3以降のほぼ全機種（Pixel 3a除く）</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-900">Samsung Galaxy</h4>
                      <p className="text-green-800">Galaxy S20以降、Galaxy Note20以降、Galaxy Z シリーズ</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-900">Sony Xperia</h4>
                      <p className="text-green-800">Xperia 1 II以降の一部機種</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-900">その他</h4>
                      <p className="text-green-800">OPPO Find X3 Pro、Rakuten Hand 5Gなど</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Android版の特徴</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">メーカー別の違い</h4>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• 設定画面の表示が機種により異なる</li>
                      <li>• Android バージョンによる違いあり</li>
                      <li>• 一部機種では手動設定が必要</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">注意点</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      <li>• Android 9.0以降が必要</li>
                      <li>• キャリア版では制限がある場合あり</li>
                      <li>• SIMロック解除が必要な場合あり</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">eSIM対応の確認</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">設定 → ネットワークとインターネット → モバイルネットワークで「eSIM」または「SIMをダウンロード」の項目があるか確認</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>確認方法：</strong> 設定 → デバイス情報 → SIMステータスで「EID」が表示されればeSIM対応端末です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">QRコード読み取り（推奨方法）</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">設定 → ネットワークとインターネット → モバイルネットワーク → 「代わりにSIMをダウンロードしますか？」</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>手順：</strong> 「次へ」→「QRコードをスキャン」→ カメラでQRコードを読み取り
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">手動設定方法</h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700">QRコードが使用できない場合の手動設定方法</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">必要な情報</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• SM-DP+アドレス</li>
                      <li>• アクティベーションコード</li>
                      <li>• 確認コード（ある場合）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* iPad Setup */}
      {activeDevice === 'iPad' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <i className="ri-tablet-line text-4xl text-purple-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">iPad eSIM設定手順</h2>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 text-purple-900">iPad eSIM対応機種</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">iPad Pro</h4>
                  <ul className="space-y-1 text-purple-800">
                    <li>• iPad Pro 12.9インチ（第3世代以降）</li>
                    <li>• iPad Pro 11インチ（全世代）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">その他iPad</h4>
                  <ul className="space-y-1 text-purple-800">
                    <li>• iPad Air（第3世代以降）</li>
                    <li>• iPad（第7世代以降）</li>
                    <li>• iPad mini（第5世代以降）</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              iPad のeSIM設定手順は基本的にiPhoneと同じです。ただし、以下の点にご注意ください：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-blue-900">iPadの特徴</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• 大画面でQRコード表示が可能</li>
                  <li>• Wi-Fi + Cellularモデルのみ対応</li>
                  <li>• データ専用プランがおすすめ</li>
                  <li>• テザリング機能も利用可能</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4 text-yellow-800">設定時の注意</h3>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• 音声通話非対応プランを選択</li>
                  <li>• データ容量は用途に応じて選択</li>
                  <li>• 屋外利用頻度を考慮してプラン選択</li>
                  <li>• バックアップ通信として活用も可能</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 共通の動作確認と注意事項 */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">共通の動作確認と注意</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-blue-900">動作確認チェック</h3>
              <ul className="space-y-2 text-sm text-blue-800 list-disc pl-5">
                <li>アンテナ表示と4G/5Gピクト確認</li>
                <li>ブラウザでWebページ表示</li>
                <li>SMS受信（認証コード）テスト</li>
                <li>発信試験番号 (例: 111 等) で短時間の通話接続確認</li>
              </ul>
              <p className="text-xs text-blue-700 mt-4">※ 発信試験番号は事業者/地域によって未提供の場合があります。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-amber-900">注意・禁止事項</h3>
              <ul className="space-y-2 text-sm text-amber-800 list-disc pl-5">
                <li>緊急通報番号 (110 / 118 / 119) をテスト目的で発信しない</li>
                <li>長時間の無音接続を継続しない（必要最小限で切断）</li>
                <li>不通時は SIM再挿入 / 機内モード切替 / 端末再起動 / APN再確認</li>
                <li>改善しない場合はログ時間帯を控えてサポートへ問い合わせ</li>
              </ul>
              <p className="text-xs text-amber-700 mt-4">※ 発信試験が不可の回線ではデータ通信とSMS確認のみで問題ありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Troubleshooting */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            よくあるトラブルと対処法
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-red-600">
                <i className="ri-error-warning-line mr-2"></i>
                設定でつまずく場合
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">QRコードが読み取れない</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 画面の明度を上げる</li>
                    <li>• QRコードを大きく表示</li>
                    <li>• カメラレンズを清掃</li>
                    <li>• 手動入力に変更</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">プロファイルダウンロード失敗</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wi-Fi接続を確認</li>
                    <li>• 端末の再起動</li>
                    <li>• 時間をおいて再実行</li>
                    <li>• キャリアに問い合わせ</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-bold text-xl mb-6 text-orange-600">
                <i className="ri-signal-wifi-error-line mr-2"></i>
                通信でつまずく場合
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">圏外表示が続く</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 回線切替手続きの確認</li>
                    <li>• APN設定の確認</li>
                    <li>• 機内モードON/OFF</li>
                    <li>• 端末の再起動</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">データ通信ができない</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• モバイルデータ通信ON確認</li>
                    <li>• データローミング設定</li>
                    <li>• VPN設定の一時無効化</li>
                    <li>• ネットワーク設定リセット</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg mb-4 text-blue-900">
              <i className="ri-customer-service-line mr-2"></i>
              それでも解決しない場合
            </h3>
            <p className="text-blue-800 mb-4">
              各格安SIM会社のカスタマーサポートにお問い合わせください。
              eSIM設定は技術的なサポートが受けられます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/faq"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                よくある質問を見る
              </Link>
              <Link 
                href="/guide/mnp"
                className="bg-purple-700 text-white border-2 border-purple-400 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-purple-800 transition-colors whitespace-nowrap"
              >
                乗り換え手順ガイド
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            eSIM対応プランで即日開通
          </h2>
          <p className="text-xl mb-8 opacity-90">
            物理SIMを待つ必要なし。今すぐ格安SIMを始めよう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/compare?category=esim"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              eSIM対応プランを比較
            </Link>
            <Link 
              href="/guide/mnp"
              className="bg-purple-700 text-white border-2 border-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-800 transition-colors whitespace-nowrap"
            >
              乗り換え手順を確認
            </Link>
          </div>
        </div>
      </section>

  {/* Global footer is provided by root layout */}
    </div>
  );
}