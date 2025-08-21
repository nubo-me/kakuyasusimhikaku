'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: '基本的な質問',
      icon: 'ri-question-line',
      color: 'blue',
      faqs: [
        {
          question: '格安SIMとは何ですか？',
          answer: '格安SIMは、大手キャリア（ドコモ・au・ソフトバンク）の回線を借りて、より安い料金でモバイル通信サービスを提供するMVNO（仮想移動体通信事業者）のSIMカードです。同じ回線品質でありながら、大幅にコストを削減できます。'
        },
        {
          question: '格安SIMに変えるとどのくらい安くなりますか？',
          answer: '使用量によりますが、大手キャリアから格安SIMに乗り換えることで月額2,000〜4,000円程度の節約が可能です。年間では24,000〜48,000円の削減効果があります。例えば、大手キャリアで月7,000円支払っている場合、格安SIMなら月2,000円程度で同等のサービスを利用できます。'
        },
        {
          question: '格安SIMのデメリットはありますか？',
          answer: '主なデメリットとして、①昼休みや夕方など混雑時の速度低下、②キャリアメールが使えない、③店舗サポートが限定的、④一部のキャリア決済が使用不可、⑤LINEのID検索ができない場合がある、などがあります。ただし、最近はこれらの問題も改善されてきています。'
        },
        {
          question: '通信品質は大手キャリアと同じですか？',
          answer: 'ahamo、povo、LINEMOなどの大手キャリアのサブブランドは、親会社と同等の通信品質を提供しています。その他のMVNOは同じ回線を使用していますが、混雑時に速度制限がかかる場合があります。ただし、日常的な利用には十分な品質を確保しています。'
        }
      ]
    },
    {
      title: '乗り換えについて',
      icon: 'ri-repeat-line',
      color: 'green',
      faqs: [
        {
          question: 'MNPとは何ですか？',
          answer: 'MNP（Mobile Number Portability：携帯電話番号ポータビリティ）は、携帯電話会社を変更する際に、電話番号をそのまま引き継げるサービスです。現在使用している電話番号を変えることなく、格安SIMに乗り換えることができます。'
        },
        {
          question: '乗り換えにどのくらい時間がかかりますか？',
          answer: 'eSIMの場合は申込から開通まで最短1時間、物理SIMの場合は2-3日程度です。MNP予約番号の取得から実際の回線切替まで含めると、全体で1週間程度を見込んでおけば安心です。審査や配送状況により前後する場合があります。'
        },
        {
          question: '乗り換え時に電話やネットが使えない期間はありますか？',
          answer: '最近の格安SIMサービスでは、回線切替のタイミングを自分で選択できるため、不通期間はほぼありません。eSIMなら数分、物理SIMでも30分程度で新しい回線に切り替わります。計画的に乗り換え手続きを行えば、日常生活に支障はありません。'
        },
        {
          question: '違約金や手数料はかかりますか？',
          answer: '2025年4月以降、大手キャリアの違約金は大幅に減額され、多くが1,100円以下になっています。ただし、端末の分割払い残債や一部の古いプランでは高額な違約金が発生する場合があります。乗り換え前に現在の契約内容を確認することをお勧めします。'
        }
      ]
    },
    {
      title: 'eSIMについて',
      icon: 'ri-smartphone-line',
      color: 'purple',
      faqs: [
        {
          question: 'eSIMとは何ですか？',
          answer: 'eSIM（embedded SIM）は、スマートフォンに内蔵された電子的なSIMです。物理的なSIMカードが不要で、オンラインでプロファイルをダウンロードするだけで通信サービスを利用開始できます。紛失や破損の心配がなく、即日開通が可能です。'
        },
        {
          question: 'eSIM対応機種はどうやって確認できますか？',
          answer: 'iPhoneの場合：設定 → 一般 → 情報で「デジタルSIM」の項目があれば対応。Androidの場合：設定 → デバイス情報 → SIMステータスで「EID」が表示されれば対応しています。iPhone XS以降、Android 9.0以降の多くの機種で対応しています。'
        },
        {
          question: 'eSIMと物理SIMは同時に使えますか？',
          answer: 'はい、デュアルSIM機能対応端末なら、eSIMと物理SIMを同時に使用できます。例えば、仕事用とプライベート用で回線を分けたり、海外旅行時に現地のeSIMを追加で利用することができます。設定で主回線と副回線を切り替えて使用します。'
        },
        {
          question: 'eSIMを削除したら再設定できますか？',
          answer: 'eSIMプロファイルを一度削除すると、同じQRコードでは再設定できません。再設定が必要な場合は、通信会社に連絡してプロファイルの再発行を依頼する必要があります。削除前に必ず通信会社のサポートに確認することをお勧めします。'
        }
      ]
    },
    {
      title: '料金・プランについて',
      icon: 'ri-money-dollar-circle-line',
      color: 'orange',
      faqs: [
        {
          question: '自分に最適なデータ容量はどうやって決めればいいですか？',
          answer: '現在のスマホの設定から月間データ使用量を確認しましょう。一般的に、3GB未満はライトユーザー、3-10GBは一般的な使用、10GB以上はヘビーユーザーです。Wi-Fi環境が整っていれば少ない容量でも十分です。動画視聴やテザリング頻度も考慮して選択しましょう。'
        },
        {
          question: 'かけ放題オプションは必要ですか？',
          answer: '通話頻度によって判断しましょう。月30分未満の通話なら基本料金（22円/30秒）で充分、月30分以上なら5分かけ放題（550円程度）、頻繁に長電話するなら無制限かけ放題（1,650円程度）がお得です。LINEやSkype等の無料通話を主に使用する方は不要な場合が多いです。'
        },
        {
          question: 'キャンペーンはいつまで適用されますか？',
          answer: 'キャンペーン内容により異なりますが、多くは6ヶ月〜12ヶ月間の期間限定です。適用条件や終了時期は各社の公式サイトで必ず確認してください。キャンペーン終了後の通常料金も含めて、総合的なコストを比較検討することが重要です。'
        },
        {
          question: '家族割引はありますか？',
          answer: 'UQモバイル、ワイモバイル等の一部サービスで家族割引を提供しています。ahamo、povo、LINEMOなどのオンライン専用プランでは家族割がない代わりに、元の料金が安く設定されています。家族全体でのコストを計算して最適なプランを選択しましょう。'
        }
      ]
    },
    {
      title: '技術的な問題',
      icon: 'ri-tools-line',
      color: 'red',
      faqs: [
        {
          question: 'APN設定とは何ですか？',
          answer: 'APN（Access Point Name）設定は、スマートフォンがインターネットに接続するための設定です。格安SIMでは手動でAPN設定が必要な場合があります。各社から提供される設定情報（APN名、ユーザー名、パスワード等）を端末に入力します。'
        },
        {
          question: '圏外になって通信できません',
          answer: '①APN設定の確認、②SIMカードの挿入状態確認、③端末の再起動、④機内モードのON/OFF、⑤回線切替手続きの完了確認、⑥VoLTE設定の確認を順番に試してください。それでも解決しない場合は通信会社のサポートに連絡しましょう。'
        },
        {
          question: 'VoLTEとは何ですか？',
          answer: 'VoLTE（Voice over LTE）は、4G回線を使用した高品質音声通話サービスです。多くの格安SIMでVoLTEが必要になっており、設定でONにする必要があります。VoLTE未対応の古い端末では通話ができない場合があります。'
        },
        {
          question: 'SIMロック解除は必要ですか？',
          answer: '2024年10月以降に発売された端末はSIMフリーが義務化されているため不要です。それ以前の端末で他社回線の格安SIMを使用する場合は、SIMロック解除が必要になる場合があります。各キャリアのWebサイトや店舗で手続き可能です。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                格安SIM比較
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/compare" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  プラン比較
                </Link>
                <Link href="/guide/mnp" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  乗り換えガイド
                </Link>
                <Link href="/guide/esim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  eSIM設定
                </Link>
                <Link href="/faq" className="text-blue-600 font-medium">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">ホーム</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900">よくある質問</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20question%20mark%20patterns%20with%20FAQ%20symbols%2C%20modern%20help%20desk%20background%2C%20blue%20and%20purple%20gradients%2C%20professional%20design%2C%20geometric%20shapes%2C%20clean%20minimalist%20style&width=1920&height=600&seq=faq-bg&orientation=landscape')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <i className="ri-questionnaire-line text-blue-300 mr-2"></i>
            <span className="text-sm font-medium">格安SIM完全サポート</span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6">
            よくある質問
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">FAQ</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            格安SIMの乗り換えや設定でお困りの方へ。
            よくあるご質問とその回答をカテゴリ別に整理しました。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guide/mnp" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300">
              <i className="ri-guide-line mr-2"></i>
              乗り換えガイド
            </Link>
            <Link href="/guide/esim" className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border border-white/30 transition-all duration-300">
              <i className="ri-smartphone-line mr-2"></i>
              eSIM設定ガイド
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-${category.color}-100 text-${category.color}-700 mb-4`}>
                  <i className={`${category.icon} text-xl mr-3`}></i>
                  <span className="font-semibold text-lg">{category.title}</span>
                </div>
              </div>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 1000 + faqIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 lg:p-8 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-full flex items-center justify-center mr-4 mt-1`}>
                            <span className="text-white font-bold text-sm">Q</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 pr-4">{faq.question}</h3>
                        </div>
                        <div className="flex-shrink-0">
                          <i className={`text-2xl text-gray-400 transition-transform duration-300 ${
                            isOpen ? 'ri-subtract-line rotate-180' : 'ri-add-line'
                          }`}></i>
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                          <div className="ml-14">
                            <div className={`w-8 h-8 bg-gradient-to-r from-${category.color}-400 to-${category.color}-500 rounded-full flex items-center justify-center mb-4`}>
                              <span className="text-white font-bold text-sm">A</span>
                            </div>
                            <div className="prose prose-lg max-w-none">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            お探しの答えが見つからない場合
          </h2>
          <p className="text-xl mb-8 opacity-90">
            各格安SIM会社の公式サポートにお問い合わせいただくか、
            詳細なガイドをご確認ください
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-phone-line text-3xl mb-3"></i>
              <h3 className="font-semibold mb-2">電話サポート</h3>
              <p className="text-sm opacity-80">各社のコールセンターで電話サポートが受けられます</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-chat-1-line text-3xl mb-3"></i>
              <h3 className="font-semibold mb-2">チャットサポート</h3>
              <p className="text-sm opacity-80">公式サイトでリアルタイムチャットサポートが利用可能</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <i className="ri-store-line text-3xl mb-3"></i>
              <h3 className="font-semibold mb-2">店舗サポート</h3>
              <p className="text-sm opacity-80">UQモバイル・ワイモバイルは全国の店舗で対面サポート</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guide/mnp"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              詳しい乗り換えガイド
            </Link>
            <Link 
              href="/compare"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors whitespace-nowrap"
            >
              プラン比較に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                格安SIM完全比較ガイド
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                50万人が利用する格安SIM比較サイト。最新の料金プラン、通信速度、キャンペーン情報を毎日更新。
                あなたに最適な格安SIMを見つけて、通信費を大幅に削減しましょう。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/compare" className="hover:text-blue-400 transition-colors">プラン比較</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/guide/mnp" className="hover:text-blue-400 transition-colors">乗り換えガイド</Link></li>
                <li><Link href="/guide/esim" className="hover:text-blue-400 transition-colors">eSIM設定</Link></li>
                <li><Link href="/faq" className="hover:text-blue-400 transition-colors">よくある質問</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              2025 格安SIM完全比較ガイド. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              ※最新の料金・特典は各公式サイトをご確認ください
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}