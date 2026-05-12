<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const x = ref(-200)
const y = ref(-200)
const targetX = ref(-200)
const targetY = ref(-200)
let raf = 0

const onMove = (e: MouseEvent) => {
	targetX.value = e.clientX
	targetY.value = e.clientY
}

const loop = () => {
	x.value += (targetX.value - x.value) * 0.12
	y.value += (targetY.value - y.value) * 0.12
	raf = requestAnimationFrame(loop)
}

onMounted(() => {
	window.addEventListener('mousemove', onMove, { passive: true })
	raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
	window.removeEventListener('mousemove', onMove)
	cancelAnimationFrame(raf)
})
</script>

<template>
	<div
		class="pointer-events-none fixed inset-0 -z-[5] hidden md:block"
		aria-hidden="true"
	>
		<div
			class="absolute w-[520px] h-[520px] rounded-full opacity-50 mix-blend-screen blur-3xl transition-opacity"
			:style="{
				transform: `translate(${x - 260}px, ${y - 260}px)`,
				background:
					'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(34,211,238,0.3) 35%, transparent 70%)',
			}"
		></div>
	</div>
</template>
