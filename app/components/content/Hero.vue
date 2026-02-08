<script lang="ts" setup>
	const props = defineProps<{
		illustration: string;
		alt: string;
	}>();
</script>

<template>
	<section class="mt-20 flex flex-row justify-between md:mt-0">
		<div class="flex w-full max-w-[500px] flex-col">
			<slot />
		</div>

		<NuxtImg
			:src="props.illustration"
			:alt="props.alt"
			class="illustration hidden aspect-square size-45 rounded-full md:block"
		/>
	</section>
</template>

<style lang="css" scoped>
	.illustration {
		transform: rotate(5deg);
		transition: all 0.15s cubic-bezier(0.85, 0.85, 0, 1.57);

		&:hover {
			transform: rotate(-2deg) scale(1.05);
			transition: all 0.3s cubic-bezier(0.82, -1.27, 0, 1.57);
		}
	}
</style>
