'use client';

import React from 'react';

type AdDisclosureProps = {
  variant?: 'light' | 'dark' | 'plain';
  className?: string;
  compact?: boolean;
};

/**
 * 広告・PR表記コンポーネント
 * - 主要CTA周辺での透明性確保
 * - スクリーンリーダー向け補足を sr-only で追加
 */
export const AdDisclosure: React.FC<AdDisclosureProps> = ({ variant = 'light', className = '', compact }) => {
  const base = 'inline-flex items-center rounded-full text-xs font-medium tracking-wide';
  const space = compact ? 'px-3 py-1' : 'px-4 py-1.5';
  const styles: Record<string, string> = {
    light: 'bg-white/80 text-gray-700 border border-gray-300 backdrop-blur-sm shadow-sm',
    dark: 'bg-black/40 text-white border border-white/20 backdrop-blur-sm',
    plain: 'bg-gray-100 text-gray-700 border border-gray-300'
  };
  return (
    <span className={`${base} ${space} ${styles[variant]} ${className}`} aria-label="広告・PRを含む表示" role="note">
      <i className="ri-advertisement-line text-base mr-1" aria-hidden="true"></i>
      広告・PRを含みます
      <span className="sr-only"> 本サイトの一部リンク経由で成果が発生した場合、運営に報酬が入ることがあります。掲載内容は中立性維持に努めています。</span>
    </span>
  );
};

export default AdDisclosure;
