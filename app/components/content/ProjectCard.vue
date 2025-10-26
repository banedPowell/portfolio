<script lang="ts" setup>
	const props = defineProps<{
		title: string;
		projectIcon: string;
		iconAlt: string;
		slug: string;
		repoUrl: string;
	}>();
</script>

<template>
	<li class="group relative">
		<Icon
			name="lucide:arrow-up-right"
			class="absolute top-5 right-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
		/>

		<NuxtLink
			:to="`/projects/${slug}`"
			class="border-dark-800 hover:border-dark-600 flex w-full flex-col gap-3 rounded-xl border-2 p-5 transition-colors"
		>
			<div class="flex w-full flex-row items-center justify-between">
				<NuxtImg
					:src="projectIcon"
					alt="Logo de Deezerstats"
					class="aspect-square size-8"
				/>
			</div>

			<div class="flex flex-col">
				<p
					class="font-display mt-0 mb-1 text-lg font-normal text-gray-300"
				>
					{{ title }}
				</p>

				<slot />
			</div>
		</NuxtLink>
	</li>
</template>
