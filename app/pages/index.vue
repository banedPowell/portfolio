<script lang="ts" setup>
	const { data: page } = await useAsyncData('page', () => {
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
		twitterCreator: '@banedpowell',
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

	useSchemaOrg([
		definePerson({
			name: 'Rubén De Carvalho',
			url: 'https://baned.me',
			sameAs: [
				'https://www.linkedin.com/in/rub%C3%A9ndc/',
				'https://bento.me/banedpowell',
				'https://www.malt.fr/profile/rubendecarvalho',
				'https://github.com/banedPowell',
				'https://twitter.com/banedpowell',
				'https://www.instagram.com/banedPowell',
			],
			image: '/baned.png',
			jobTitle: 'Développeur web Fullstack',
		}),
		defineWebSite({
			url: 'https://baned.me',
			name: 'banedPowell • Portfolio',
			description: () => page?.value?.seo?.description,
			image: '/seo.png',
			publisher: {
				value: 'banedPowell',
			},
		}),
	]);

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
