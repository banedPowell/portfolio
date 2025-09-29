<script lang="ts" setup>
	const props = defineProps<{
		projectIcon: string;
		iconAlt: string;
		slug: string;
		repoUrl: string;
	}>();

	import { useWindowSize } from '@vueuse/core';

	const { width } = useWindowSize();
	const mdScreenSize = computed(() => width.value >= 640);
</script>

<template>
	<li>
		<NuxtLink :to="`/projects/${slug}`" v-if="!mdScreenSize">
			<div
				class="border-dark-800 hover:bg-dark-800 flex w-full flex-col gap-3 rounded-xl border-2 p-5"
			>
				<div class="flex w-full flex-row items-center justify-between">
					<NuxtImg
						:src="projectIcon"
						alt="Logo de Deezerstats"
						class="aspect-square size-8"
					/>
				</div>

				<div class="flex flex-col">
					<slot />
				</div>
			</div>
		</NuxtLink>

		<div
			v-else
			class="border-dark-800 flex w-full flex-col gap-3 rounded-xl border-1 p-5"
		>
			<div class="flex w-full flex-row items-center justify-between">
				<NuxtLink :to="`/projects/${slug}`" class="w-full">
					<NuxtImg
						:src="projectIcon"
						:alt="iconAlt"
						class="aspect-square size-8"
					/>
				</NuxtLink>

				<NuxtLink
					:to="repoUrl"
					target="_blank"
					class="flex flex-row items-center gap-2 rounded-md p-3 py-1 text-gray-400 transition-colors hover:bg-gray-400/10"
				>
					<Icon name="ion:logo-github" class="text-gray-400" />

					Github
				</NuxtLink>
			</div>

			<NuxtLink :to="`/projects/${slug}`" class="flex flex-col gap-1.5">
				<slot />
			</NuxtLink>
		</div>
	</li>
</template>
