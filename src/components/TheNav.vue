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
					class="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-400 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform"
				></span>
				<span class="font-semibold tracking-tight">Yu.dev</span>
			</RouterLink>

			<nav class="hidden md:flex items-center gap-1">
				<RouterLink
					v-for="l in links"
					:key="l.to"
					:to="l.to"
					class="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
				>
					{{ l.label }}
				</RouterLink>
			</nav>

			<RouterLink
				to="/#contact"
				class="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-strong hover:bg-white/15 transition-colors"
			>
				<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow"></span>
				Available
			</RouterLink>
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
