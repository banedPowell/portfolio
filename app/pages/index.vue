<script lang="ts" setup>
	const { data: page } = useAsyncData('page', () => {
		return queryCollection('pages').path('/pages/').first();
	});

	useSeoMeta({
		title: page?.value?.seo?.title,
		description: page?.value?.seo?.description,
		ogTitle: page?.value?.seo?.title,
		ogDescription: page?.value?.seo?.description,
		ogImage: page?.value?.seo?.image,
		ogUrl: page?.value?.seo?.url,
		ogType: 'website',
		ogLocale: page?.value?.seo?.locale,
		ogSiteName: page?.value?.seo?.title,
		ogLocaleAlternate: page?.value?.seo?.locale,
		twitterTitle: page?.value?.seo?.title,
		twitterDescription: page?.value?.seo?.description,
		twitterImage: page?.value?.seo?.image,
		twitterCard: 'summary_large_image',
		twitterSite: '@banedpowell',
		twitterCreator: '@banedpowell',
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
