import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kakuyasusimhikaku-6c501.web.app';

// 既存の public/sitemap.xml と同等の内容を Next.js の自動生成に合わせて提供
export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date('2025-08-21');
	return [
		{ url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
		{ url: `${SITE_URL}/compare`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
		{ url: `${SITE_URL}/diagnosis`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
		{ url: `${SITE_URL}/guide/mnp`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${SITE_URL}/guide/esim`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
		{ url: `${SITE_URL}/brands/linemo`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
		{ url: `${SITE_URL}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
		{ url: `${SITE_URL}/policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
	];
}

