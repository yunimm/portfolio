<script setup lang="ts">
defineProps<{
	url?: string
}>()
</script>

<template>
	<div class="overflow-hidden rounded-2xl glass">
		<div
			class="flex items-center gap-3 px-4 py-2.5 border-b border-white/5"
			style="background: rgba(0, 0, 0, 0.25)"
		>
			<div class="flex gap-1.5">
				<span class="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
				<span class="w-3 h-3 rounded-full bg-[#febc2e]"></span>
				<span class="w-3 h-3 rounded-full bg-[#28c840]"></span>
			</div>
			<div
				class="flex-1 max-w-md mx-auto px-3 py-1 rounded-md text-xs font-mono text-white/50 truncate"
				style="background: rgba(255, 255, 255, 0.05)"
			>
				<span class="text-white/30">https://</span>{{ url || 'preview.yu.dev' }}
			</div>
			<div class="w-12"></div>
		</div>
		<div class="relative">
			<slot />
			<div class="scanlines pointer-events-none absolute inset-0"></div>
		</div>
	</div>
</template>

<style scoped>
.scanlines {
	background-image: repeating-linear-gradient(
		0deg,
		transparent 0,
		transparent 2px,
		rgba(255, 255, 255, 0.025) 2px,
		rgba(255, 255, 255, 0.025) 3px
	);
}
</style>
