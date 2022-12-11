<script>
</script>

<svelte:head>
	<title>SafetyBox</title>
</svelte:head>

<section>
	<div class="text">
		<h2>Перед прохождением курса пройдите небольшой тест. Всего 5 вопросов!</h2>
		<h2>Это позволит нам лучше сформировать ваш персональный курс на новогоднее настроение.</h2>
	</div>
	<div class="container"><button><a href="/quiz" class="button">Начать тест</a></button></div>
</section>

<style>
	.container {
		width: 100%;
		height: 4rem;
		margin-bottom: 4rem;
	}
	.text {
		height: fit-content;
	}
	.text h2 {
		margin: 5rem 0 5rem 0;
		font-size: 2rem;
	}
	section {
		margin: 0;
		padding: 0;
		width: 70%;
		height: 100%;
		margin-left: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	button {
		height: 100%;
		aspect-ratio: 3;
		background-color: var(--safetybox-yellow);
		border: none;
		border-radius: 0.8rem;
	}
	a {
		text-decoration: none;
		color: black;
		font-weight: 600;
		font-size: 1.5rem;
	}

	@media only screen and (max-width: 600px) {
		section {
			color: var(--safetybox-yellow);
			flex-direction: column;
			align-items: center;
			margin: auto;
			width: 80%;
		}
		.text h2 {
			font-size: 1.5rem;
			margin: 2rem 0 2rem 0;
		}
		.container {
			display: flex;
			justify-content: center;
			margin-bottom: 2rem;
		}
	}
</style>
