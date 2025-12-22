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
		'@nuxt/ui',
		'@nuxt/content',
		'@nuxt/hints',
		'nuxt-studio',
		'@nuxt/image',
		'@vueuse/nuxt',
		'nuxt-schema-org',
	],

	content: {
		build: {
			markdown: {
				toc: {
					depth: 5,
				},
			},
		},

		renderer: {
			anchorLinks: {
				h1: false,
				h2: true,
				h3: true,
				h4: false,
				h5: false,
				h6: false,
			},
		},
	},

	studio: {
		repository: {
			provider: 'github',
			owner: 'banedPowell',
			repo: 'portfolio',
		},
	},
});
