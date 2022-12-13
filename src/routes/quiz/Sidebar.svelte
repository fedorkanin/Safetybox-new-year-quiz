<script>
	export let background = false;
</script>

<div class="sidebar" class:gradient-background={background}>
	<img src="/src/static/graphics/hanging_with_decoration.svg" alt="" />
	<h3>Курс на новогоднее настроение</h3>
</div>

<style>
	.sidebar {
		position: relative;
		width: 30%;
		max-width: 15rem;
		height: 100vh;
		overflow: hidden;
	}
	.sidebar img {
		position: absolute;
		width: 85%;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.sidebar h3 {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		min-width: 10em;
		bottom: 2em;
		text-align: left;
		color: #f3b65b;
		font-size: 1rem;
	}

	.gradient-background {
		background: linear-gradient(120deg, #962f32, #420604);
	}

	@media only screen and (max-width: 600px) {
		.sidebar {
			height: 30%;
			max-width: 100%;
			width: 100%;
		}
		.sidebar img {
			top: auto;
			bottom: 10%;
			height: 300%;
		}
		h3 {
			display: none;
		}
		.gradient-background {
			background: none;
		}
	}
</style>
