<script lang="ts" setup></script>

<template>
	<ul class="FOOTERSECTION flex flex-col items-start justify-start gap-1">
		<li>
			<h4 class="mb-1.5 font-black">
				<slot name="title" />
			</h4>
		</li>

		<slot name="items" />
	</ul>
</template>
