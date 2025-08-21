## 格安SIM比較サイト – 開発 / デプロイ手順

### 技術スタック
- Next.js 14 App Router (静的プリレンダリング)
- TypeScript / Tailwind CSS
- Firebase Hosting (静的配信)
- Firebase Analytics (必要時有効化)

### 環境変数 (.env.local)
```
NEXT_PUBLIC_FIREBASE_API_KEY=***
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=***
NEXT_PUBLIC_FIREBASE_PROJECT_ID=***
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=***
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=***
NEXT_PUBLIC_FIREBASE_APP_ID=***
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=***
```
※ `.env.local` は Git 管理外。

### 開発
```
npm install
npm run dev
```
http://localhost:3000 で確認。

### 本番ビルド & 静的出力
```
npm run build
```
生成物: `dist/` (HTML 各ページ + `_next/static`) を Firebase Hosting へデプロイ。

### デプロイ (手動)
```
firebase deploy --only hosting
```

### GitHub Actions 自動デプロイ
`main` ブランチ push で `.github/workflows/firebase-hosting-merge.yml` が実行。PR ではプレビュー。

### セキュリティ / パフォーマンス
- CSP / セキュリティヘッダ: `firebase.json` に定義
- 長期キャッシュ: JS/CSS `max-age=31536000, immutable`
- HTML 短期キャッシュ: 60 秒
- Permissions-Policy で不要 API を無効化

### 今後の改善候補
- CSP の `style-src 'unsafe-inline'` 排除 (Tailwind JIT の style ハッシュ化検討)
- 画像最適化 (外部最適化サービス or build-time 最適化)
- Lighthouse 自動計測ワークフロー追加

### ライセンス
内部利用・クローズド。
