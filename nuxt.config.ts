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
		'@vueuse/nuxt',
		'@nuxt/image',
		'@nuxthub/core',
		'nuxt-schema-org',
		'nuxt-studio',
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

		preview: {
			api: 'https://api.nuxt.studio',
			dev: true,
		},
	},

	studio: {
		repository: {
			provider: 'github',
			owner: 'banedPowell',
			repo: 'portfolio',
		},
	},

	vite: {
		build: {
			rollupOptions: {
				external: ['sqlite3'], // verify 'sqlite3' exists in package.json first
			},
		},
	},
	nitro: {
		externals: {
			external: ['sqlite3'], // also prevent Nitro from bundling it
		},
	},
});
