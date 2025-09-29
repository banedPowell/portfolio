<script lang="ts" setup>
	const props = defineProps<{
		icon: string;
		tech?: boolean;
		link?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}>();
</script>

<template>
	<li v-if="link">
		<NuxtLink
			:to="link"
			:target="target"
			class="hover:bg-dark-900 group flex w-fit cursor-pointer flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 transition-colors select-none hover:text-gray-300"
			:class="tech ? 'font-mono' : 'font-sans'"
		>
			<div
				class="from-dark-600 to-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] bg-gradient-to-b p-1.5 transition-all group-hover:-translate-y-2 group-hover:scale-115 group-hover:rotate-10"
			>
				<Icon :name="icon" size="32px" class="text-gray-300" />
			</div>

			<slot />
		</NuxtLink>
	</li>

	<li
		v-else
		class="hover:bg-dark-800 group flex w-fit flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 transition-colors select-none"
		:class="tech ? 'font-mono' : 'font-sans'"
	>
		<div
			class="from-dark-600 to-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] bg-gradient-to-b p-1.5 transition-all group-hover:scale-110 group-hover:rotate-10"
		>
			<Icon :name="icon" size="32px" class="text-gray-300" />
		</div>

		<p>
			<slot />
		</p>
	</li>
</template>
