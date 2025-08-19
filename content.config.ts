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
			schema: z.object({
				sections: z.array(
					z.object({
						title: z.string(),
						items: z.array(
							z.object({
								text: z.string(),
								icon: z.string().optional(),
								link: z.string().optional(),
							}),
						),
					}),
				),
			}),
		}),
	},
});
