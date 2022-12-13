<script>
</script>

<svelte:head>
	<title>SafetyBox</title>
</svelte:head>

<section>
	<h2>Пройдите небольшой тест! Всего 4 вопроса!</h2>
	<h2>Это позволит нам лучше сформировать ваш персональный курс на новогоднее настроение.</h2>
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
			color: var(--safetybox-yellow);
			flex-direction: column;
			align-items: center;
			margin: auto;
			width: 80%;
		}
		h2 {
			margin: 2rem 0 2rem 0;
		}
	}
</style>
