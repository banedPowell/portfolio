<script lang="ts" setup>
	const { data: page } = useAsyncData('page', () => {
		return queryCollection('pages').path('/pages/').first();
	});
</script>

<template>
	<div class="flex w-full flex-col gap-20 selection:bg-red-400/30">
		<ContentRenderer v-if="page" :value="page" />
	</div>
</template>
