<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const { el, visible } = useReveal()

const experiences = [
	{
		period: '2023 — Present',
		company: 'Buyandship',
		role: 'Frontend Engineer',
		summary:
			'Full-stack frontend development on a cross-border e-commerce member portal. Responsible for shipping, order consolidation, and payment flow architecture and business logic.',
		stack: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'Playwright'],
		highlights: [
			'Built BuyForYou proxy ordering flow used by 100k+ users',
			'Authored E2E test infrastructure with Playwright',
			'Maintained business logic KB across 10+ modules',
		],
	},
	{
		period: '2020 — 2023',
		company: 'Previous Company',
		role: 'Software Engineer',
		summary: 'Previous role description — to be filled in.',
		stack: ['React', 'Node.js', 'PostgreSQL'],
		highlights: ['Achievement #1', 'Achievement #2', 'Achievement #3'],
	},
]
</script>

<template>
	<section
		id="experience"
		ref="el"
		class="relative py-24 md:py-32 transition-all duration-1000"
		:class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
	>
		<div class="container-narrow">
			<div class="mb-16 md:mb-20 max-w-2xl">
				<div class="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
					/ 01 — Experience
				</div>
				<h2 class="text-3xl md:text-5xl font-semibold tracking-tight">
					Where I've been building.
				</h2>
			</div>

			<div class="relative space-y-6">
				<!-- timeline rail -->
				<div
					class="absolute left-0 md:left-[68px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"
				></div>

				<article
					v-for="(e, i) in experiences"
					:key="i"
					class="group relative glass rounded-3xl p-6 md:p-10 overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/10"
					:style="{ transitionDelay: `${i * 120}ms` }"
				>
					<!-- shine sweep -->
					<div
						class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
						style="
							background: linear-gradient(
								115deg,
								transparent 30%,
								rgba(255, 255, 255, 0.08) 50%,
								transparent 70%
							);
							background-size: 200% 100%;
							animation: shine 1.6s ease-out;
						"
					></div>

					<div class="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10">
						<div class="md:w-48 shrink-0">
							<div class="text-xs font-mono text-white/40">{{ e.period }}</div>
							<div class="mt-2 text-lg font-semibold">{{ e.company }}</div>
							<div class="text-sm text-white/60">{{ e.role }}</div>
						</div>

						<div class="flex-1">
							<p class="text-white/70 leading-relaxed">{{ e.summary }}</p>

							<ul class="mt-5 space-y-2">
								<li
									v-for="h in e.highlights"
									:key="h"
									class="flex items-start gap-3 text-sm text-white/60"
								>
									<span
										class="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 shrink-0"
									></span>
									{{ h }}
								</li>
							</ul>

							<div class="mt-6 flex flex-wrap gap-2">
								<span
									v-for="t in e.stack"
									:key="t"
									class="px-3 py-1 rounded-full text-xs font-mono text-white/70 glass transition-all hover:bg-white/15 hover:text-white"
								>
									{{ t }}
								</span>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes shine {
	0% {
		background-position: -100% 0;
	}
	100% {
		background-position: 200% 0;
	}
}
</style>
