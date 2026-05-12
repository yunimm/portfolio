<script setup lang="ts">
import { onMounted } from 'vue'
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import CursorGlow from './components/CursorGlow.vue'
import ParticleField from './components/ParticleField.vue'
import SectionTint from './components/SectionTint.vue'
import TopProgressBar from './components/TopProgressBar.vue'
import SectionPill from './components/SectionPill.vue'
import { initScrollState } from './composables/useScrollState'

onMounted(() => {
	initScrollState()
})
</script>

<template>
	<div class="relative min-h-screen overflow-x-hidden">
		<SectionTint />
		<ParticleField />
		<CursorGlow />

		<TheNav />
		<TopProgressBar />
		<SectionPill />

		<main>
			<HeroSection />
			<ExperienceSection />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</main>

		<TheFooter />
	</div>
</template>
