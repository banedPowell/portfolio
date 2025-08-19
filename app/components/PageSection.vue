<script lang="ts" setup>
	const props = defineProps<{
		title: string;
	}>();
</script>

<template>
	<section class="flex flex-col gap-5">
		<h2 class="text-2xl text-gray-300">{{ title }}</h2>
		<slot />
	</section>
</template>
