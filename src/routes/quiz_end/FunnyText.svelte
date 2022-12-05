<script>
	export let fontSize = 16; // font size in pixels
	export let text = 'Hello world!'; // text to display
	export let animate = true; // boolean
	let letters = text.split('');
</script>

<section>
	{#each letters as letter, index}
		{#if letter === ' '}
			<span class:animated={animate} class="space" style="--i:{index}" />
		{:else}
			<span class:animated={animate} style="--i:{index}">{letter}</span>
		{/if}
	{/each}
</section>

<style>
	section {
		position: relative;
		font-size: 3em;
		font-weight: bold;
		line-height: 1.2em;
	}
	span {
		position: relative;
		display: inline-block;
		color: white;
	}
	span.animated {
		animation: waviy 1.3s infinite;
		animation-delay: calc(0.15s * var(--i));
	}

	.space {
		width: 0.3em;
	}

	@keyframes waviy {
		0%,
		40%,
		100% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(-20px);
		}
	}

	/* make text with a golden texture gradient */
	span {
		background: linear-gradient(120deg, #f9d56e, #f9d56e);
		background-size: 200% 200%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
	}
</style>
