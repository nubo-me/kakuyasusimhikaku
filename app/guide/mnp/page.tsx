import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNP乗り換え完全ガイド | 格安SIM比較 2025",
  description: "MNP予約番号の取得から回線切替・初期設定・動作確認まで、初めてでも迷わない格安SIM乗り換え手順をステップ別に解説。発信試験 (111 等) の注意点も。",
};

const Breadcrumbs = () => {
  const items = [
    { name: "ホーム", href: "/" },
    { name: "ガイド", href: "/guide/mnp" },
    { name: "MNP乗り換え", href: "/guide/mnp" },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${item.href}`
    })),
  };
  return (
    <nav aria-label="パンくず" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap gap-1 items-center">
        {items.map((b, i) => (
          <li key={b.href} className="flex items-center">
            {i > 0 && <span className="mx-1">/</span>}
            <Link href={b.href} className="hover:text-gray-900 underline-offset-2 hover:underline">{b.name}</Link>
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
};

const StepCard = ({ num, title, children, color = "blue" }: { num: number; title: string; children: React.ReactNode; color?: string }) => {
  const base = color === 'blue' ? 'from-blue-500 to-indigo-500' : color === 'green' ? 'from-green-500 to-emerald-500' : 'from-gray-500 to-gray-700';
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${base} text-white flex items-center justify-center font-bold text-lg shadow`}>{num}</div>
      <h3 className="font-semibold text-xl mb-4 pl-10">{title}</h3>
      <div className="text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
        {children}
      </div>
    </div>
  );
};

export default function MNPGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs />
        <header className="mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">MNPガイド 2025</div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            初めてでも迷わない <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MNP乗り換え完全手順</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
            現在の電話番号そのままで、最短で当日中に格安SIMへ切り替えるための実践ガイド。<br className="hidden sm:block" />
            予約番号の取得から回線切替・初期APN/eSIM設定・動作確認まで、必要な要点だけを凝縮しています。
          </p>
          <div className="mt-6 bg-white/60 backdrop-blur border border-blue-100 rounded-lg p-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 text-sm text-gray-700">
              乗り換え準備の段階で<br className="sm:hidden" />契約者名義/支払い方法/端末SIMロック<br className="sm:hidden" />/メール・認証アプリ移行を先に確認しておくと切替がスムーズです。
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 font-medium">目安: 45〜90分</span>
              <span className="px-2 py-1 rounded bg-indigo-50 text-indigo-600 font-medium">切替停止: 5〜30分</span>
            </div>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-16" aria-label="全体の流れ">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2"><span className="text-blue-600">⏱</span> 所要時間の目安</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Step1: 予約番号取得 5〜15分（Web / アプリ）</li>
              <li>Step2: 申込み入力 10〜20分</li>
              <li>Step3: SIM/eSIM到着 0日（即時）〜3日</li>
              <li>Step4: 回線切替 5〜30分（混雑で延びる場合あり）</li>
              <li>Step5: 設定/動作確認 10〜25分</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2"><span className="text-green-600">✔</span> チェックポイント</h2>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>支払い方法と本人確認書類を手元に</li>
              <li>旧端末のメール（キャリア）/認証アプリ移行</li>
              <li>端末SIMロック解除（不要の場合あり）</li>
              <li>データバックアップ完了</li>
              <li>発信試験番号 111 等で動作確認（緊急通報は発信しない）</li>
            </ul>
          </div>
        </section>

        <div className="space-y-14">
          <StepCard num={1} title="MNP予約番号を取得する">
            <p>
              現在契約中のキャリア (例: ドコモ / au / ソフトバンク / 楽天モバイル 等) の公式サイト・アプリ・電話窓口から <strong>MNP予約番号</strong> を発行します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>有効期限は通常 <strong>15日</strong>（取得直後に申込みへ進むと安全）</li>
              <li>即時発行: Web / アプリ（深夜メンテ時間帯は不可）</li>
              <li>電話発行: オペレータ引き止めトークあり</li>
            </ul>
            <p className="text-xs text-gray-500">※ 予約番号を取得しても旧回線はまだ解約されません。切替完了まで引き続き利用可能です。</p>
          </StepCard>

          <StepCard num={2} title="乗り換え先を申込み (物理SIM / eSIM)">
            <p>
              比較ページ (<Link href="/compare" className="text-blue-600 underline">料金比較</Link>) を参考にプラン/データ量/通話オプションを選び申込みます。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>MNP予約番号 / 有効期限 / 電話番号 を正確に入力</li>
              <li>eKYC (本人確認): eSIM即時発行型はブラウザ or アプリで数分</li>
              <li>物理SIM: 最短翌日〜3日で到着（地域差あり）</li>
            </ul>
            <p className="text-xs text-gray-500">※ MNP有効期限残り <strong>7日未満</strong> になると再取得が必要になる事があります。</p>
          </StepCard>

          <StepCard num={3} title="SIM受取 / eSIMプロファイル有効化">
            <p>物理SIMの場合は到着を待ち、端末の電源を切ってから差し替えます。eSIMの場合は申込完了後すぐにプロファイルのダウンロード/インストールへ進みます。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>iPhone: 設定 &gt; モバイル通信 &gt; eSIM追加 (QR / 手動コード)</li>
              <li>Android: 設定 &gt; ネットワークとインターネット &gt; SIM &gt; eSIM追加</li>
              <li>複数回線併用時は名称変更 (例: メイン/サブ)</li>
            </ul>
            <p className="text-xs text-gray-500">※ プロファイル追加後も切替完了前は旧回線が主回線として残る場合があります。</p>
          </StepCard>

          <StepCard num={4} title="回線切替 (MNP転入完了処理)" color="green">
            <p>
              事業者が案内する <strong>マイページ / 専用切替ボタン / 自動ダイヤル (例: 0037-68-xxxx)</strong> などで回線切替を実行します。完了まで数分〜30分程度、稀に混雑で遅延することがあります。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>切替中は一時的に発着信/データ通信が不可になる時間帯あり</li>
              <li>電波掴まない場合は 機内モード ON/OFF または再起動</li>
              <li>ステータスが変わらない場合はサポートチャット/問い合わせ</li>
            </ul>
            <p className="text-xs text-gray-500">※ 旧回線は切替完了をもって自動解約されます (違約金/端末残債の精算は後日請求)。</p>
          </StepCard>

          <StepCard num={5} title="APN/eSIM設定 & 動作確認" color="green">
            <p>回線切替後にデータ通信・音声通話・SMS/認証コードが正常か確認します。</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>APN自動構成されない場合: 事業者指定のAPN項目を追加</li>
              <li>キャリアメール利用不可 → 代替: Gmail / Outlook 等へ移行</li>
              <li>認証系 (銀行 / 決済 / SNS) のSMS受信テスト</li>
              <li>発信試験: <strong>111</strong> 等の試験番号（提供されている場合）へ短時間発信し通話確立のみ確認</li>
            </ul>
            <div className="mt-4 border border-blue-200 bg-blue-50 rounded-lg p-4 text-xs text-blue-800 space-y-2">
              <p className="font-semibold">動作確認の注意</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>緊急通報番号 (110/118/119 等) でのテスト発信は行わない</li>
                <li>発信試験番号は提供事業者・地域により異なり未提供の場合もある</li>
                <li>長時間の無音接続は避け短時間で切る</li>
              </ul>
              <p>不通時は: SIM再挿入 / 機内モード切替 / 端末再起動 / APN再確認 → 改善しなければサポートへログ参照を依頼。</p>
            </div>
          </StepCard>
        </div>

        <section className="mt-20" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6 text-gray-900">よくある質問 (抜粋)</h2>
          <div className="divide-y divide-gray-200 bg-white border border-gray-200 rounded-xl overflow-hidden">
            <details className="group" open>
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800">
                MNP予約番号を取得しただけで旧回線は解約されますか？
                <span className="ml-4 text-blue-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-700 bg-blue-50/40">
                いいえ。実際に乗り換え先で回線切替 (転入完了) 処理を行うまで旧回線は継続します。
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800">
                切替後に圏外になる / データ通信できない
                <span className="ml-4 text-blue-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-700 bg-blue-50/40 space-y-2">
                <p>以下を順に確認してください:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>機内モード ON→OFF</li>
                  <li>端末再起動</li>
                  <li>APN設定 (手動入力漏れ)</li>
                  <li>eSIMプロファイルが有効 (不要な旧プロファイル無効化)</li>
                </ul>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-medium text-gray-800">
                発信試験番号とは？
                <span className="ml-4 text-blue-500 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-700 bg-blue-50/40 space-y-2">
                <p>事業者が通話接続テスト用に用意している番号です (例: 111 等)。提供されていない事業者もあります。緊急通報でのテストは絶対に行わないでください。</p>
              </div>
            </details>
          </div>
          <div className="text-right mt-4">
            <Link href="/faq" className="text-sm text-blue-600 underline">FAQをもっと見る →</Link>
          </div>
        </section>

        <aside className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">次は料金を比較しましょう</h2>
            <p className="text-indigo-50 mb-6 max-w-2xl">主要な格安SIMの月額・データ量・キャンペーンを一画面で見比べできます。カテゴリ絞込やeSIM対応フィルタも利用できます。</p>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition" aria-label="料金比較ページへ">
              料金比較ページへ <span>→</span>
            </Link>
        </aside>
      </div>
    </main>
  );
}