<script lang="ts" setup>
	import type { PillItem } from '~/components/PillItem.vue';

	const techStack: Array<PillItem> = [
		{
			content: 'Nuxt / Vue',
			icon: 'logos:nuxt-icon',
		},
		{
			content: 'Node.JS / Express.JS',
			icon: 'logos:nodejs-icon',
		},
		{
			content: 'SQL',
			icon: 'devicon:postgresql',
		},
		{
			content: 'Figma',
			icon: 'devicon:figma',
		},
		{
			content: 'Github',
			icon: 'ion:logo-github',
		},
	];

	const projectsList: Array<{
		title: string;
		description: string;
		projectIcon: string;
		iconAlt: string;
		slug: string;
		repoUrl: string;
	}> = [
		{
			title: 'Deezerstats',
			description:
				"Une application pour analyser les statistaiques d'écoutes deezer",
			projectIcon: '/deezerstats.png',
			iconAlt: 'Logo de Deezerstats',
			slug: 'deezerstats',
			repoUrl: 'https://github.com/banedpowell/deezerstats',
		},
		{
			title: 'Mon vieux grimoire',
			description:
				'Une application de référencement et de notation de livres en react',
			projectIcon: '/grimoire.png',
			iconAlt: 'Logo de "Mon vieux grimoire"',
			slug: 'grimoire',
			repoUrl: 'https://github.com/banedpowell/grimoire-backend',
		},
		{
			title: 'Cinemotion',
			description: 'Un client TMDB développé avec Nuxt 3 ',
			projectIcon: '/cinemotion.png',
			iconAlt: 'Logo de Cinemotion',
			slug: 'cinemotion',
			repoUrl: 'https://github.com/banedpowell/cinemotion',
		},
	];

	const contactsList: Array<PillItem> = [
		{
			content: 'github.com/banedPowell',
			icon: 'ion:logo-github',
			link: 'https://github.com/banedPowell/',
			target: '_blank',
		},
		{
			content: 'contact@baned.me',
			icon: 'lucide:mail',
			link: 'mailto:contact@baned.me',
		},
	];
</script>

<template>
	<div class="flex w-full flex-col gap-20 selection:bg-red-400/30">
		<section class="flex flex-row justify-between">
			<div class="flex w-full max-w-[500px] flex-col gap-7">
				<h1 class="font-display text-4xl font-medium text-gray-100">
					Salut ! Je suis <span class="text-red-400">Rubén</span>
				</h1>

				<p class="w-full text-gray-500">
					Développeur web Fullstack. Je travaille avec Nuxt,
					Typescript et Postgres. J'ai suivi le parcours Développeur
					Web d'Openclassrooms
				</p>
			</div>

			<NuxtImg
				src="/memoji.png"
				alt="Memoji de Rubén"
				class="illustration hidden aspect-square size-45 rounded-full md:block"
			/>
		</section>

		<PageSection title="Mes compétences et mes outils">
			<ul class="flex w-full flex-row flex-wrap gap-5">
				<PillItem
					v-for="tech in techStack"
					:pill="tech"
					:tech="true"
					:key="tech.content"
				/>
			</ul>
		</PageSection>

		<PageSection title="Mes projets">
			<ul class="grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
				<ProjectCard
					v-for="project in projectsList"
					:key="project.title"
					:project="project"
				/>
			</ul>
		</PageSection>

		<PageSection title="Me contacter">
			<ul class="grid list-none grid-cols-1 gap-5 sm:grid-cols-2">
				<PillItem
					v-for="contact in contactsList"
					:pill="contact"
					:key="contact.content"
				/>
			</ul>
		</PageSection>
	</div>
</template>

<style lang="css" scoped>
	.illustration {
		transform: rotate(5deg);
		transition: all 0.15s cubic-bezier(0.85, 0.85, 0, 1.57);

		&:hover {
			transform: rotate(-2deg) scale(1.05);
			transition: all 0.3s cubic-bezier(0.82, -1.27, 0, 1.57);
		}
	}
</style>
