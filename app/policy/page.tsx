'use client';

import Link from 'next/link';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Link href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  FAQ
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
            <span className="text-gray-900">サイト運営ポリシー</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">サイト運営ポリシー</h1>

        {/* 運営ポリシー */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">運営ポリシー</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">サイトの目的</h3>
            <p className="text-blue-800">
              当サイトは、格安SIMサービスの比較・検討を支援し、利用者が最適なモバイル通信サービスを選択できるよう、
              中立的で正確な情報提供を行うことを目的としています。
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">情報の正確性について</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 料金プラン、キャンペーン情報は各事業者の公式発表に基づき更新</li>
                <li>• 通信速度データは信頼できる第三者機関の測定結果を参考</li>
                <li>• 法改正や業界動向を常にモニタリングし、適切な情報更新を実施</li>
                <li>• 利用者からのフィードバックを積極的に収集し、サイト改善に活用</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">中立性の確保</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 特定事業者に偏った情報提供は行いません</li>
                <li>• 比較項目は客観的かつ公平な基準で設定</li>
                <li>• 広告収入があっても、コンテンツの公正性を最優先</li>
                <li>• ユーザーにとって最適な選択肢を提案することを重視</li>
              </ul>
            </div>
          </div>
        </section>

        {/* プライバシーポリシー */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">プライバシーポリシー</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">収集する情報</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold mb-2">自動的に収集される情報</h4>
                <ul className="space-y-1 text-sm text-gray-700 mb-4">
                  <li>• IPアドレス、ブラウザ情報、OS情報</li>
                  <li>• アクセス日時、参照ページ、滞在時間</li>
                  <li>• 検索キーワード、クリック情報</li>
                  <li>• デバイス情報（スマートフォン、PC等）</li>
                </ul>
                <h4 className="font-semibold mb-2">Cookie及び類似技術</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• サイト利用状況の分析（Google Analytics等）</li>
                  <li>• 広告配信の最適化</li>
                  <li>• ユーザビリティの向上</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">情報の利用目的</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• サイトの運営、維持、改善</li>
                <li>• コンテンツの質向上とパーソナライゼーション</li>
                <li>• 利用動向の分析と統計データの作成</li>
                <li>• 適切な広告配信</li>
                <li>• 不正利用の防止とセキュリティ確保</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">第三者提供</h3>
              <p className="text-gray-700 mb-4">
                法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
                ただし、以下のサービスを利用しています：
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Google Analytics（アクセス解析）</li>
                <li>• Google AdSense（広告配信）</li>
                <li>• その他の広告配信パートナー</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 広告ポリシー */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">広告ポリシー</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-2">
              <i className="ri-advertisement-line mr-2"></i>
              広告・アフィリエイトについて
            </h3>
            <p className="text-yellow-800">
              当サイトは、格安SIM事業者との提携により収益を得ています。
              ユーザーが当サイト経由で申し込みを行った場合、事業者から成果報酬を受け取る場合があります。
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">広告掲載基準</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 総務省認可の電気通信事業者のみ掲載</li>
                <li>• 誇大広告や虚偽の情報は掲載しません</li>
                <li>• ユーザーに不利益をもたらす可能性のあるサービスは除外</li>
                <li>• 法令に違反する、または社会通念上不適切な広告は掲載しません</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">コンテンツの独立性</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 広告収入の有無に関わらず、公平な比較・評価を実施</li>
                <li>• ユーザーにとって最適な選択肢を最優先で推奨</li>
                <li>• 事業者からの要請があっても、不正確な情報は掲載しません</li>
                <li>• 編集方針は事業者の意向に左右されません</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">表示について</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 広告やアフィリエイトリンクには適切な表示を行います</li>
                <li>• 「PR」「広告」などの表記により明確に識別可能</li>
                <li>• ユーザーが判断を誤らないよう配慮した表示を心がけます</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 免責事項 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">免責事項</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">情報の正確性について</h3>
              <p className="text-gray-700 mb-4">
                当サイトに掲載された情報は、可能な限り正確性を保つよう努めていますが、
                情報の完全性や正確性を保証するものではありません。
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• 料金プランやキャンペーンは予告なく変更される場合があります</li>
                <li>• 最新情報は必ず各事業者の公式サイトでご確認ください</li>
                <li>• 通信速度は利用環境により大きく変動します</li>
                <li>• 表示されている価格は税込み表記ですが、一部税抜き表記が含まれる可能性があります</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">利用者の責任</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 最終的な契約判断は利用者ご自身の責任で行ってください</li>
                <li>• 契約内容や料金については事業者に直接ご確認ください</li>
                <li>• 当サイトの情報に基づく不利益について責任を負いかねます</li>
                <li>• サービス利用に関するトラブルは各事業者にお問い合わせください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">お問い合わせ</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              当サイトの運営に関するお問い合わせ、情報の修正依頼、
              その他ご不明な点がございましたら、以下の方法でお問い合わせください。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-600 mr-3"></i>
                <div>
                  <p className="font-semibold">メールアドレス</p>
                  <p className="text-blue-600">info@kakuyasu-sim-guide.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="ri-building-line text-blue-600 mr-3"></i>
                <div>
                  <p className="font-semibold">運営者</p>
                  <p className="text-gray-700">格安SIM比較ガイド運営事務局</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <i className="ri-time-line text-blue-600 mr-3"></i>
                <div>
                  <p className="font-semibold">対応時間</p>
                  <p className="text-gray-700">平日 10:00-18:00（土日祝除く）</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 更新履歴 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">更新履歴</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-20 text-sm text-gray-600">2024/12/01</div>
              <div className="text-gray-700">サイトリニューアル、プライバシーポリシー更新</div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-20 text-sm text-gray-600">2024/10/01</div>
              <div className="text-gray-700">広告ポリシー改定、表示方法の改善</div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-20 text-sm text-gray-600">2024/08/01</div>
              <div className="text-gray-700">運営ポリシー策定、サイト運営開始</div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            安心してご利用いただけるサイトを目指しています
          </h2>
          <p className="text-xl mb-8 opacity-90">
            ユーザーの皆様に信頼される情報提供を心がけています
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/compare"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              プラン比較を始める
            </Link>
            <Link 
              href="/faq"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors whitespace-nowrap"
            >
              よくある質問
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
                2025年最新｜主要ブランドの料金・速度・キャンペーンを中立比較。節約目安：月2,000〜4,000円（年24,000〜48,000円）。
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
              © 2025 格安SIM完全比較ガイド. All rights reserved.
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