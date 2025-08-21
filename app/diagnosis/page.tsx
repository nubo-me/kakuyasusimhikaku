'use client';

import Link from 'next/link';
import DiagnosisForm from './DiagnosisForm';

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-[\'Pacifico\'] text-blue-600">格安SIM比較</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/compare" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  料金比較
                </Link>
                <Link href="/diagnosis" className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  プラン診断
                </Link>
                <Link href="/guide/mnp" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
            <span className="text-gray-900">プラン診断</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <DiagnosisForm />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-[\'Pacifico\'] mb-4">格安SIM比較</h3>
              <p className="text-gray-400 text-sm">
                格安SIM・eSIM乗り換えの専門比較サイト。
                最新の料金情報とキャンペーンをお届けします。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">比較・診断</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/compare" className="text-gray-400 hover:text-white">料金比較</Link></li>
                <li><Link href="/diagnosis" className="text-gray-400 hover:text-white">プラン診断</Link></li>
                <li><Link href="/compare?category=popular" className="text-gray-400 hover:text-white">人気ランキング</Link></li>
                <li><Link href="/compare?category=cheapest" className="text-gray-400 hover:text-white">最安プラン</Link></li>
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
              2025 格安SIM比較. All rights reserved. 
              <br />
              当サイトは広告・PRを含みます。最新の料金・特典は各公式サイトをご確認ください。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
