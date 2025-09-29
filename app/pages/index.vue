<script lang="ts" setup>
	const { data: page } = useAsyncData('page', () => {
		return queryCollection('pages').path('/pages/').first();
	});
</script>

<template>
	<div class="hidden text-red-400">
		To activate some tailwind classes, add them to this hidden div
	</div>

	<ContentRenderer
		class="flex w-full flex-col gap-20"
		v-if="page"
		:value="page"
	/>
</template>
