<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Murecho:wght@100..900&display=swap");

	:global(:root) {
		/* =========================
	   CORE INK / PAPER SYSTEM
	   ========================= */
		--ink: #241b1a; /* sumi ink */
		--ink-soft: rgba(36, 27, 26, 0.85);
		--muted: rgba(36, 27, 26, 0.6);

		/* Paper */
		--paper: #ffffff;
		--paper-soft: rgba(255, 255, 255, 0.82);

		/* =========================
	   RED-FOCUSED ACCENTS
	   ========================= */
		--coral: #ff5c4a; /* main accent (seal red) */
		--coral-strong: #e84a3a;
		--orange: #ff7a3c; /* supporting, not primary */

		/* Washes (used sparingly) */
		--wash: rgba(255, 92, 74, 0.18);
		--wash-strong: rgba(255, 92, 74, 0.28);
		--wash2: rgba(255, 92, 74, 0.12);

		/* =========================
	   STROKES / BORDERS
	   ========================= */
		--stroke: rgba(36, 27, 26, 0.18);
		--stroke-strong: rgba(36, 27, 26, 0.32);
		--stroke-accent: rgba(255, 92, 74, 0.45);

		/* =========================
	   SHADOWS (INK + STAMP)
	   ========================= */
		--shadow-soft: 0 4px 10px rgba(36, 27, 26, 0.04);
		--shadow: 0 8px 18px rgba(36, 27, 26, 0.06);
		--shadow-accent: 0 10px 22px rgba(255, 92, 74, 0.08);

		/* =========================
	   RADII (PRINT-LIKE)
	   ========================= */
		--radius-sm: 0.9rem;
		--radius-md: 1.35rem;
		--radius-lg: 1.9rem;

		/* =========================
	   GRADIENTS (USED RARELY)
	   ========================= */
		--linear-grad: linear-gradient(90deg, rgba(255, 92, 74, 0.32), rgba(255, 92, 74, 0.16));

		/* =========================
	   TYPOGRAPHY
	   ========================= */
		--font: "Murecho";

		font-family:
			var(--font),
			ui-sans-serif,
			system-ui,
			-apple-system;

		/* =========================
	   GLOBAL TUNING
	   ========================= */
		color-scheme: light;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
