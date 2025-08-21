// Firebase 初期化用モジュール
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// 環境変数 (next.config.js の output: export なので public 環境変数は NEXT_PUBLIC_ プレフィックス必須)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// 不足チェック（ビルド時に console.warn で通知）
Object.entries(firebaseConfig).forEach(([k,v])=>{ if(!v){ console.warn(`[firebase] Missing env: ${k}`);} });

const app = initializeApp(firebaseConfig as any);

// Analytics はブラウザ環境のみで有効化
let analytics: import("firebase/analytics").Analytics | undefined;
if (typeof window !== "undefined") {
  // SSR / 静的生成時を避け、サポート確認
  isSupported().then(s => { if(s) { analytics = getAnalytics(app); } }).catch(()=>{});
}

export { app, analytics };
