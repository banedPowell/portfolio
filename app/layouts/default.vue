<script lang="ts" setup>
	const { data: footer } = await useAsyncData('footer', () => {
		return queryCollection('layout').path('/layout/footer').first();
	});
</script>

<template>
	<div class="flex flex-col items-center gap-20">
		<header
			class="sticky top-0 hidden h-fit w-full max-w-5xl items-center justify-between p-5 md:flex"
		>
			<NuxtLink to="/" class="transition-colors hover:text-gray-300">
				baned.me
			</NuxtLink>

			<NuxtLink
				to="mailto:contact@baned.me"
				class="transition-colors hover:text-gray-300"
			>
				Me contacter
			</NuxtLink>
		</header>

		<main
			class="mt-15 flex h-fit w-full max-w-[800px] flex-col items-center gap-30 p-5 md:mt-0"
		>
			<slot />
		</main>

		<FooterComponent>
			<ContentRenderer
				v-if="footer"
				:value="footer"
				class="flex w-full flex-col gap-20 text-sm sm:flex-row"
			/>
		</FooterComponent>
	</div>
</template>
