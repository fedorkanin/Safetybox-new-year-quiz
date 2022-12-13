<script>
	export let background = false;
</script>

<div class="left_decoration" class:gradient-background={background}>
	<img src="/src/static/graphics/hanging_asset_question.svg" alt="" />
	<h3>Курс на новогоднее настроение</h3>
</div>

<style>
	.left_decoration {
		position: relative;
		width: 30%;
		max-width: 15rem;
		height: 100vh;
		overflow: hidden;
	}
	.left_decoration img {
		position: absolute;
		width: 85%;
		top: -10%;
		left: 50%;
		transform: translate(-50%, 0);
	}

	.left_decoration h3 {
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
		.left_decoration {
			height: 30vh;
			max-width: 100%;
			width: 100%;
		}
		.left_decoration img {
			top: auto;
			bottom: 10%;
		}
		h3 {
			opacity: 0;
		}
		.gradient-background {
			background: none;
		}
	}
</style>
