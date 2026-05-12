import type { Directive } from 'vue'

interface TiltEl extends HTMLElement {
	_tiltHandlers?: {
		move: (e: MouseEvent) => void
		leave: () => void
	}
}

export const vTilt: Directive<TiltEl> = {
	mounted(el) {
		const max = 8
		const move = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect()
			const x = (e.clientX - rect.left) / rect.width
			const y = (e.clientY - rect.top) / rect.height
			const rx = (y - 0.5) * -max * 2
			const ry = (x - 0.5) * max * 2
			el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
			el.style.setProperty('--mx', `${x * 100}%`)
			el.style.setProperty('--my', `${y * 100}%`)
		}
		const leave = () => {
			el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
		}
		el.style.transition = 'transform 240ms cubic-bezier(0.2, 0.9, 0.3, 1)'
		el.style.willChange = 'transform'
		el.addEventListener('mousemove', move)
		el.addEventListener('mouseleave', leave)
		el._tiltHandlers = { move, leave }
	},
	unmounted(el) {
		if (!el._tiltHandlers) return
		el.removeEventListener('mousemove', el._tiltHandlers.move)
		el.removeEventListener('mouseleave', el._tiltHandlers.leave)
	},
}
