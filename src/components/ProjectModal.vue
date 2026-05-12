<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import BrowserChrome from './BrowserChrome.vue'
import type { Project } from '../types/project'

const props = defineProps<{
	project: Project | null
}>()

const emit = defineEmits<{
	(e: 'close'): void
}>()

const open = computed(() => !!props.project)
const mediaIndex = ref(0)

const currentMedia = computed(() => {
	if (!props.project) return null
	return props.project.media[mediaIndex.value] ?? null
})

const close = () => emit('close')

const next = () => {
	if (!props.project) return
	mediaIndex.value = (mediaIndex.value + 1) % props.project.media.length
}
const prev = () => {
	if (!props.project) return
	mediaIndex.value =
		(mediaIndex.value - 1 + props.project.media.length) %
		props.project.media.length
}

const onKey = (e: KeyboardEvent) => {
	if (!open.value) return
	if (e.key === 'Escape') close()
	if (e.key === 'ArrowRight') next()
	if (e.key === 'ArrowLeft') prev()
}

watch(open, isOpen => {
	if (isOpen) mediaIndex.value = 0
})

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
	<Transition
		enter-active-class="transition-opacity duration-300"
		leave-active-class="transition-opacity duration-200"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
	>
		<div
			v-if="open && project"
			class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
			@click.self="close"
		>
			<div
				class="absolute inset-0 backdrop-blur-2xl"
				style="background: rgba(5, 5, 17, 0.7)"
				@click="close"
			></div>

			<Transition
				appear
				enter-active-class="transition-all duration-400 ease-out"
				enter-from-class="opacity-0 scale-95 translate-y-4"
			>
				<div
					class="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-strong rounded-3xl"
				>
					<button
						class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors"
						aria-label="Close"
						@click="close"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" />
						</svg>
					</button>

					<div class="p-5 md:p-8 pb-4">
						<BrowserChrome :url="project.previewUrl">
							<div class="relative aspect-[16/10] bg-black/40">
								<template v-if="currentMedia">
									<img
										v-if="currentMedia.type === 'image'"
										:src="currentMedia.src"
										:alt="currentMedia.alt || project.title"
										class="absolute inset-0 w-full h-full object-cover"
									/>
									<video
										v-else
										:src="currentMedia.src"
										class="absolute inset-0 w-full h-full object-cover"
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
										class="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors"
										aria-label="Previous"
										@click.stop="prev"
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
									</button>
									<button
										class="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors"
										aria-label="Next"
										@click.stop="next"
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
								@click="mediaIndex = i"
							></button>
						</div>
					</div>

					<div class="px-5 md:px-8 pb-8 pt-2">
						<div class="flex items-start justify-between gap-4 mb-4">
							<div>
								<div
									class="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2"
								>
									{{ project.tag }}
								</div>
								<h3 class="text-2xl md:text-3xl font-semibold tracking-tight">
									{{ project.title }}
								</h3>
							</div>
							<a
								v-if="project.demoUrl"
								:href="project.demoUrl"
								target="_blank"
								rel="noopener"
								class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-sm font-medium"
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

						<p class="text-white/70 leading-relaxed">
							{{ project.longDesc || project.desc }}
						</p>

						<div class="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
							<div
								v-for="m in project.metrics"
								:key="m"
								class="glass rounded-xl px-3 py-2.5 text-xs font-mono text-white/60"
							>
								<span class="text-white/40 mr-1.5">›</span>{{ m }}
							</div>
						</div>

						<div class="mt-5 flex flex-wrap gap-2">
							<span
								v-for="t in project.stack"
								:key="t"
								class="px-3 py-1 rounded-full text-xs font-mono text-white/70 glass"
							>
								{{ t }}
							</span>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	</Transition>
</template>
