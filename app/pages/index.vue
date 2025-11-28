<script lang="ts" setup>
	const { data: page } = await useAsyncData('page', () => {
		return queryCollection('pages').path('/pages/').first();
	});

	useSeoMeta({
		ogTitle: page?.value?.seo?.title,
		description: page?.value?.seo?.description,
		ogDescription: page?.value?.seo?.description,
		ogImage: page?.value?.seo?.image,
		ogUrl: page?.value?.seo?.url,
		twitterTitle: page?.value?.seo?.title,
		twitterDescription: page?.value?.seo?.description,
		twitterImage: page?.value?.seo?.image,
		twitterCard: 'summary_large_image',
		twitterCreator: '@banedpowell',
	});

	useSchemaOrg([
		definePerson({
			name: 'Rubén De Carvalho',
			alternateName: 'banedPowell',
			url: 'https://baned.me',
			description: () => page?.value?.seo?.description,
			jobTitle: 'Développeur web Fullstack',
			image: '/baned.png',
			sameAs: [
				'https://www.linkedin.com/in/rub%C3%A9ndc/',
				'https://bento.me/banedpowell',
				'https://www.malt.fr/profile/rubendecarvalho',
				'https://github.com/banedPowell',
				'https://twitter.com/banedpowell',
				'https://www.instagram.com/banedPowell',
				'mailto:contact@baned.me',
			],
			email: 'contact@baned.me',
			worksFor: 'Rubén De Carvalho',
		}),

		defineQuestion({
			name: 'Dans quelles technologies es-tu spécialisé ?',
			acceptedAnswer:
				'Je travaille principalement avec Nuxt, Vue, Typescript, Node.js et TailwindCSS, ce qui me permet de créer des interfaces rapides, fiables et élégantes.',
		}),
		defineQuestion({
			name: 'Peux-tu créer un site complet pour un client ?',
			acceptedAnswer:
				'Oui, je peux réaliser un site vitrine, un blog, un portfolio ou tout autre projet web, de la maquette jusqu’à la mise en ligne.',
		}),
		defineQuestion({
			name: 'Développes-tu des applications web plus complexes ?',
			acceptedAnswer:
				'Oui, je peux concevoir des applications personnalisées pour automatiser des processus, connecter différents services ou créer un outil métier spécifique.',
		}),
		defineQuestion({
			name: 'Que proposes-tu pour améliorer le référencement de mon site ?',
			acceptedAnswer:
				'J’améliore la structure technique, les performances et le contenu pour aider votre site à être mieux référencé sur les moteurs de recherche.',
		}),
		defineQuestion({
			name: 'Est-il possible de travailler avec toi sur des maquettes Figma ?',
			acceptedAnswer:
				'Oui, je crée des maquettes fonctionnelles pour visualiser le projet avant son développement.',
		}),
		defineQuestion({
			name: 'Assures-tu la maintenance d’un site web après la livraison ?',
			acceptedAnswer:
				'Oui, je peux optimiser les performances, corriger des bugs, mettre à jour les outils et renforcer la sécurité de votre site.',
		}),
		defineQuestion({
			name: 'Peux-tu m’aider à déployer mon site en ligne ?',
			acceptedAnswer:
				'Oui, je gère la publication, le déploiement et la configuration afin que votre site soit accessible, performant et sécurisé.',
		}),
		defineQuestion({
			name: "Proposes-tu des outils d'analyse des statistiques d’un site ?",
			acceptedAnswer:
				'Absolument, je peux mettre en place Posthog par exemple, pour comprendre le comportement des visiteurs et vous aider à prendre des décisions éclairées.',
		}),
		defineQuestion({
			name: 'Quels sont vos tarifs ?',
			acceptedAnswer:
				'Mes tarifs sont de 350€ par jour, selon la complexité du projet.',
		}),
		defineQuestion({
			name: 'Dans quelle région de France travaillez-vous ?',
			acceptedAnswer:
				'Je travaille principalement en région parisienne, mais je peux travailler à distance et à l’étranger.',
		}),
	]);

	useHead({
		htmlAttrs: {
			lang: page?.value?.seo?.locale,
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/baned.png',
			},
		],
	});

	definePageMeta({
		colorMode: 'dark',
	});
</script>

<template>
	<div class="hidden text-red-400">
		To activate some tailwind classes, add them to this hidden div
	</div>

	<ContentRenderer
		class="flex w-full flex-col gap-20"
		v-if="page"
		:value="page"
	/>
</template>
