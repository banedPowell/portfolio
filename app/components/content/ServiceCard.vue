<script lang="ts" setup>
	const props = defineProps<{
		title: string;
		description: string;
		icon: string;
		accentColor?: string;
	}>();

	const containerStyle = computed(() => {
		if (props.accentColor) {
			return { '--accent-color': props.accentColor };
		}
		return {};
	});

	const iconStyle = computed(() => {
		if (props.accentColor) {
			return { '--accent-color': props.accentColor };
		}
		return {};
	});
</script>

<template>
	<li
		class="group border-dark-800 relative flex w-full flex-col gap-3 rounded-xl border-2 p-5 transition-colors"
		:class="accentColor ? 'has-accent' : 'hover:border-dark-600'"
		:style="containerStyle"
	>
		<UIcon
			:name="icon"
			size="24"
			class="icon transition-colors"
			:style="iconStyle"
		/>

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

<style scoped>
	li.has-accent:hover {
		border-color: var(--accent-color);
	}

	li.has-accent:hover .icon {
		color: var(--accent-color);
	}
</style>
