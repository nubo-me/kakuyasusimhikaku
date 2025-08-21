#!/usr/bin/env node
/*
  Next.js (output: export) 用ビルド統合スクリプト
  1. next build 実行
  2. .next/server/app 内 HTML を dist へコピー
  3. _next 静的アセット(.next/static) を dist/_next/static へコピー
  4. index.html が無ければエラー
*/
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distDir = path.join(root, 'dist');

function run(cmd){
  console.log('[run]', cmd);
  execSync(cmd, { stdio: 'inherit' });
}

function copyRecursive(src, dest){
  if(!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if(stat.isDirectory()){
    fs.mkdirSync(dest, { recursive: true });
    for(const entry of fs.readdirSync(src)){
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

(function main(){
  run('next build');

  if(fs.existsSync(distDir)){
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir);

  const appHtmlRoot = path.join(root, '.next','server','app');
  if(!fs.existsSync(appHtmlRoot)){
    console.error('app HTML root not found:', appHtmlRoot);
    process.exit(1);
  }

  // HTML ファイルコピー
  function copyHtml(dir, rel=''){
    for(const entry of fs.readdirSync(dir)){
      const abs = path.join(dir, entry);
      const stat = fs.statSync(abs);
      const relPath = path.join(rel, entry);
      if(stat.isDirectory()){
        copyHtml(abs, relPath);
      } else if(entry.endsWith('.html')){
        const out = path.join(distDir, relPath === 'index.html' ? 'index.html' : relPath);
        copyRecursive(abs, out);
      }
    }
  }
  copyHtml(appHtmlRoot);

  // 404 ページ生成 (_not-found.html を 404.html として複製)
  const notFoundSrc = path.join(distDir, '_not-found.html');
  const notFoundDest = path.join(distDir, '404.html');
  if (fs.existsSync(notFoundSrc)) {
    fs.copyFileSync(notFoundSrc, notFoundDest);
  }

  // 静的アセット
  const staticSrc = path.join(root, '.next','static');
  const staticDest = path.join(distDir, '_next','static');
  copyRecursive(staticSrc, staticDest);

  // 404 対応: index.html 存在保証
  if(!fs.existsSync(path.join(distDir,'index.html'))){
    console.error('index.html missing in dist');
    process.exit(1);
  }

  console.log('Build static bundle complete -> dist/');
})();
