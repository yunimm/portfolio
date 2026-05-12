<script setup lang="ts">
import { computed } from 'vue'
import { activeSection, scrollProgress } from '../composables/useScrollState'

const meta: Record<string, { num: string; label: string }> = {
	top: { num: '00', label: 'Intro' },
	experience: { num: '01', label: 'Experience' },
	projects: { num: '02', label: 'Projects' },
	skills: { num: '03', label: 'Skills' },
	contact: { num: '04', label: 'Contact' },
}

const current = computed(() => meta[activeSection.value] || meta.top)
const visible = computed(() => scrollProgress.value > 0.02)
</script>

<template>
	<div
		class="fixed top-[72px] left-1/2 -translate-x-1/2 z-[45] pointer-events-none transition-all duration-500"
		:class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'"
	>
		<div
			class="flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-strong shadow-lg shadow-black/30"
			style="
				background: rgba(10, 10, 25, 0.65);
				backdrop-filter: blur(28px) saturate(200%);
				-webkit-backdrop-filter: blur(28px) saturate(200%);
			"
		>
			<span class="text-[10px] font-mono text-white/40 tabular-nums">
				/ {{ current.num }}
			</span>

			<Transition
				mode="out-in"
				enter-active-class="transition-all duration-300 ease-out"
				leave-active-class="transition-all duration-200 ease-in"
				enter-from-class="opacity-0 translate-y-1"
				leave-to-class="opacity-0 -translate-y-1"
			>
				<span
					:key="current.label"
					class="text-xs font-medium tracking-wide text-white"
				>
					{{ current.label }}
				</span>
			</Transition>
		</div>
	</div>
</template>
