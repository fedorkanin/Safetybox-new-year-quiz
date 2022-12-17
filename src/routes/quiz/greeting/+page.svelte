<script>
</script>

<svelte:head>
	<title>SafetyBox</title>
</svelte:head>

<section>
	<h1>
		Ответьте на&nbsp;4&nbsp;вопроса, чтобы определить правильный курс на&nbsp;<span
			style="color: var(--safetybox-yellow);">Новый&nbsp;Год!</span
		>
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
	@media only screen and (max-width: 900px) {
		section {
			flex-direction: column;
			justify-content: flex-start;
			width: 80%;
		}
		h1 {
			font-size: 2.5em;
		}
	}
	@media screen and (max-width: 400px) and (max-height: 700px) {
		h1 {
			font-size: 2em;
		}
	}
</style>
