<script lang="ts" setup>
	const props = defineProps<{
		title: string;
		description: string;
		icon: string;
	}>();
</script>

<template>
	<li
		class="group border-dark-800 hover:border-dark-600 relative flex w-full flex-col gap-3 rounded-xl border-2 p-5 transition-colors"
	>
		<UIcon :name="icon" size="24" />

		<div class="flex flex-col gap-1">
			<p class="font-display mt-0 mb-1 text-lg font-normal text-gray-300">
				{{ title }}
			</p>

			<p class="my-0 w-full text-gray-400 transition-colors">
				{{ description }}
			</p>
		</div>
	</li>
</template>
