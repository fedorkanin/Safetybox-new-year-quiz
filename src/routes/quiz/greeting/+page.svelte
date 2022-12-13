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
			flex-direction: column;
			justify-content: flex-start;
			width: 80%;
		}
	}
</style>
