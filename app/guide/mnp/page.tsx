'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MnpGuidePage() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const checklistItems = [
    '本人確認書類（運転免許証、マイナンバーカード等）',
    'クレジットカードまたはキャッシュカード',
    'MNP予約番号（現在の契約先から取得）',
    'メールアドレス（GmailやYahoo!メール等）',
    'Wi-Fi環境（eSIM設定時に必要）'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">格安SIM比較</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/compare" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  料金比較
                </Link>
                <Link href="/guide/mnp" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  乗り換え手順
                </Link>
                <Link href="/guide/esim" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  eSIM設定
                </Link>
                <Link href="/faq" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  よくある質問
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">ホーム</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900">MNP乗り換え完全手順</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            MNP乗り換え完全手順
            <br />
            <span className="text-green-600">失敗しない5ステップ</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            電話番号そのままで格安SIMに乗り換える手順を詳しく解説。
            事前準備から開通まで、つまずきやすいポイントも含めて分かりやすく説明します。
          </p>
          
          {/* 5ステップ要約 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-sm">事前準備</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-sm">MNP予約番号取得</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-sm">格安SIM申込</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-sm">回線切替・設定</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">5</span>
              </div>
              <h3 className="font-semibold text-sm">利用開始</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <i className="ri-checkbox-line text-green-600 mr-3"></i>
            乗り換え前チェックリスト
          </h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-lg mb-4 text-blue-900">必要なものを確認しましょう</h3>
            <div className="space-y-3">
              {checklistItems.map((item, index) => (
                <label key={index} className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(index)}
                    onChange={() => toggleCheck(index)}
                    className="mt-1 mr-3 cursor-pointer"
                  />
                  <span className={checkedItems.includes(index) ? 'line-through text-gray-500' : 'text-gray-800'}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
            {checkedItems.length === checklistItems.length && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">
                  <i className="ri-check-line mr-2"></i>
                  準備完了！乗り換え手続きを開始できます
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Step 1: 事前準備 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">1</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">事前準備</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">現在の契約内容を確認</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">契約解除料・違約金</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    2022年4月以降は大手キャリアの違約金が大幅に減額されていますが、古いプランでは高額な場合があります。
                  </p>
                  <div className="text-xs space-y-1">
                    <p><strong>ドコモ：</strong> 1,100円（2021年10月以降のプラン）</p>
                    <p><strong>au：</strong> 1,100円（2022年4月以降のプラン）</p>
                    <p><strong>ソフトバンク：</strong> 1,100円（2022年2月以降のプラン）</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">端末の分割払い残債</h4>
                  <p className="text-sm text-gray-600">
                    解約後も分割払いは継続されます。一括精算も可能ですが、継続払いが一般的です。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">更新月の確認</h4>
                  <p className="text-sm text-gray-600">
                    古い2年契約プランの場合、更新月以外の解約で違約金が発生する場合があります。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">SIMロック解除</h3>
              <div className="bg-white p-6 rounded-lg border mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  2021年10月以降に発売された端末はSIMフリー化が義務化されていますが、
                  それ以前の端末は手続きが必要な場合があります。
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">ドコモ</h4>
                    <p className="text-xs text-gray-600">My docomo または 151（無料）</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">au</h4>
                    <p className="text-xs text-gray-600">My au または店舗（3,300円）</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">ソフトバンク</h4>
                    <p className="text-xs text-gray-600">My SoftBank または店舗（3,300円）</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-yellow-800 mb-2">
                  <i className="ri-alert-line mr-2"></i>
                  確認方法
                </h4>
                <p className="text-xs text-yellow-700">
                  設定 → 一般 → 情報で「SIMロック」の項目を確認。
                  「SIMロックなし」と表示されていれば解除済みです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: MNP予約番号取得 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">2</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">MNP予約番号取得</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900">ドコモ</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Web：</strong> My docomo（24時間）</p>
                <p><strong>電話：</strong> 151（9:00-20:00）</p>
                <p><strong>店舗：</strong> ドコモショップ</p>
                <p className="text-blue-700 font-semibold">手数料：無料</p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="font-bold text-lg mb-4 text-orange-900">au</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Web：</strong> My au（9:00-21:30）</p>
                <p><strong>電話：</strong> 0077-75470（9:00-20:00）</p>
                <p><strong>店舗：</strong> auショップ</p>
                <p className="text-orange-700 font-semibold">手数料：無料</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-gray-900">ソフトバンク</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Web：</strong> My SoftBank（9:00-21:30）</p>
                <p><strong>電話：</strong> *5533（9:00-20:00）</p>
                <p><strong>店舗：</strong> ソフトバンクショップ</p>
                <p className="text-gray-700 font-semibold">手数料：無料</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-red-900">
              <i className="ri-time-line mr-2"></i>
              MNP予約番号の注意点
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">有効期限</h4>
                <ul className="space-y-1 text-red-800">
                  <li>• 発行から15日間有効</li>
                  <li>• 格安SIM申込時は10日以上残存が必要</li>
                  <li>• 期限切れの場合は再取得（無料）</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">取得タイミング</h4>
                <ul className="space-y-1 text-red-800">
                  <li>• 申込直前に取得するのがベスト</li>
                  <li>• 月末近くは避ける（混雑のため）</li>
                  <li>• 土日祝日は窓口が混雑</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: 申込 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">3</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">格安SIM申込</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">申込の流れ</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <h4 className="font-semibold">プラン選択</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    データ容量、通話オプション、SIMタイプ（物理SIM/eSIM）を選択
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <h4 className="font-semibold">個人情報入力</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    氏名、住所、生年月日等を本人確認書類と同じ内容で入力
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <h4 className="font-semibold">MNP情報入力</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    MNP予約番号、転出元電話番号、予約番号有効期限を入力
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">4</span>
                    </div>
                    <h4 className="font-semibold">本人確認</h4>
                  </div>
                  <p className="text-sm text-gray-600 ml-11">
                    eKYC（オンライン本人確認）で書類撮影と自撮りを実施
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">本人確認書類</h3>
              <div className="bg-white p-6 rounded-lg border mb-6">
                <h4 className="font-semibold mb-3 text-green-600">利用可能な書類</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    運転免許証
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    マイナンバーカード（個人番号は隠す）
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    在留カード（外国籍の方）
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    住民基本台帳カード（写真付き）
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-yellow-800 mb-2">
                  <i className="ri-alert-line mr-2"></i>
                  eKYC撮影のコツ
                </h4>
                <ul className="text-xs space-y-1 text-yellow-700">
                  <li>• 明るい場所で撮影する</li>
                  <li>• 書類全体が画面に収まるようにする</li>
                  <li>• 反射や影がないように注意</li>
                  <li>• 自撮りは正面を向いて撮影</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: 回線切替 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">4</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">回線切替・設定</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-lg mb-4 text-blue-900">
                <i className="ri-smartphone-line mr-2"></i>
                eSIMの場合
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">審査完了メール確認</p>
                    <p className="text-blue-800">申込から数時間〜1日程度</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">eSIMプロファイルDL</p>
                    <p className="text-blue-800">QRコードまたはSM-DP+で設定</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">回線切替手続き</p>
                    <p className="text-blue-800">Webまたは電話で切替実行</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">APN設定</p>
                    <p className="text-blue-800">データ通信設定を確認</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                <i className="ri-sim-card-line mr-2"></i>
                物理SIMの場合
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                  <div>
                    <p className="font-semibold">SIMカード受取</p>
                    <p className="text-gray-800">申込から2-3日で配送</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                  <div>
                    <p className="font-semibold">SIM挿入</p>
                    <p className="text-gray-800">端末の電源を切ってから作業</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold">回線切替手続き</p>
                    <p className="text-gray-800">Webまたは電話で切替実行</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                  <div>
                    <p className="font-semibold">APN設定</p>
                    <p className="text-gray-800">データ通信設定を確認</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-red-900">
              <i className="ri-error-warning-line mr-2"></i>
              よくあるつまずきポイント
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-red-800">eSIM設定時</h4>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• QRコードが読み込めない → 別端末で表示</li>
                  <li>• プロファイルDL失敗 → Wi-Fi接続を確認</li>
                  <li>• 既存プロファイル削除忘れ</li>
                  <li>• SM-DP+アドレスの入力ミス</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-red-800">共通トラブル</h4>
                <ul className="space-y-1 text-sm text-red-700">
                  <li>• APN設定が反映されない</li>
                  <li>• VoLTE設定がオフになっている</li>
                  <li>• 回線切替のタイミングが不適切</li>
                  <li>• 端末の再起動忘れ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: 利用開始 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-bold text-2xl">5</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">利用開始・確認</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                <i className="ri-phone-line mr-2"></i>
                通話テスト
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• 発信テスト（111等）</li>
                <li>• 着信テスト</li>
                <li>• SMS送受信確認</li>
                <li>• 緊急通報（テストは111）</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                <i className="ri-wifi-line mr-2"></i>
                データ通信テスト
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Webサイト閲覧</li>
                <li>• アプリのダウンロード</li>
                <li>• 動画ストリーミング</li>
                <li>• 速度測定アプリ実行</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-purple-600">
                <i className="ri-settings-line mr-2"></i>
                各種設定・移行
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• マイページ登録</li>
                <li>• アプリインストール</li>
                <li>• キャンペーン特典確認</li>
                <li>• 旧SIM無効化確認</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-xl mb-4 text-green-900">
              <i className="ri-check-double-line mr-3"></i>
              乗り換え完了おめでとうございます！
            </h3>
            <p className="text-green-800 mb-6">
              これで格安SIMへの乗り換えが完了しました。
              月々の通信費節約を実感してください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guide/esim"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                eSIM設定ガイドを見る
              </Link>
              <Link 
                href="/faq"
                className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                よくある質問を確認
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            <i className="ri-tools-line mr-3 text-orange-500"></i>
            トラブル対処法
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-red-800">圏外・電波なし</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">考えられる原因</h4>
                  <ul className="text-red-700 space-y-1 mt-1">
                    <li>• APN設定の誤り</li>
                    <li>• 回線切替未完了</li>
                    <li>• SIM挿入不良</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">対処方法</h4>
                  <ul className="text-red-700 space-y-1 mt-1">
                    <li>• APN設定を再確認</li>
                    <li>• 端末を再起動</li>
                    <li>• SIM再挿入</li>
                    <li>• 機内モードON/OFF</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-orange-800">発信できない</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">考えられる原因</h4>
                  <ul className="text-orange-700 space-y-1 mt-1">
                    <li>• VoLTE設定オフ</li>
                    <li>• 3G回線設定</li>
                    <li>• 通話プラン未契約</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">対処方法</h4>
                  <ul className="text-orange-700 space-y-1 mt-1">
                    <li>• VoLTE設定をON</li>
                    <li>• 4G/5G優先に設定</li>
                    <li>• 契約内容を確認</li>
                    <li>• 111でテスト発信</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-blue-800">データ通信できない</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold">考えられる原因</h4>
                  <ul className="text-blue-700 space-y-1 mt-1">
                    <li>• APN設定間違い</li>
                    <li>• モバイルデータOFF</li>
                    <li>• データ容量超過</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">対処方法</h4>
                  <ul className="text-blue-700 space-y-1 mt-1">
                    <li>• APN設定を再設定</li>
                    <li>• モバイルデータ確認</li>
                    <li>• 使用量をチェック</li>
                    <li>• Wi-Fi切断して確認</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">それでも解決しない場合</h3>
              <p className="text-gray-600 mb-4">
                各格安SIM会社のサポートセンターにお問い合わせください。
                契約者情報を用意してからご連絡いただくとスムーズです。
              </p>
              <Link 
                href="/faq"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                よくある質問を確認する
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            格安SIM乗り換えの準備はOK？
          </h2>
          <p className="text-xl mb-8 opacity-90">
            最適なプランを見つけて、今すぐ申し込もう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/compare"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              プランを比較する
            </Link>
            <Link 
              href="/guide/esim"
              className="bg-green-700 text-white border-2 border-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors whitespace-nowrap"
            >
              eSIM設定ガイド
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">格安SIM比較</h3>
              <p className="text-gray-400 text-sm">
                格安SIM・eSIM乗り換えの専門比較サイト。
                最新の料金情報とキャンペーンをお届けします。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">比較・診断</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/compare" className="text-gray-400 hover:text-white">料金比較</Link></li>
                <li><Link href="/compare?category=popular" className="text-gray-400 hover:text-white">人気ランキング</Link></li>
                <li><Link href="/compare?category=cheapest" className="text-gray-400 hover:text-white">最安プラン</Link></li>
                <li><Link href="/compare?category=esim" className="text-gray-400 hover:text-white">eSIM対応</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ガイド</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guide/mnp" className="text-gray-400 hover:text-white">MNP乗り換え手順</Link></li>
                <li><Link href="/guide/esim" className="text-gray-400 hover:text-white">eSIM設定方法</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">よくある質問</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サイト情報</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/policy" className="text-gray-400 hover:text-white">運営ポリシー</Link></li>
                <li><Link href="/policy" className="text-gray-400 hover:text-white">プライバシーポリシー</Link></li>
                <li><Link href="/policy" className="text-gray-400 hover:text-white">広告ポリシー</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 格安SIM比較. All rights reserved. 
              <br />
              当サイトは広告・PRを含みます。最新の料金・特典は各公式サイトをご確認ください。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}