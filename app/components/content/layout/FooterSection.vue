<script lang="ts" setup></script>

<template>
	<ul class="flex flex-col items-start justify-start gap-1">
		<li>
			<slot name="title" />
		</li>

		<slot name="items" />
	</ul>
</template>
