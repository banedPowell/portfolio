import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		pages: defineCollection({
			type: 'page',
			source: 'pages/*.md',
			schema: z.object({
				seo: z.object({
					title: z.string(),
					description: z.string(),
					image: z.string(),
					url: z.string(),
					locale: z.string(),
				}),
			}),
		}),

		layout: defineCollection({
			type: 'page',
			source: 'layout/*.md',
		}),

		projects: defineCollection({
			type: 'page',
			source: 'projects/*.md',
			schema: z.object({
				position: z.number(),
				card: z.object({
					title: z.string(),
					description: z.string(),
					projectIcon: z.string(),
					iconAlt: z.string(),
				}),
				seo: z.object({
					title: z.string(),
					description: z.string(),
					image: z.string(),
					url: z.string(),
					locale: z.string(),
				}),
			}),
		}),
	},
});
