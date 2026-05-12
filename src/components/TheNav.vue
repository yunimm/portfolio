<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const scrollY = ref(0)

const onScroll = () => {
	scrollY.value = window.scrollY
}

onMounted(() => {
	window.addEventListener('scroll', onScroll, { passive: true })
	onScroll()
})
onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
})

// 0 (top) → 1 (past 120px), drives bg/blur/line opacity in lock-step
const t = computed(() => Math.min(1, Math.max(0, scrollY.value / 120)))

const links = [
	{ to: '/#experience', label: 'Experience' },
	{ to: '/#projects', label: 'Projects' },
	{ to: '/#contact', label: 'Contact' },
]
</script>

<template>
	<header
		class="fixed top-0 inset-x-0 z-50"
		:style="{
			background: `rgba(10, 10, 25, ${0.55 * t})`,
			backdropFilter: `blur(${24 * t}px) saturate(180%)`,
			WebkitBackdropFilter: `blur(${24 * t}px) saturate(180%)`,
		}"
	>
		<div class="container-narrow flex items-center justify-between h-16">
			<RouterLink to="/" class="flex items-center gap-2 group">
				<span
					class="inline-block p-[2px] rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-400 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform"
				>
					<img
						src="/avatar.svg"
						alt="Chin-Yun Liao"
						class="block w-8 h-8 rounded-full"
						style="background: #0a0a19"
					/>
				</span>
				<span class="font-semibold tracking-tight">Yu.dev</span>
			</RouterLink>

			<div class="flex items-center gap-1.5 md:gap-2">
				<nav class="hidden md:flex items-center gap-1 mr-1">
					<RouterLink
						v-for="l in links"
						:key="l.to"
						:to="l.to"
						class="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
					>
						{{ l.label }}
					</RouterLink>
				</nav>

				<a
					href="https://github.com/yunimm"
					target="_blank"
					rel="noopener"
					aria-label="GitHub"
					class="w-9 h-9 rounded-full glass hover:bg-white/15 transition-colors flex items-center justify-center text-white/70 hover:text-white"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.79.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"
						/>
					</svg>
				</a>

				<a
					href="https://www.linkedin.com/in/chin-yun-liao-a96396176/"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn"
					class="w-9 h-9 rounded-full glass hover:bg-white/15 transition-colors flex items-center justify-center text-white/70 hover:text-white"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
						/>
					</svg>
				</a>

				<RouterLink
					to="/#contact"
					class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-strong hover:bg-white/15 transition-colors ml-1"
				>
					<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow"></span>
					Available
				</RouterLink>
			</div>
		</div>

		<div
			class="absolute left-[10%] right-[10%] bottom-0 h-px pointer-events-none"
			:style="{
				background:
					'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
				opacity: t,
			}"
		></div>
	</header>
</template>
