<script lang="ts" setup>
	export interface FooterItem {
		icon?: string;
	}

	const props = defineProps<FooterItem>();
</script>

<template>
	<li
		class="my-1 flex list-none flex-nowrap items-center gap-2 text-gray-500 transition-colors hover:text-gray-300"
	>
		<Icon v-if="icon" :name="icon" />
		<slot mdc-unwrap="p" />
	</li>
</template>
