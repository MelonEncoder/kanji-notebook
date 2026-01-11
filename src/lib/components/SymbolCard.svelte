<script lang="ts">
	let {
		selected,
		symbol,
		subText,
		progress = 0,
		onclick
	} = $props<{
		selected: boolean;
		symbol: string;
		subText: string | null;
		progress?: 0 | 1 | 2 | 3 | 4 | 5;
		onclick: () => void;
	}>();

	function calcWidthFromProgress(progress: number) {
		return `${progress * 20}%`;
	}
</script>

<button
	class="symbol-card"
	class:selected
	type="button"
	aria-label={`Symbol ${symbol}`}
	aria-pressed={selected}
	{onclick}
>
	<div class="symbol">{symbol}</div>
	{#if subText}
		<div class="sub-text">{subText}</div>
	{/if}
	<div class="symbol-progress">
		<div class="progress-indecator" style:width={calcWidthFromProgress(progress)}></div>
	</div>
</button>

<style>
	.symbol-card {
		display: grid;
		gap: 0.2rem;
		place-items: center;
		min-height: 5rem;
		height: fit-content;
		padding: 0.5rem 0.2rem 0.5rem 0.2rem;
		border-radius: var(--radius-sm);
		border: 2px solid var(--stroke);
		background: var(--paper);
		box-shadow: var(--shadow-soft);
		cursor: pointer;
		transition:
			transform 140ms ease,
			border-color 140ms ease,
			box-shadow 140ms ease,
			background 140ms ease;
	}

	.symbol-card:hover {
		transform: translateY(-3px);
		border-color: var(--stroke-accent);
		box-shadow: var(--shadow);
	}

	.symbol-card:active {
		transform: translateY(-1px);
		box-shadow: var(--shadow-soft);
	}

	.symbol-card:focus-visible {
		outline: 3px solid var(--stroke-accent);
		outline-offset: 3px;
	}

	.symbol-card.selected {
		border-color: var(--stroke-accent);
		box-shadow: var(--shadow);
		background: rgba(255, 255, 255, 0.92);
	}

	.symbol {
		font-size: 2rem;
		font-weight: 800;
		line-height: 1;
		color: var(--ink);
	}

	.sub-text {
		font-size: 0.9rem;
		line-height: 1;
		margin: 0.25rem 0rem;
		color: var(--muted);
	}

	.symbol-progress {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		height: 0.5rem;
		border-radius: 1rem;
		width: 80%;
		overflow: hidden;
		background-color: lightgray;
	}

	.progress-indecator {
		background-color: var(--orange);
		height: 100%;
		width: 40%;
		border-radius: 1rem;
	}
</style>
