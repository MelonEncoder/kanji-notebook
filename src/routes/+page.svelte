<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx;

	onMount(() => {
		if ((ctx = canvas.getContext('2d'))) {
			ctx.lineWidth = 4;
			ctx.strokeStyle = 'solid';
			ctx.beginPath();
			ctx.moveTo(20, 20);
			ctx.lineTo(200, 200);
			ctx.stroke();
		}
	});
</script>

<main class="main">
	<canvas class="drawing" bind:this={canvas} width="300px" height="300px"></canvas>
</main>

<style>
	.main {
		display: flex;
		justify-content: center;
	}
	.drawing {
		border: 1px solid black;
		align-self: center;
	}
</style>
