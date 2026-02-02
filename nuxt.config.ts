// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	// Désactive @nuxt/fonts pour éviter "fetch failed" sur Netlify (restrictions réseau en CI)
	ui: {
		fonts: false,
	},

	app: {
		head: {
			link: [
				// Fontshare: Switzer + General Sans
				{
					rel: 'stylesheet',
					href: 'https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&f[]=general-sans@400,500,600,700&display=swap',
				},
				// Google Fonts: Space Mono
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',
				},
			],
		},
	},

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
