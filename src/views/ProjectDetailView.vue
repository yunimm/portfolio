<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import BrowserChrome from '../components/BrowserChrome.vue'
import { findProject } from '../data/projects'

const props = defineProps<{ slug: string }>()

const router = useRouter()
const project = computed(() => findProject(props.slug))

watch(
	project,
	p => {
		if (!p) router.replace('/')
	},
	{ immediate: true },
)

const mediaIndex = ref(0)

watch(
	() => props.slug,
	() => {
		mediaIndex.value = 0
	},
)

const currentMedia = computed(() => {
	if (!project.value) return null
	return project.value.media[mediaIndex.value] ?? null
})

const next = () => {
	if (!project.value) return
	mediaIndex.value = (mediaIndex.value + 1) % project.value.media.length
}
const prev = () => {
	if (!project.value) return
	mediaIndex.value =
		(mediaIndex.value - 1 + project.value.media.length) %
		project.value.media.length
}

const goBack = () => {
	if (window.history.state?.back) router.back()
	else router.push({ path: '/', hash: '#projects' })
}

const onKey = (e: KeyboardEvent) => {
	if (e.key === 'Escape') goBack()
	if (e.key === 'ArrowRight') next()
	if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
	<main v-if="project" class="relative pt-24 pb-24 md:pt-32 md:pb-32">
		<div class="container-narrow">
			<button
				class="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8 px-4 py-2 -ml-4 rounded-full hover:bg-white/5"
				@click="goBack"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						d="M15 18l-6-6 6-6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				Back to projects
			</button>

			<div
				class="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3"
			>
				{{ project.tag }}
			</div>
			<div class="flex items-start justify-between gap-4 mb-8">
				<h1 class="text-3xl md:text-5xl font-semibold tracking-tight">
					{{ project.title }}
				</h1>
				<a
					v-if="project.demoUrl"
					:href="project.demoUrl"
					target="_blank"
					rel="noopener"
					class="hidden md:inline-flex shrink-0 items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sm font-medium"
					style="color: #050511"
				>
					Live demo
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<path
							d="M7 17L17 7M17 7H8M17 7v9"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			</div>

			<BrowserChrome :url="project.previewUrl">
				<div class="relative aspect-[16/10] bg-black/40">
					<template v-if="currentMedia">
						<img
							v-if="currentMedia.type === 'image'"
							:src="currentMedia.src"
							:alt="currentMedia.alt || project.title"
							class="absolute inset-0 w-full h-full object-contain"
						/>
						<video
							v-else
							:src="currentMedia.src"
							class="absolute inset-0 w-full h-full object-contain"
							autoplay
							loop
							muted
							playsinline
						></video>
					</template>
					<div
						v-else
						class="absolute inset-0 flex items-center justify-center"
					>
						<div class="text-center">
							<div
								class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br opacity-60 mb-3"
								:class="project.gradient"
							></div>
							<div class="text-xs font-mono text-white/40">
								Screenshot pending
							</div>
						</div>
					</div>

					<div
						v-if="project.media.length > 1"
						class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none"
					>
						<button
							class="pointer-events-auto w-11 h-11 rounded-full glass-strong shadow-lg shadow-black/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
							style="background: rgba(10, 10, 25, 0.55)"
							aria-label="Previous"
							@click.stop="prev"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.25"
							>
								<path
									d="M15 18l-6-6 6-6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
						<button
							class="pointer-events-auto w-11 h-11 rounded-full glass-strong shadow-lg shadow-black/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
							style="background: rgba(10, 10, 25, 0.55)"
							aria-label="Next"
							@click.stop="next"
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.25"
							>
								<path
									d="M9 18l6-6-6-6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			</BrowserChrome>

			<div
				v-if="project.media.length > 1"
				class="flex justify-center gap-1.5 mt-4"
			>
				<button
					v-for="(_, i) in project.media"
					:key="i"
					class="h-1 rounded-full transition-all"
					:class="
						mediaIndex === i
							? 'w-8 bg-white'
							: 'w-1.5 bg-white/30 hover:bg-white/50'
					"
					:aria-label="`Go to image ${i + 1} of ${project.media.length}`"
					:aria-current="mediaIndex === i"
					@click="mediaIndex = i"
				></button>
			</div>

			<a
				v-if="project.demoUrl"
				:href="project.demoUrl"
				target="_blank"
				rel="noopener"
				class="md:hidden flex items-center justify-center gap-1.5 w-full mt-8 px-4 py-3 rounded-full bg-white text-sm font-medium"
				style="color: #050511"
			>
				Live demo
				<svg
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path
						d="M7 17L17 7M17 7H8M17 7v9"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</a>

			<div class="mt-10 flex flex-wrap gap-2 max-w-3xl">
				<span
					v-for="t in project.stack"
					:key="t"
					class="px-3 py-1 rounded-full text-xs font-mono text-white/70 glass"
				>
					{{ t }}
				</span>
			</div>

			<div
				v-if="project.metrics.length"
				class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-3xl"
			>
				<div
					v-for="m in project.metrics"
					:key="m"
					class="glass rounded-xl px-3 py-2.5 text-xs font-mono text-white/60"
				>
					<span class="text-white/40 mr-1.5">›</span>{{ m }}
				</div>
			</div>

			<div class="mt-10 max-w-3xl">
				<div
					class="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3"
				>
					Overview
				</div>
				<p class="text-white/70 leading-relaxed text-lg">
					{{ project.longDesc || project.desc }}
				</p>
			</div>

			<div
				v-if="project.highlights.length"
				class="mt-10 max-w-3xl"
			>
				<div
					class="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3"
				>
					Technical highlights
				</div>
				<ul class="space-y-3">
					<li
						v-for="h in project.highlights"
						:key="h"
						class="flex items-start gap-3 text-white/70 leading-relaxed"
					>
						<span
							class="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 shrink-0"
						></span>
						<span>{{ h }}</span>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>
