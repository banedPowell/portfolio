<script lang="ts" setup>
	const { data: header } = await useAsyncData('header', () => {
		return queryCollection('layout').path('/layout/header').first();
	});

	const { data: footer } = await useAsyncData('footer', () => {
		return queryCollection('layout').path('/layout/footer').first();
	});
</script>

<template>
	<div class="flex flex-col items-center gap-20">
		<ContentRenderer
			v-if="header"
			:value="header"
			class="sticky top-0 z-50 hidden h-fit w-full max-w-5xl items-center justify-between md:flex"
			mdc-unwrap="div"
		/>

		<UMain
			class="mt-15 flex h-fit w-full max-w-[800px] flex-col items-center gap-30 p-5 md:mt-0"
		>
			<slot />
		</UMain>

		<ContentRenderer
			v-if="footer"
			:value="footer"
			class="mt-15 flex h-fit w-full flex-col items-center gap-30 p-5 md:mt-0"
		/>
	</div>
</template>
