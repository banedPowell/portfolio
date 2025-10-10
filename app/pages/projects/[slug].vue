<script lang="ts" setup>
	const { slug } = useRoute().params;

	const { data: project } = await useAsyncData('project', () => {
		return queryCollection('projects').path(`/projects/${slug}`).first();
	});

	useSeoMeta({
		ogTitle: project?.value?.seo?.title,
		description: project?.value?.seo?.description,
		ogDescription: project?.value?.seo?.description,
		ogImage: project?.value?.seo?.image,
		ogUrl: project?.value?.seo?.url,
		twitterTitle: project?.value?.seo?.title,
		twitterDescription: project?.value?.seo?.description,
		twitterImage: project?.value?.seo?.image,
		twitterCard: 'summary_large_image',
		twitterCreator: '@banedpowell',
	});

	useHead({
		htmlAttrs: {
			lang: project?.value?.seo?.locale,
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
	<UPage class="w-full">
		<ULink to="/" class="w-fit">
			<UButton
				variant="ghost"
				class="w-fit cursor-pointer hover:text-gray-300"
			>
				<Icon name="lucide:chevron-left" /> Retour
			</UButton>
		</ULink>

		<UPageBody>
			<template v-if="project">
				<ContentRenderer
					class="flex w-full flex-col gap-20"
					:value="project"
				/>
			</template>

			<template v-else>
				<div class="empty-page w-full">
					<h1 class="text-2xl text-gray-300">Projet introuvable</h1>
					<p class="text-gray-500">
						Le projet que vous cherchez n'existe pas.
					</p>
				</div>
			</template>
		</UPageBody>

		<template #right>
			<UPageAside>
				<UContentToc
					:links="project?.body?.toc?.links"
					title="Sur cette page"
					:ui="{ title: 'text-gray-400' }"
					class="w-fit"
				/>
			</UPageAside>
		</template>
	</UPage>
</template>
