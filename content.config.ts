import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			type: 'page',
			source: 'pages/*.md',
		}),

		layout: defineCollection({
			type: 'page',
			source: 'layout/*.md',
		}),

		projects: defineCollection({
			type: 'page',
			source: 'projects/*.md',
		}),
	},
});
