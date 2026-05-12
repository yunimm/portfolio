<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const { el, visible } = useReveal()

interface SkillGroup {
	title: string
	desc: string
	iconPath: string
	gradient: string
	skills: string[]
}

const groups: SkillGroup[] = [
	{
		title: 'Frontend',
		desc: 'Core daily stack',
		iconPath:
			'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
		gradient: 'from-cyan-400/40 via-blue-500/40 to-violet-500/40',
		skills: ['Vue 3', 'TypeScript', 'JavaScript', 'React', 'HTML5', 'CSS3'],
	},
	{
		title: 'Styling',
		desc: 'Layout & design implementation',
		iconPath:
			'M3 12c0-1 .4-2 1-2.5L12 2l8 7.5c.6.5 1 1.5 1 2.5 0 2-2 4-9 4s-9-2-9-4z M3 12v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5',
		gradient: 'from-fuchsia-400/40 via-pink-500/40 to-rose-400/40',
		skills: ['Tailwind CSS', 'LESS / SCSS', 'CSS Grid / Flex', 'Figma'],
	},
	{
		title: 'State & Build',
		desc: 'Architecture & toolchain',
		iconPath:
			'M12 2l9 5v10l-9 5-9-5V7z M12 12l9-5 M12 12v10 M12 12L3 7',
		gradient: 'from-violet-400/40 via-purple-500/40 to-fuchsia-500/40',
		skills: ['Pinia', 'Vuex', 'Vite', 'Webpack', 'ESLint', 'Prettier'],
	},
	{
		title: 'Testing & QA',
		desc: 'E2E & unit testing',
		iconPath:
			'M9 12l2 2 4-4 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
		gradient: 'from-emerald-400/40 via-teal-500/40 to-cyan-500/40',
		skills: ['Playwright', 'Vitest', 'Vue Test Utils', 'Jest'],
	},
	{
		title: 'Backend & API',
		desc: 'Integration & services',
		iconPath:
			'M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z M8 9h.01 M8 13h.01 M8 17h.01 M12 9h4 M12 13h4 M12 17h4',
		gradient: 'from-amber-400/40 via-orange-500/40 to-rose-500/40',
		skills: ['Node.js', 'REST', 'Axios', 'WebSocket'],
	},
	{
		title: 'Workflow',
		desc: 'Collaboration & deployment',
		iconPath:
			'M9 19c-5 1.5-5-2.5-7-3 m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
		gradient: 'from-blue-400/40 via-indigo-500/40 to-violet-500/40',
		skills: ['Git', 'GitHub', 'CI/CD', 'Sentry', 'PostHog'],
	},
]
</script>

<template>
	<section
		id="skills"
		ref="el"
		class="relative py-24 md:py-32 transition-all duration-1000"
		:class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
	>
		<div class="container-narrow">
			<div class="mb-16 md:mb-20 max-w-2xl">
				<div class="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
					/ 03 — Skills
				</div>
				<h2 class="text-3xl md:text-5xl font-semibold tracking-tight">
					Tools I build with.
				</h2>
				<p class="mt-4 text-white/60">
					Technologies I've worked with over the past 4 years — from frontend
					frameworks to end-to-end testing.
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
				<article
					v-for="(g, i) in groups"
					:key="g.title"
					class="group relative glass rounded-3xl p-6 overflow-hidden transition-all duration-500 hover:bg-white/[0.09] hover:-translate-y-0.5"
					:style="{ transitionDelay: `${i * 60}ms` }"
				>
					<div
						class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						:class="g.gradient"
					></div>

					<div class="relative">
						<div class="flex items-start justify-between mb-5">
							<div
								class="relative w-11 h-11 rounded-xl glass flex items-center justify-center overflow-hidden"
							>
								<div
									class="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-100 transition-opacity"
									:class="g.gradient"
								></div>
								<svg
									class="relative w-5 h-5 text-white/90"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path :d="g.iconPath" />
								</svg>
							</div>

							<span
								class="text-[10px] font-mono text-white/30 tabular-nums"
							>
								0{{ i + 1 }}
							</span>
						</div>

						<h3 class="text-lg font-semibold tracking-tight">{{ g.title }}</h3>
						<p class="mt-1 text-xs text-white/40">{{ g.desc }}</p>

						<div class="mt-5 flex flex-wrap gap-1.5">
							<span
								v-for="s in g.skills"
								:key="s"
								class="px-2.5 py-1 rounded-full text-[11px] font-mono text-white/70 glass transition-all hover:bg-white/15 hover:text-white"
							>
								{{ s }}
							</span>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
