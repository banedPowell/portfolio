<script lang="ts" setup>
	export interface FooterItem {
		text: string;
		icon?: string;
		link?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}

	const props = defineProps<{ item: FooterItem }>();
</script>

<template>
	<li v-if="item.link">
		<NuxtLink
			:to="item.link"
			class="flex items-center gap-2 transition-colors hover:text-gray-300"
		>
			<Icon v-if="item.icon" :name="item.icon" />
			{{ item.text }}
		</NuxtLink>
	</li>

	<li v-else class="flex items-center gap-2">
		<Icon v-if="item.icon" :name="item.icon" />
		{{ item.text }}
	</li>
</template>
