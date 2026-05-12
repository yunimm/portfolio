<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
	<footer class="border-t border-white/5 py-10 mt-10">
		<div class="container-narrow flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
			<div class="font-mono">© {{ year }} Yu · Built with Vue + Tailwind</div>
			<div class="font-mono text-xs">v1.0.0 · build {{ Date.now().toString(36).slice(-6) }}</div>
		</div>
	</footer>
</template>
