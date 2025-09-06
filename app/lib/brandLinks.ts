// ブランド公式URLとアフィリエイトリンク（現時点ではahamoのみ）
// ahamoのアフィリエイトリンクは環境変数 NEXT_PUBLIC_AHAMO_AFFILIATE_URL で上書き可能
// 例: .env.local に NEXT_PUBLIC_AHAMO_AFFILIATE_URL=https://your-affiliate-link を設定

const AHAMO_AFFILIATE = process.env.NEXT_PUBLIC_AHAMO_AFFILIATE_URL || 'https://ahamo.com/';

interface BrandLinkInfo {
  official: string;
  affiliate?: string; // 指定がある場合のみアフィリエイト扱い
  affiliatePixel?: {
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  aliases?: string[]; // 表記ゆれ対応
}

export const BRAND_LINKS: Record<string, BrandLinkInfo> = {
  ahamo: {
    official: 'https://ahamo.com/',
    affiliate: AHAMO_AFFILIATE !== 'https://ahamo.com/' ? AHAMO_AFFILIATE : 'https://px.a8.net/svt/ejp?a8mat=459MVI+BB99U+4TIO+5YJRM',
    affiliatePixel: {
      src: 'https://www19.a8.net/0.gif?a8mat=459MVI+BB99U+4TIO+5YJRM',
      width: 1,
      height: 1,
      alt: ''
    },
    aliases: []
  },
  linemo: {
    official: 'https://www.linemo.jp/',
    aliases: ['linemo', 'LINEMO']
  },
  uqmobile: {
    official: 'https://www.uqwimax.jp/mobile/',
    aliases: ['uq mobile', 'uqモバイル', 'UQ mobile', 'UQモバイル']
  },
  ymobile: {
    official: 'https://www.ymobile.jp/',
    aliases: ['y!mobile', 'ワイモバイル', 'Y!mobile']
  },
  povo: {
    official: 'https://povo.jp/',
    aliases: ['povo2.0', 'povo 2.0']
  },
  iijmio: {
    official: 'https://www.iijmio.jp/',
    aliases: ['IIJmio']
  }
};

function normalizeBrandName(name: string){
  return name.toLowerCase().replace(/[^a-z0-9ぁ-んァ-ヶ一-龠]/g,'');
}

export function getExternalLink(brandRaw: string): { url: string; isAffiliate: boolean; pixel?: BrandLinkInfo['affiliatePixel'] } {
  const normalized = normalizeBrandName(brandRaw);
  for (const key of Object.keys(BRAND_LINKS)) {
    const info = BRAND_LINKS[key];
    if (key === normalized) {
    return { url: info.affiliate || info.official, isAffiliate: Boolean(info.affiliate), pixel: info.affiliatePixel };
    }
    if (info.aliases) {
      for (const alias of info.aliases) {
        if (normalizeBrandName(alias) === normalized) {
      return { url: info.affiliate || info.official, isAffiliate: Boolean(info.affiliate), pixel: info.affiliatePixel };
        }
      }
    }
  }
  // 未登録ブランドはそのままブランド名をスラグ化した内部ページへフォールバック
  return { url: `/${normalized}`, isAffiliate: false };
}
