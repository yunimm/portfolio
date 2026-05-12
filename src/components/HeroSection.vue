<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCountUp } from '../composables/useCountUp'

const mounted = ref(false)

const stat1 = useCountUp(4)
const stat2 = useCountUp(20)
const stat3 = useCountUp(1000000, 2200)

onMounted(() => {
	requestAnimationFrame(() => {
		mounted.value = true
	})
	setTimeout(() => {
		stat1.start()
		stat2.start()
		stat3.start()
	}, 700)
})

const formatM = (n: number) => {
	if (n >= 1000000) return (n / 1000000).toFixed(n === 1000000 ? 0 : 1) + 'M'
	if (n >= 1000) return (n / 1000).toFixed(0) + 'k'
	return n.toString()
}
</script>

<template>
	<section id="top" class="relative pt-32 md:pt-44 pb-24 md:pb-32">
		<div class="container-narrow">
			<div
				class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-white/70 mb-8 transition-all duration-700"
				:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'"
			>
				<span class="relative flex w-1.5 h-1.5">
					<span class="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
					<span class="relative rounded-full w-1.5 h-1.5 bg-emerald-400"></span>
				</span>
				v1.0 · Portfolio · 2026
			</div>

			<h1
				class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-balance"
			>
				<span
					class="inline-block transition-all duration-700 delay-100"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
				>Frontend engineer </span>
				<span
					class="inline-block transition-all duration-700 delay-300"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
				>building </span>
				<span
					class="inline-block gradient-text transition-all duration-700 delay-500"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
				>web products</span><br />
				<span
					class="inline-block transition-all duration-700 delay-[700ms]"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
				>that ship and scale.</span>
			</h1>

			<p
				class="mt-8 max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed text-balance transition-all duration-700 delay-[900ms]"
				:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
			>
				Vue · TypeScript · 4 years of experience. Currently building
				member portals for a cross-border e-commerce platform serving
				over 1M users.
			</p>

			<div
				class="mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-[1100ms]"
				:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
			>
				<a
					href="#projects"
					class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-medium overflow-hidden transition-transform hover:scale-[1.02]"
					style="color: #050511"
				>
					<span class="relative z-10">View Projects</span>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						class="relative z-10 group-hover:translate-x-1 transition-transform"
					>
						<path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span
						class="absolute inset-0 bg-gradient-to-r from-cyan-200 via-violet-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity"
					></span>
				</a>
				<a
					href="#contact"
					class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors font-medium overflow-hidden"
				>
					<span class="relative z-10">Get in touch</span>
					<span
						class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
					></span>
				</a>
			</div>

			<div class="mt-20 grid grid-cols-3 gap-4 md:gap-6 max-w-2xl">
				<div
					class="glass rounded-2xl p-4 md:p-6 transition-all duration-700 delay-[1300ms]"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
				>
					<div class="text-2xl md:text-4xl font-semibold gradient-text font-mono">
						{{ stat1.value.value }}+
					</div>
					<div class="mt-1 text-xs md:text-sm text-white/50">Years Experience</div>
				</div>
				<div
					class="glass rounded-2xl p-4 md:p-6 transition-all duration-700 delay-[1400ms]"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
				>
					<div class="text-2xl md:text-4xl font-semibold gradient-text font-mono">
						{{ stat2.value.value }}+
					</div>
					<div class="mt-1 text-xs md:text-sm text-white/50">Features Shipped</div>
				</div>
				<div
					class="glass rounded-2xl p-4 md:p-6 transition-all duration-700 delay-[1500ms]"
					:class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
				>
					<div class="text-2xl md:text-4xl font-semibold gradient-text font-mono">
						{{ formatM(stat3.value.value) }}+
					</div>
					<div class="mt-1 text-xs md:text-sm text-white/50">Users Reached</div>
				</div>
			</div>
		</div>

		<div
			class="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float pointer-events-none"
		></div>
		<div
			class="absolute left-10 bottom-10 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl animate-float pointer-events-none"
			style="animation-delay: -3s"
		></div>

	</section>
</template>
