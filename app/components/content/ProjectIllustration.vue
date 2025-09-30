<script lang="ts" setup>
	const props = defineProps<{
		illustrationSrc: string;
		illustrationTitle: string;
		illustrationAlt: string;
	}>();
</script>

<template>
	<li
		class="border-dark-600 flex aspect-square w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-lg border-0 transition-all odd:rotate-5 even:-rotate-5 hover:scale-105 hover:rotate-0 hover:border-4 sm:w-1/3"
	>
		<UModal :title="illustrationTitle" :description="illustrationAlt">
			<NuxtImg
				:src="illustrationSrc"
				:alt="illustrationAlt"
				class="object-no-repeat h-full w-full object-cover object-center"
			/>

			<template #body>
				<NuxtImg
					:src="illustrationSrc"
					:alt="illustrationAlt"
					class="rounded-sm object-contain"
				/>
			</template>
		</UModal>
	</li>
</template>
