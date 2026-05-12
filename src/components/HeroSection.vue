<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mounted = ref(false)

onMounted(() => {
	requestAnimationFrame(() => {
		mounted.value = true
	})
})
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
				<RouterLink
					to="/#projects"
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
				</RouterLink>
				<RouterLink
					to="/#contact"
					class="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors font-medium overflow-hidden"
				>
					<span class="relative z-10">Get in touch</span>
					<span
						class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
					></span>
				</RouterLink>
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
