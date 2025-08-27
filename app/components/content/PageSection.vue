<script lang="ts" setup></script>

<template>
	<section class="flex flex-col gap-5">
		<h2 class="text-2xl text-gray-300">
			<slot name="title" />
		</h2>
		<slot name="content" />
	</section>
</template>
