<script lang="ts" setup>
	const props = defineProps<{
		logo?: string;
		logoAlt?: string;
	}>();
</script>

<template>
	<section class="flex flex-col gap-5">
		<NuxtImg
			v-if="logo"
			:src="logo"
			:alt="logoAlt"
			class="size-15 transition-transform hover:scale-105 hover:rotate-5"
		/>

		<slot />
	</section>
</template>
