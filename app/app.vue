<script lang="ts" setup>
	useHead({
		title: 'banedPowell • Portfolio',
		htmlAttrs: {
			lang: 'fr-FR',
		},
	});
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<UApp>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UApp>
	</div>
</template>
