<script>
	import Button from '/src/lib/Button.svelte';
</script>

<section>
	<div class="wrapper"><Button href="/" text="На главную" size="3" /></div>
</section>

<style>
	:global(body) {
		overflow: hidden;
		margin: 0;
	}
	.wrapper {
		margin-top: 2rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background: var(--red-background);
	}
</style>
