<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- quiz welcome page with a begin button -->
	<div class="curtain">
		<div class="container">
			<img class="garland" src="/src/static/graphics/hanging_garland.svg" alt="" />
			<img class="box" src="/src/static/graphics/welcome_hanging_box.svg" alt="" />
			<div class="text">
				<h1>Курс на новогоднее настроение!</h1>
			</div>
		</div>
	</div>

	<a href="/quiz" class="button">Начать тест</a>
</section>

<style>
	section {
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
	}

	.curtain {
		position: absolute;
		width: 100vw;
		height: 110vh;
		background: linear-gradient(120deg, #962f32, #420604);
		margin: 0;
		bottom: 0;
	}

	/* going up animation for curtain */
	.curtain {
		animation: curtain-up 1.8s ease-in-out;
		animation-fill-mode: forwards;
		animation-delay: 0.5s;
	}

	@keyframes curtain-up {
		0% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(10vh);
		}
		100% {
			transform: translateY(-130vh);
		}
	}

	.container {
		position: absolute;
		/* max-width: 94vw; */
		width: 90vw;
		height: 100vh;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.box {
		position: absolute;
		height: 70vh;
		width: auto;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.garland {
		position: absolute;
		height: 95vh;
		width: auto;
		top: 0;
		left: 0;
	}

	.curtain .text {
		position: absolute;
		max-width: 25em;
		bottom: 10%;
		right: 4%;
	}

	.curtain .text h1 {
		font-family: 'Montserrat', sans-serif;
		font-size: 4em;
		color: #f9d56e;
		text-align: left;
		margin: 0;
		width: fit-content;

		/* drop dark shadow */
		text-shadow: 0.3em 0.3em 0.5em #343026;
	}
</style>
