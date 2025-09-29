<script lang="ts" setup>
	const props = defineProps<{
		illustrations: [string, string, string];
		alt: [string, string, string];
	}>();
</script>

<template>
	<div class="flex flex-row gap-4">
		<NuxtImg
			v-for="(illustration, index) in props.illustrations"
			:src="illustration"
			:alt="props.alt[index]"
			class="aspect-square size-45 rounded-lg"
		/>
	</div>
</template>
