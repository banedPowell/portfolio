<script lang="ts" setup>
	const props = defineProps<{
		icon: string;
		tech?: boolean;
		link?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}>();
</script>

<template>
	<li v-if="link" class="list-none">
		<NuxtLink
			:to="link"
			:target="target"
			class="hover:bg-dark-800 group/islink flex w-fit cursor-pointer flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 text-gray-400 transition-colors select-none hover:text-gray-300"
			:class="tech ? 'font-mono' : 'font-sans'"
		>
			<div
				class="from-dark-600 to-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] bg-gradient-to-b p-1.5 transition-all group-hover/islink:-translate-y-2 group-hover/islink:scale-115 group-hover/islink:rotate-10 group-hover/islink:shadow-md group-hover/islink:shadow-gray-300/20"
			>
				<Icon :name="icon" size="32px" class="text-gray-300" />
			</div>

			<slot mdc-unwrap="p" />
		</NuxtLink>
	</li>

	<li
		v-else
		class="hover:bg-dark-800 group flex w-fit list-none flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 text-gray-400 transition-colors select-none hover:text-gray-300"
		:class="tech ? 'font-mono' : 'font-sans'"
	>
		<div
			class="from-dark-600 to-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] bg-gradient-to-b p-1.5 transition-all group-hover:scale-110 group-hover:rotate-10 group-hover:shadow-sm group-hover:shadow-gray-300/20"
		>
			<Icon :name="icon" size="32px" class="text-gray-300" />
		</div>

		<slot mdc-unwrap="p" />
	</li>
</template>
