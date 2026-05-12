<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import CursorGlow from './components/CursorGlow.vue'
import ParticleField from './components/ParticleField.vue'
import TopProgressBar from './components/TopProgressBar.vue'
import { initScrollProgress } from './composables/useScrollState'

onMounted(() => {
	initScrollProgress()
})
</script>

<template>
	<div class="relative min-h-screen overflow-x-hidden">
		<ParticleField />
		<CursorGlow />

		<TheNav />
		<TopProgressBar />

		<RouterView v-slot="{ Component }">
			<KeepAlive include="HomeView">
				<component :is="Component" />
			</KeepAlive>
		</RouterView>

		<TheFooter />
	</div>
</template>
