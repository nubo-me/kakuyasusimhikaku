'use client';

import { Suspense } from 'react';
import CompareContent from './CompareContent';

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
      <CompareContent />
    </Suspense>
  );
}