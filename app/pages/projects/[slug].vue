<script lang="ts" setup>
	const { slug } = useRoute().params;

	const { data: project } = await useAsyncData('project', () => {
		return queryCollection('projects').path(`/projects/${slug}`).first();
	});
</script>

<template>
	<div class="flex w-full flex-col gap-20">
		<ULink
			to="/"
			class="flex flex-row items-center gap-2 text-gray-500 hover:text-gray-300"
		>
			<Icon name="lucide:arrow-left" /> Retour
		</ULink>

		<template v-if="project">
			<ContentRenderer
				class="flex w-full flex-col gap-20"
				:value="project"
			/>
		</template>

		<template v-else>
			<div class="empty-page">
				<h1 class="text-2xl font-bold">Page Not Found</h1>
				<p class="text-gray-500">
					Oops! The content you're looking for doesn't exist.
				</p>
			</div>
		</template>
	</div>
</template>
