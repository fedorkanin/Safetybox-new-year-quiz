<script>
</script>

<svelte:head>
	<title>SafetyBox</title>
</svelte:head>

<section>
	<h2>Ответьте на 4 вопроса, чтобы определить правильный курс на Новый год.</h2>
</section>

<style>
	section {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
			justify-content: flex-start;
			width: 80%;
		}
	}
</style>
