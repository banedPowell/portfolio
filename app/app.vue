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
		<UApp>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</UApp>
	</div>
</template>
