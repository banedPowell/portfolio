<script lang="ts" setup>
	const props = defineProps<{
		firstIllustration: string;
		firstIllustrationTitle: string;
		firstIllustrationAlt: string;
		secondIllustration: string;
		secondIllustrationTitle: string;
		secondIllustrationAlt: string;
		thirdIllustration: string;
		thirdIllustrationTitle: string;
		thirdIllustrationAlt: string;
	}>();
</script>

<template>
	<div
		class="flex w-full flex-col justify-center gap-5 px-5 md:flex-row md:px-0"
	>
		<!-- First illustration -->
		<UModal
			:title="firstIllustrationTitle"
			:description="firstIllustrationAlt"
		>
			<NuxtImg
				:src="firstIllustration"
				:alt="firstIllustrationAlt"
				class="hover:border-dark-600 aspect-square w-full rotate-5 cursor-zoom-in rounded-lg transition-all hover:scale-105 hover:rotate-0 hover:border-4 md:w-1/3"
			/>

			<template #body>
				<NuxtImg
					:src="firstIllustration"
					:alt="firstIllustrationAlt"
					class="rounded-sm object-contain"
				/>
			</template>
		</UModal>

		<!-- Second illustration -->
		<UModal
			:title="secondIllustrationTitle"
			:description="secondIllustrationAlt"
		>
			<NuxtImg
				:src="secondIllustration"
				:alt="secondIllustrationAlt"
				class="hover:border-dark-600 aspect-square w-full -rotate-5 cursor-zoom-in rounded-lg transition-all hover:scale-105 hover:rotate-0 hover:border-4 md:w-1/3"
			/>

			<template #body>
				<NuxtImg
					:src="secondIllustration"
					:alt="secondIllustrationAlt"
					class="rounded-sm object-contain"
				/>
			</template>
		</UModal>

		<!-- Third illustration -->
		<UModal
			:title="thirdIllustrationTitle"
			:description="thirdIllustrationAlt"
		>
			<NuxtImg
				:src="thirdIllustration"
				:alt="thirdIllustrationAlt"
				class="hover:border-dark-600 aspect-square w-full rotate-5 cursor-zoom-in rounded-lg transition-all hover:scale-105 hover:rotate-0 hover:border-4 md:w-1/3"
			/>

			<template #body>
				<NuxtImg
					:src="thirdIllustration"
					:alt="secondIllustrationAlt"
					class="rounded-sm object-contain"
				/>
			</template>
		</UModal>
	</div>
</template>
