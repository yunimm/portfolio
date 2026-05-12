<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import SectionTint from '../components/SectionTint.vue'
import SectionPill from '../components/SectionPill.vue'
import { setupSectionObservers } from '../composables/useScrollState'

let teardown: (() => void) | null = null

onMounted(() => {
	teardown = setupSectionObservers()
})

onUnmounted(() => {
	teardown?.()
	teardown = null
})
</script>

<template>
	<SectionTint />
	<SectionPill />

	<main>
		<HeroSection />
		<ExperienceSection />
		<ProjectsSection />
		<SkillsSection />
		<ContactSection />
	</main>
</template>
