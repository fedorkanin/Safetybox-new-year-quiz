<script>
</script>

<svelte:head>
	<title>SafetyBox</title>
</svelte:head>

<section>
	<h1>
		Ответьте на 4 вопроса, чтобы определить правильный курс<br />на
		<span style="color: var(--safetybox-yellow);">Новый Год!</span>
	</h1>
</section>

<style>
	section {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	h1 {
		font-weight: 500;
		font-size: 3.5em;
	}
	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
			justify-content: flex-start;
			width: 80%;
		}
		h1 {
			font-size: 2.5em;
		}
	}
</style>
