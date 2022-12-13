<script>
	import Button from '/src/lib/Button.svelte';
</script>

<section>
	<h2>Ой, что-то пошло не так...</h2>
	<h2>Кажется, страница обновилась или вы неправильно ввели адрес.</h2>
	<h3>Попробуйте вернуться на <a href="/">главную</a> страницу.</h3>
	<div class="wrapper"><Button href="/" text="На главную" size="3" /></div>
</section>

<style>
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

	h1,
	h2,
	h3 {
		text-align: center;
		color: var(--safetybox-yellow);
	}

	a {
		color: var(--color-primary);
	}
</style>
