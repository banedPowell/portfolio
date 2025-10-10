<script lang="ts" setup>
	const { data: page } = useAsyncData('page', () => {
		return queryCollection('pages').path('/pages/').first();
	});

	useSeoMeta({
		ogTitle: page?.value?.seo?.title,
		description: page?.value?.seo?.description,
		ogDescription: page?.value?.seo?.description,
		ogImage: page?.value?.seo?.image,
		ogUrl: page?.value?.seo?.url,
		twitterTitle: page?.value?.seo?.title,
		twitterDescription: page?.value?.seo?.description,
		twitterImage: page?.value?.seo?.image,
		twitterCard: 'summary_large_image',
	});

	useHead({
		htmlAttrs: {
			lang: page?.value?.seo?.locale,
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/baned.png',
			},
		],
	});

	definePageMeta({
		colorMode: 'dark',
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
