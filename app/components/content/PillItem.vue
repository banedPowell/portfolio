<script lang="ts" setup>
	export interface PillItem {}

	const props = defineProps<{
		icon: string;
		tech: boolean;
		link?: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	}>();
</script>

<template>
	<li v-if="link">
		<NuxtLink
			:to="link"
			:target="target"
			class="hover:bg-dark-700 flex w-fit cursor-pointer flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 transition-colors select-none"
		>
			<div
				class="bg-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] p-1.5"
			>
				<Icon :name="icon" size="32px" class="text-gray-300" />
			</div>

			<p class="text-gray-500" :class="tech ? 'font-mono' : 'font-sans'">
				<slot />
			</p>
		</NuxtLink>
	</li>

	<li
		v-else
		class="hover:bg-dark-700 flex w-fit flex-row items-center gap-2.5 rounded-[10px] p-[5px] pr-8 transition-colors select-none"
		:class="link ? 'cursor-pointer' : ''"
	>
		<div
			class="bg-dark-800 flex aspect-square size-[32px] items-center justify-center rounded-[5px] p-1.5"
		>
			<Icon :name="icon" size="32px" class="text-gray-300" />
		</div>

		<p class="text-gray-500" :class="tech ? 'font-mono' : 'font-sans'">
			<slot />
		</p>
	</li>
</template>
