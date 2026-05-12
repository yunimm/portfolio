<script setup lang="ts">
import { computed } from 'vue'
import { scrollProgress } from '../composables/useScrollState'

const fillWidth = computed(() => `${scrollProgress.value * 100}%`)
const glow = computed(() => scrollProgress.value > 0.005)
</script>

<template>
	<div
		class="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none"
		aria-hidden="true"
	>
		<div
			class="h-full bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400 transition-shadow duration-300"
			:style="{
				width: fillWidth,
				boxShadow: glow
					? '0 0 12px rgba(168, 85, 247, 0.6), 0 0 4px rgba(34, 211, 238, 0.8)'
					: 'none',
			}"
		></div>
	</div>
</template>
