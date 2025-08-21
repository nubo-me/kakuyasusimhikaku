import { Suspense } from 'react';
import CompareContent from './CompareContent';

function ComparePageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">プラン比較を読み込み中...</p>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<ComparePageFallback />}>
      <CompareContent />
    </Suspense>
  );
}