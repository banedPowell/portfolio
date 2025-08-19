<script lang="ts" setup>
	const props = defineProps<{
		project: {
			title: string;
			description: string;
			projectIcon: string;
			iconAlt: string;
			slug: string;
			repoUrl: string;
		};
	}>();

	import { useWindowSize } from '@vueuse/core';

	const { width } = useWindowSize();
	const mdScreenSize = computed(() => width.value >= 640);
</script>

<template>
	<li>
		<NuxtLink :to="`/projects/${project.slug}`" v-if="!mdScreenSize">
			<div
				class="border-dark-800 hover:bg-dark-800 flex w-full flex-col gap-3 rounded-xl border-2 p-5"
			>
				<div class="flex w-full flex-row items-center justify-between">
					<NuxtImg
						:src="project.projectIcon"
						alt="Logo de Deezerstats"
						class="aspect-square size-8"
					/>
				</div>

				<div class="flex flex-col gap-1.5">
					<h3 class="text-lg text-gray-300">{{ project.title }}</h3>

					<p class="text-gray-500">
						{{ project.description }}
					</p>
				</div>
			</div>
		</NuxtLink>

		<div
			v-else
			class="border-dark-800 flex w-full flex-col gap-3 rounded-xl border-1 p-5"
		>
			<div class="flex w-full flex-row items-center justify-between">
				<NuxtLink :to="`/projects/${project.slug}`" class="w-full">
					<NuxtImg
						:src="project.projectIcon"
						:alt="project.iconAlt"
						class="aspect-square size-8"
					/>
				</NuxtLink>

				<NuxtLink
					:to="project.repoUrl"
					target="_blank"
					class="flex flex-row items-center gap-2 rounded-md p-3 pt-1 pb-1 text-gray-400 transition-colors hover:bg-gray-400/10"
				>
					<Icon name="ion:logo-github" class="text-gray-400" />

					Github
				</NuxtLink>
			</div>

			<NuxtLink
				:to="`/projects/${project.slug}`"
				class="flex flex-col gap-1.5"
			>
				<h3 class="text-lg text-gray-300">{{ project.title }}</h3>

				<p class="text-gray-500">
					{{ project.description }}
				</p>
			</NuxtLink>
		</div>
	</li>
</template>
