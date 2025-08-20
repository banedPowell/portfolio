import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			type: 'page',
			source: 'pages/*.md',
			schema: z.object({
				title: z.string().optional(),
				description: z.string().optional(),
				image: z
					.object({
						src: z.string().editor({ input: 'media' }),
						alt: z.string(),
					})
					.optional(),
				date: z.date().optional(),
				draft: z.boolean().default(false),
				layout: z.string().optional(),
			}),
		}),

		layout: defineCollection({
			type: 'page',
			source: 'layout/*.md',
			schema: z.object({
				title: z.string().optional(),
				description: z.string().optional(),
				section: z.string().optional(),
				order: z.number().optional(),
			}),
		}),
	},
});
