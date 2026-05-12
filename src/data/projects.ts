import type { Project } from '../types/project'

export const projects: Project[] = [
	{
		id: 'buyandship-platform',
		tag: 'E-commerce · Buyandship',
		title: 'Cross-border Forwarding & Proxy-Purchase Platform',
		desc: 'Member portal, checkout, and proxy-purchase flows for a cross-border shipping & e-commerce platform.',
		longDesc:
			"Frontend for Buyandship's member portal, checkout, and proxy-purchase flows — covering overseas shipment forwarding, Mercari / Yahoo Auctions (JDirectItems) integration, and the auction bidding lifecycle. Worked across 5 codebases (Vue 3 / Nuxt / Astro) with focus on payment locking, state-machine correctness, and concurrency safety under high-traffic auction events.",
		iconPath: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
		gradient: 'from-cyan-400/30 via-blue-500/30 to-violet-500/30',
		accent: 'cyan',
		metrics: ['3.75× throughput', '80 → 300 orders/hr', '60+ → 4 states'],
		highlights: [
			'Built core auction & checkout features that scaled transaction throughput 3.75× (80 → 300 orders/hour) — restructured the frontend to handle concurrency safely',
			'Collapsed 60+ tangled UI branches into 4 named states via a state machine — eliminated entire classes of bid/payment edge-case bugs',
			'Worked across 5 codebases (Vue 3 / Nuxt / Astro) maintaining member portal, checkout, and proxy-purchase flows',
		],
		stack: ['Vue 3', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
		media: [
			{ type: 'image', src: '/projects/buyandship-1.webp', alt: 'Buyandship homepage with proxy purchase & auction entry points' },
			{ type: 'image', src: '/projects/buyandship-2.webp', alt: 'Mercari proxy purchase product browsing' },
			{ type: 'image', src: '/projects/buyandship-3.webp', alt: 'Proxy purchase order management' },
			{ type: 'image', src: '/projects/buyandship-4.webp', alt: 'Create proxy purchase order' },
		],
		demoUrl: 'https://www.buyandship.com.tw/',
		previewUrl: 'buyandship.com.tw',
	},
	{
		id: 'damai-ordering',
		tag: 'F&B SaaS · Damai',
		title: 'F&B Ordering & Reservation Platform',
		desc: 'Multi-tenant ordering & reservation SaaS serving drink shops, restaurants, and bubble tea stores.',
		longDesc:
			'Frontend for a multi-tenant F&B SaaS — food ordering (delivery, pickup, in-store) and table reservation flows serving drink shops, restaurants, and bubble tea stores. Led a generational rewrite from Vue 2 to Nuxt 3 on live production traffic with zero downtime.',
		iconPath: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
		gradient: 'from-violet-400/30 via-fuchsia-500/30 to-pink-500/30',
		accent: 'violet',
		metrics: ['FCP −50%', 'Bundle −30%', 'Lighthouse +30'],
		highlights: [
			'Built ordering flows (delivery / pickup / in-store) and table reservation system supporting multi-tenant merchants on a shared platform',
			'Cut FCP by 50%, JS bundle by 30%, and lifted Lighthouse +30 points via a Vue 2 → Nuxt 3 rewrite with dynamic imports and module splitting',
			'Migrated production traffic with zero downtime via a dual-domain parallel verification flow co-designed with QA — no missed orders, no rollback',
		],
		stack: ['Vue 2', 'Nuxt 3', 'TypeScript', 'Vuex', 'ElementUI'],
		media: [
			{ type: 'image', src: '/projects/damai-1.webp', alt: 'MaiFood drink ordering storefront' },
			{ type: 'image', src: '/projects/damai-2.webp', alt: 'Restaurant reservation flow' },
			{ type: 'image', src: '/projects/damai-3.webp', alt: 'Bubble tea ordering page' },
		],
		demoUrl: 'https://imenu.com.tw/mincha/mincha_ZhongshanNS/menu',
		previewUrl: 'imenu.com.tw/mincha',
	},
	{
		id: 'rongxing-wms',
		tag: 'B2B Warehouse · Rongxing',
		title: 'ROSATI WMS',
		desc: 'Frontend for a B2B warehouse management system — inbound, outbound, and scan-to-ship workflows.',
		longDesc:
			'Frontend for ROSATI, a B2B warehouse management system. Helped lead the rebuild into a decoupled frontend/backend architecture, then shipped the core inbound, outbound, and scan-to-ship workflows that power daily warehouse operations.',
		iconPath:
			'M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4m0 0l9-4m-9 4v10',
		gradient: 'from-emerald-400/30 via-teal-500/30 to-cyan-500/30',
		accent: 'emerald',
		metrics: [],
		highlights: [
			'Defined frontend module responsibility boundaries during the decoupled-architecture refactor, improving maintainability and onboarding speed',
			'Built barcode-driven scan-to-ship workflow that automates outbound operations and reduces operator error rate',
			'Shipped inbound/outbound modules covering items master, storage, picking, and shipping — powering daily warehouse operations',
		],
		stack: ['React', 'TypeScript', 'Tailwind CSS'],
		media: [
			{ type: 'image', src: '/projects/rongxing-1.webp', alt: 'ROSATI WMS items master data view' },
		],
		previewUrl: 'rosati / wms (internal)',
	},
]

export const findProject = (id: string): Project | undefined =>
	projects.find(p => p.id === id)
