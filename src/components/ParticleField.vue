<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { scrollVelocity } from '../composables/useScrollState'

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0

interface Node {
	x: number
	y: number
	vx: number
	vy: number
	r: number
}

onMounted(() => {
	if (!canvas.value) return
	const c = canvas.value
	const ctx = c.getContext('2d')
	if (!ctx) return

	const dpr = window.devicePixelRatio || 1
	const resize = () => {
		c.width = window.innerWidth * dpr
		c.height = window.innerHeight * dpr
		c.style.width = window.innerWidth + 'px'
		c.style.height = window.innerHeight + 'px'
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.scale(dpr, dpr)
	}
	resize()
	window.addEventListener('resize', resize)

	const count = Math.min(56, Math.floor((window.innerWidth * window.innerHeight) / 26000))
	const nodes: Node[] = Array.from({ length: count }, () => ({
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		vx: (Math.random() - 0.5) * 0.25,
		vy: (Math.random() - 0.5) * 0.25,
		r: Math.random() * 1.4 + 0.6,
	}))

	const baseMaxDist = 140

	const tick = () => {
		const v = scrollVelocity.value
		const boost = Math.min(1.8, v * 0.04)
		const maxDist = baseMaxDist + boost * 60
		const lineAlphaBoost = 1 + boost * 1.5
		const nodeAlphaBoost = 1 + boost * 0.8
		const velocityMul = 1 + boost * 1.2

		ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

		for (const n of nodes) {
			n.x += n.vx * velocityMul
			n.y += n.vy * velocityMul
			if (n.x < 0 || n.x > window.innerWidth) n.vx *= -1
			if (n.y < 0 || n.y > window.innerHeight) n.vy *= -1
		}

		for (let i = 0; i < nodes.length; i++) {
			for (let j = i + 1; j < nodes.length; j++) {
				const a = nodes[i]
				const b = nodes[j]
				const dx = a.x - b.x
				const dy = a.y - b.y
				const d = Math.sqrt(dx * dx + dy * dy)
				if (d < maxDist) {
					const alpha = Math.min(0.55, (1 - d / maxDist) * 0.18 * lineAlphaBoost)
					ctx.strokeStyle = `rgba(180, 200, 255, ${alpha})`
					ctx.lineWidth = 0.6 + boost * 0.4
					ctx.beginPath()
					ctx.moveTo(a.x, a.y)
					ctx.lineTo(b.x, b.y)
					ctx.stroke()
				}
			}
		}

		for (const n of nodes) {
			ctx.fillStyle = `rgba(200, 220, 255, ${Math.min(0.95, 0.55 * nodeAlphaBoost)})`
			ctx.beginPath()
			ctx.arc(n.x, n.y, n.r + boost * 0.6, 0, Math.PI * 2)
			ctx.fill()
		}

		raf = requestAnimationFrame(tick)
	}
	tick()

	onUnmounted(() => {
		cancelAnimationFrame(raf)
		window.removeEventListener('resize', resize)
	})
})
</script>

<template>
	<canvas
		ref="canvas"
		class="pointer-events-none fixed inset-0 -z-[8] opacity-50"
		aria-hidden="true"
	></canvas>
</template>
