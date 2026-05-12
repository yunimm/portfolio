import { ref, watch, type Ref } from 'vue'

export function useCountUp(target: number, duration = 1600) {
	const value = ref(0)

	const start = () => {
		const startTime = performance.now()
		const tick = (now: number) => {
			const t = Math.min(1, (now - startTime) / duration)
			const eased = 1 - Math.pow(1 - t, 3)
			value.value = Math.floor(eased * target)
			if (t < 1) requestAnimationFrame(tick)
			else value.value = target
		}
		requestAnimationFrame(tick)
	}

	return { value, start } as { value: Ref<number>; start: () => void }
}
