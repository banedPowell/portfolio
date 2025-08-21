import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			type: 'page',
			source: 'pages/*.md',
		}),

		layout: defineCollection({
			type: 'data',
			source: 'layout/*.md',
			schema: z.object({
				layoutComponentType: z.enum(['header', 'footer']),
			}),
		}),
	},
});
