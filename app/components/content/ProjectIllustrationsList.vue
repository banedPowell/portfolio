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
	<ul
		class="flex w-full flex-col justify-center gap-5 px-5 sm:flex-row sm:px-0"
	>
		<ProjectIllustration
			:illustrationSrc="firstIllustration"
			:illustrationTitle="firstIllustrationTitle"
			:illustrationAlt="firstIllustrationAlt"
		/>

		<ProjectIllustration
			:illustrationSrc="secondIllustration"
			:illustrationTitle="secondIllustrationTitle"
			:illustrationAlt="secondIllustrationAlt"
		/>

		<ProjectIllustration
			:illustrationSrc="thirdIllustration"
			:illustrationTitle="thirdIllustrationTitle"
			:illustrationAlt="thirdIllustrationAlt"
		/>
	</ul>
</template>
