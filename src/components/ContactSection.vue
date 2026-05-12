<script setup lang="ts">
import { useReveal } from '../composables/useReveal'

const { el, visible } = useReveal()

const channels = [
	{ label: 'Email', value: 'yuu9916@gmail.com', href: 'mailto:yuu9916@gmail.com' },
	{ label: 'GitHub', value: 'github.com/yunimm', href: 'https://github.com/yunimm' },
	{ label: 'LinkedIn', value: 'linkedin.com/in/...', href: '#' },
]
</script>

<template>
	<section
		id="contact"
		ref="el"
		class="relative py-24 md:py-32 transition-all duration-1000"
		:class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
	>
		<div class="container-narrow">
			<div class="glass-strong rounded-3xl p-8 md:p-16 relative overflow-hidden">
				<div
					class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl pointer-events-none animate-float"
				></div>
				<div
					class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none animate-float"
					style="animation-delay: -4s"
				></div>

				<div class="relative">
					<div class="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
						/ 04 — Contact
					</div>
					<h2 class="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
						Let's build something <span class="gradient-text">together.</span>
					</h2>
					<p class="mt-4 max-w-xl text-white/60">
						Open to freelance, contract, and full-time opportunities.
					</p>

					<div class="mt-10 grid sm:grid-cols-3 gap-4">
						<a
							v-for="c in channels"
							:key="c.label"
							:href="c.href"
							class="group relative glass rounded-2xl p-5 overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-0.5"
						>
							<span
								class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
							></span>
							<div class="relative">
								<div class="text-xs font-mono text-white/40 mb-1">{{ c.label }}</div>
								<div class="text-sm text-white group-hover:gradient-text break-all transition-all">
									{{ c.value }}
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
