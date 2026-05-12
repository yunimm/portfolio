import type { Project } from '../types/project'

export const projects: Project[] = [
	{
		id: 'shipment-monitor',
		tag: 'Logistics · Buyandship',
		title: 'Shipment Monitor',
		desc: 'Real-time tracking of cross-border shipments from overseas warehouse to last-mile delivery.',
		longDesc:
			'Aggregates data across regional warehouses into a unified live dashboard. Covers the full timeline from overseas receiving, outbound, local warehouse arrival, consolidation, and delivery — with anomaly alerts and SLA monitoring.',
		iconPath: 'M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4m0 0l9-4m-9 4v10',
		gradient: 'from-cyan-400/30 via-blue-500/30 to-violet-500/30',
		accent: 'cyan',
		metrics: ['12k shipments/day', '99.4% uptime', '< 200ms p95'],
		stack: ['Vue 3', 'TypeScript', 'Pinia', 'ECharts'],
		media: [],
		previewUrl: 'shipment.monitor',
	},
	{
		id: 'system-health',
		tag: 'Infrastructure',
		title: 'System Health',
		desc: 'Real-time dashboard for CPU, memory, and request volume across services — with anomaly alerts.',
		longDesc:
			'Health monitor for multi-service backends. Integrates Prometheus metrics and visualizes CPU, memory, QPS, and error rate. Configurable alert rules with multi-environment switching.',
		iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
		gradient: 'from-violet-400/30 via-fuchsia-500/30 to-pink-500/30',
		accent: 'violet',
		metrics: ['8 services', '60s refresh', '5 alert rules'],
		stack: ['Vue 3', 'D3.js', 'WebSocket', 'Tailwind'],
		media: [],
		previewUrl: 'health.dashboard',
	},
	{
		id: 'kpi-dashboard',
		tag: 'Commerce',
		title: 'KPI Dashboard',
		desc: 'Business overview — revenue, conversion rate, and funnel analytics with multi-region toggles.',
		longDesc:
			'Decision-making dashboard for operations teams. Covers revenue trends, order conversion funnels, product heatmaps, regional comparisons, and YoY analysis — with custom date ranges and multi-dimensional drilldown.',
		iconPath: 'M3 3v18h18M7 14l4-4 4 4 5-5',
		gradient: 'from-emerald-400/30 via-teal-500/30 to-cyan-500/30',
		accent: 'emerald',
		metrics: ['4 regions', '15 KPIs', 'YoY compare'],
		stack: ['Vue 3', 'ECharts', 'TypeScript', 'Pinia'],
		media: [],
		previewUrl: 'kpi.dashboard',
	},
]

export const findProject = (id: string): Project | undefined =>
	projects.find(p => p.id === id)
