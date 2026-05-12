import { ref } from 'vue'

export const scrollProgress = ref(0)
export const scrollVelocity = ref(0)
export const activeSection = ref<string>('top')

const SECTIONS = ['top', 'experience', 'projects', 'skills', 'contact']

let progressInitialized = false

export function initScrollProgress() {
	if (progressInitialized) return
	progressInitialized = true

	let lastY = window.scrollY
	let lastT = performance.now()

	const tick = () => {
		const y = window.scrollY
		const max = document.documentElement.scrollHeight - window.innerHeight
		scrollProgress.value = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0

		const now = performance.now()
		const dt = now - lastT
		if (dt > 0) {
			const dy = y - lastY
			const inst = (Math.abs(dy) / dt) * 16
			scrollVelocity.value = scrollVelocity.value * 0.85 + inst * 0.15
		}
		lastY = y
		lastT = now

		requestAnimationFrame(tick)
	}
	requestAnimationFrame(tick)
}

export function setupSectionObservers() {
	const observers: IntersectionObserver[] = []
	SECTIONS.forEach(id => {
		const el = document.getElementById(id)
		if (!el) return
		const obs = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) activeSection.value = id
				})
			},
			{ rootMargin: '-40% 0px -40% 0px', threshold: 0 },
		)
		obs.observe(el)
		observers.push(obs)
	})
	return () => {
		observers.forEach(o => o.disconnect())
		activeSection.value = 'top'
	}
}
