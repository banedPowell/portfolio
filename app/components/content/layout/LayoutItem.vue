<script lang="ts" setup>
	export interface FooterItem {
		icon?: string;
		externalLink?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}

	const props = defineProps<FooterItem>();
</script>

<template>
	<li v-if="externalLink" class="list-none">
		<NuxtLink
			:to="externalLink"
			:target="target"
			class="group/islink flex flex-nowrap items-center gap-2 transition-colors hover:text-gray-300"
		>
			<Icon v-if="icon" :name="icon" />
			<slot />
		</NuxtLink>
	</li>

	<li v-else class="flex list-none flex-nowrap items-center gap-2">
		<Icon v-if="icon" :name="icon" />
		<slot />
	</li>
</template>
