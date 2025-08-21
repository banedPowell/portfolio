<script lang="ts" setup>
	export interface FooterItem {
		icon?: string;
		link?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}

	const props = defineProps<FooterItem>();
</script>

<template>
	<li v-if="link">
		<NuxtLink
			:to="link"
			:target="target"
			class="flex flex-nowrap items-center gap-2 transition-colors hover:text-gray-300"
		>
			<Icon v-if="icon" :name="icon" />
			<slot />
		</NuxtLink>
	</li>

	<li v-else class="flex flex-nowrap items-center gap-2">
		<Icon v-if="icon" :name="icon" />
		<slot />
	</li>
</template>
