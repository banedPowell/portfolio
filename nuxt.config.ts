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

	hooks: {
		'components:extend': (components: any) => {
			components.forEach((c: any) => {
				if (c.filePath && c.filePath.includes('/components/content/')) {
					c.global = true;
				}
			});

			components.forEach((c: any) => {
				if (c.pascalName && c.pascalName.startsWith('U')) {
					c.global = true;
				}
			});
		},
	},

	modules: ['@nuxt/ui', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image'],

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
				h4: true,
				h5: true,
				h6: true,
			},
		},

		preview: {
			api: 'https://api.nuxt.studio',
			dev: true,
		},
	},
});
