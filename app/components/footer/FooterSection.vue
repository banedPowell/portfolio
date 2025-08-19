<script lang="ts" setup>
	import type { FooterItem } from './FooterItem.vue';

	const props = defineProps<{
		title: string;

		items: Array<FooterItem>;
	}>();
</script>

<template>
	<ul class="flex flex-col items-start justify-start gap-1">
		<li>
			<h4 class="mb-1.5 font-black">{{ title }}</h4>
		</li>

		<FooterItem v-for="item in items" :item="item" :key="item.text" />
	</ul>
</template>
