<script lang="ts" setup></script>

<template>
	<footer
		class="flex h-fit w-full max-w-5xl flex-col items-center justify-between gap-10 p-5 pb-15"
	>
		<USeparator class="w-full" />

		<div class="flex w-full flex-col gap-20 text-sm sm:flex-row">
			<slot />
		</div>
	</footer>
</template>
