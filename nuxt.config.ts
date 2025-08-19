// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	components: [
		{
			path: '~/components',

			pathPrefix: false,
		},
	],

	css: ['~/assets/css/main.css'],

	modules: [
		'@nuxt/content',
		'@nuxt/ui',
		'nuxt-security',
		'@vueuse/nuxt',
		'@nuxt/image',
	],
});
