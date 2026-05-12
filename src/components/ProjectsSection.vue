<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useReveal } from '../composables/useReveal'
import { projects } from '../data/projects'

const { el, visible } = useReveal()

const cardRefs = ref<(HTMLElement | null)[]>([])

const setCardRef = (i: number) => (instance: unknown) => {
	if (!instance) {
		cardRefs.value[i] = null
		return
	}
	const node =
		(instance as { $el?: HTMLElement }).$el ?? (instance as HTMLElement)
	cardRefs.value[i] = node instanceof HTMLElement ? node : null
}

const attachTilt = (card: HTMLElement) => {
	const max = 8
	const move = (e: MouseEvent) => {
		const rect = card.getBoundingClientRect()
		const x = (e.clientX - rect.left) / rect.width
		const y = (e.clientY - rect.top) / rect.height
		const rx = (y - 0.5) * -max * 2
		const ry = (x - 0.5) * max * 2
		card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
		card.style.setProperty('--mx', `${x * 100}%`)
		card.style.setProperty('--my', `${y * 100}%`)
	}
	const leave = () => {
		card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
	}
	card.style.transition =
		'transform 240ms cubic-bezier(0.2, 0.9, 0.3, 1), background-color 400ms ease'
	card.style.willChange = 'transform'
	card.addEventListener('mousemove', move)
	card.addEventListener('mouseleave', leave)
}

onMounted(() => {
	watch(
		cardRefs,
		els => {
			els.forEach(el => {
				if (el && !el.dataset.tiltAttached) {
					el.dataset.tiltAttached = '1'
					attachTilt(el)
				}
			})
		},
		{ immediate: true, flush: 'post' },
	)
})
</script>

<template>
	<section
		id="projects"
		ref="el"
		class="relative py-24 md:py-32 transition-all duration-1000"
		:class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
	>
		<div class="container-narrow">
			<div class="mb-16 md:mb-20 max-w-2xl">
				<div class="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
					/ 02 — Projects
				</div>
				<h2 class="text-3xl md:text-5xl font-semibold tracking-tight">
					Projects.
				</h2>
				<p class="mt-4 text-white/60">
					Tap any card for details.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-5 md:gap-6">
				<RouterLink
					v-for="(p, i) in projects"
					:key="p.id"
					:ref="setCardRef(i)"
					:to="`/projects/${p.id}`"
					class="tilt-card group relative glass rounded-3xl p-6 overflow-hidden text-left hover:bg-white/[0.09] block"
				>
					<div
						class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						:class="p.gradient"
					></div>

					<div
						class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
						style="
							background: radial-gradient(
								400px circle at var(--mx, 50%) var(--my, 50%),
								rgba(255, 255, 255, 0.08),
								transparent 40%
							);
						"
					></div>

					<div class="relative">
						<div class="flex items-center justify-between mb-8">
							<span
								class="text-[10px] font-mono uppercase tracking-widest text-white/50 px-2 py-1 rounded-full glass"
							>
								{{ p.tag }}
							</span>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								class="text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
							>
								<path
									d="M7 17L17 7M17 7H8M17 7v9"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>

						<!-- icon hero area -->
						<div
							class="relative h-44 mb-6 rounded-2xl glass overflow-hidden flex items-center justify-center"
						>
							<!-- scanlines -->
							<div
								class="absolute inset-0 pointer-events-none opacity-60"
								style="
									background-image: repeating-linear-gradient(
										0deg,
										transparent 0,
										transparent 2px,
										rgba(255, 255, 255, 0.025) 2px,
										rgba(255, 255, 255, 0.025) 3px
									);
								"
							></div>

							<!-- gradient orb behind icon -->
							<div
								class="absolute w-32 h-32 rounded-full bg-gradient-to-br blur-2xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
								:class="p.gradient"
							></div>

							<!-- icon -->
							<svg
								class="relative w-14 h-14 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path :d="p.iconPath" />
							</svg>

							<!-- corner ticks -->
							<span
								class="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/30"
							></span>
							<span
								class="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/30"
							></span>
							<span
								class="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/30"
							></span>
							<span
								class="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/30"
							></span>

							<!-- hover label -->
							<div
								class="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/0 group-hover:text-white/80 glass opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
							>
								Click to view
							</div>
						</div>

						<h3 class="text-xl font-semibold tracking-tight">{{ p.title }}</h3>
						<p class="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">
							{{ p.desc }}
						</p>

						<div class="mt-5 flex flex-wrap gap-1.5">
							<span
								v-for="t in p.stack.slice(0, 3)"
								:key="t"
								class="text-[10px] font-mono text-white/40"
							>
								{{ t }}
								<span class="text-white/20 ml-1.5">·</span>
							</span>
						</div>
					</div>
				</RouterLink>
			</div>
		</div>
	</section>
</template>

<style scoped>
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
</style>
