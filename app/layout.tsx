import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: '格安SIM完全比較ガイド2025 | 月額990円〜最適プラン診断',
  description: '2025年最新｜主要ブランドの料金・速度・キャンペーンを中立比較。節約目安：月2,000〜4,000円（年24,000〜48,000円）。',
  keywords: '格安SIM,比較,料金,速度,キャンペーン,MNP,eSIM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
  <body className={`${inter.className} ${notoSansJP.variable} font-sans antialiased`}>
        {/* Structured Data (Website + Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: '格安SIM完全比較ガイド',
                  url: 'https://example.com/',
                  inLanguage: 'ja-JP',
                  description: '主要ブランドの料金・速度・キャンペーンを中立比較する格安SIM比較サイト',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://example.com/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string'
                  }
                },
                {
                  '@type': 'Organization',
                  name: '格安SIM完全比較ガイド運営',
                  url: 'https://example.com/',
                  logo: 'https://example.com/logo.png'
                }
              ]
            })
          }}
        />
        {/* Breadcrumb (rendered only when microdata container exists in pages; kept minimal as global baseline) */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  格安SIM比較
                </a>
                <div className="hidden md:flex space-x-6">
                  <a href="/compare" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                    プラン比較
                  </a>
                  <a href="/diagnosis" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">
                    プラン診断
                  </a>
                  <a href="/guide/mnp" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                    乗り換えガイド
                  </a>
                  <a href="/guide/esim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                    eSIM設定
                  </a>
                  <a href="/faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                    FAQ
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="/diagnosis" 
                  className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-search-eye-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  プラン診断
                </a>
                <a 
                  href="/compare" 
                  className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-search-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  プラン比較
                </a>
                <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  格安SIM完全比較ガイド
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  2025年最新｜主要ブランドの料金・速度・キャンペーンを中立比較。節約目安：月2,000〜4,000円（年24,000〜48,000円）。
                  最新情報は各公式サイトでご確認ください。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">サービス</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/compare" className="hover:text-blue-400 transition-colors cursor-pointer">プラン比較</a></li>
                  <li><a href="/diagnosis" className="hover:text-green-400 transition-colors cursor-pointer">プラン診断</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">サポート</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="/guide/mnp" className="hover:text-blue-400 transition-colors cursor-pointer">乗り換えガイド</a></li>
                  <li><a href="/guide/esim" className="hover:text-blue-400 transition-colors cursor-pointer">eSIM設定</a></li>
                  <li><a href="/faq" className="hover:text-blue-400 transition-colors cursor-pointer">よくある質問</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                2025 格安SIM完全比較ガイド. All rights reserved.
              </p>
              <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
                <p className="text-gray-400 text-sm">
                  最終更新日：2025年8月21日
                </p>
                <p className="text-gray-400 text-sm">
                  ※最新の料金・特典は各公式サイトをご確認ください
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}