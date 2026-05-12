<script setup lang="ts">
import { activeSection } from '../composables/useScrollState'

const tints: Record<string, string> = {
	top: `
		radial-gradient(at 20% 20%, rgba(56,189,248,0.28) 0px, transparent 50%),
		radial-gradient(at 80% 0%, rgba(168,85,247,0.30) 0px, transparent 55%),
		radial-gradient(at 70% 70%, rgba(236,72,153,0.22) 0px, transparent 50%),
		radial-gradient(at 10% 90%, rgba(34,211,238,0.22) 0px, transparent 50%)
	`,
	experience: `
		radial-gradient(at 20% 20%, rgba(52,211,153,0.26) 0px, transparent 50%),
		radial-gradient(at 80% 0%, rgba(34,211,238,0.28) 0px, transparent 55%),
		radial-gradient(at 70% 70%, rgba(99,102,241,0.24) 0px, transparent 50%),
		radial-gradient(at 10% 90%, rgba(20,184,166,0.22) 0px, transparent 50%)
	`,
	projects: `
		radial-gradient(at 20% 20%, rgba(168,85,247,0.30) 0px, transparent 50%),
		radial-gradient(at 80% 0%, rgba(236,72,153,0.28) 0px, transparent 55%),
		radial-gradient(at 70% 70%, rgba(244,114,182,0.24) 0px, transparent 50%),
		radial-gradient(at 10% 90%, rgba(192,132,252,0.24) 0px, transparent 50%)
	`,
	skills: `
		radial-gradient(at 20% 20%, rgba(251,191,36,0.24) 0px, transparent 50%),
		radial-gradient(at 80% 0%, rgba(244,114,182,0.22) 0px, transparent 55%),
		radial-gradient(at 70% 70%, rgba(251,146,60,0.22) 0px, transparent 50%),
		radial-gradient(at 10% 90%, rgba(168,85,247,0.20) 0px, transparent 50%)
	`,
	contact: `
		radial-gradient(at 20% 20%, rgba(251,113,133,0.26) 0px, transparent 50%),
		radial-gradient(at 80% 0%, rgba(251,146,60,0.26) 0px, transparent 55%),
		radial-gradient(at 70% 70%, rgba(244,114,182,0.24) 0px, transparent 50%),
		radial-gradient(at 10% 90%, rgba(250,204,21,0.20) 0px, transparent 50%)
	`,
}

const keys = Object.keys(tints)
</script>

<template>
	<div class="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
		<div
			v-for="k in keys"
			:key="k"
			class="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out animate-gradient-shift"
			:style="{
				backgroundImage: tints[k],
				backgroundSize: '200% 200%',
				opacity: activeSection === k ? 1 : 0,
			}"
		></div>
		<div class="absolute inset-0 grid-overlay"></div>
		<div
			class="absolute inset-0"
			style="background: radial-gradient(ellipse at top, transparent 0%, rgba(5,5,17,0.55) 60%, #050511 100%)"
		></div>
	</div>
</template>
