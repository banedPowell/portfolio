<script lang="ts" setup>
	const props = defineProps<{
		title: string;
		description: string;
		projectIcon: string;
		iconAlt: string;
		slug: string;
		repoUrl?: string;
	}>();
</script>

<template>
	<li class="group relative h-full">
		<Icon
			name="lucide:arrow-up-right"
			class="absolute top-5 right-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
		/>

		<NuxtLink
			:to="slug"
			class="border-dark-800 hover:border-dark-600 flex h-full w-full flex-col gap-3 rounded-xl border-2 p-5 transition-colors"
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

				<p
					class="my-0 w-full text-gray-400 transition-colors group-hover/islink:text-gray-300"
				>
					{{ description }}
				</p>
			</div>
		</NuxtLink>
	</li>
</template>
