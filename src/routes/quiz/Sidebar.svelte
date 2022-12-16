<script>
	export let background = false;
</script>

<div class="sidebar" class:gradient-background={background}>
	<img src="/src/static/graphics/hanging_with_decoration.svg" alt="" />
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
		transform: translate(-50%, -1%);
	}
	.gradient-background {
		background: linear-gradient(120deg, #962f32, #420604);
	}

	@media only screen and (max-width: 900px) {
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
		.gradient-background {
			background: none;
		}
	}
</style>
