<script lang="ts" setup>
	export interface FooterItem {
		icon?: string;
	}

	const props = defineProps<FooterItem>();
</script>

<template>
	<li class="flex list-none flex-nowrap items-center gap-2">
		<Icon v-if="icon" :name="icon" />
		<slot />
	</li>
</template>
