<script>
	import Button from '../lib/Button.svelte';
</script>

<section>
	<div id="darker" />
	<img class="garland" src="/src/static/graphics/hanging_garland.svg" alt="" />
	<img class="box" src="/src/static/graphics/welcome_hanging_box.svg" alt="" />
	<div class="container">
		<h1>Курс на новогоднее настроение</h1>
		<Button text="Начать" href="/quiz/greeting" size="2.3" />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		background: linear-gradient(120deg, #962f32, #420604);
		position: absolute;
		top: 0;
		left: 0;
		/* transition all smooth */
		transition: all 0.5s ease-in-out;
	}
	#darker {
		position: absolute;
		background-color: black;
		height: 100%;
		width: 100%;
		opacity: 0;
	}
	h1 {
		color: var(--safetybox-yellow);
	}
	.container {
		position: absolute;
		right: 8%;
		height: 90%;
		max-width: 25rem;
		width: fit-content;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.garland {
		position: absolute;
		max-height: 90%;
		max-width: 90%;
		top: 0;
		left: 5%;
	}
	.box {
		position: absolute;
		height: 60%;
		width: auto;
		right: 50%;
		transform: translateX(50%);

		z-index: 1;
	}

	@media (max-width: 1200px) {
		.box {
			right: 60%;
			transform: none;
		}
		.container {
			right: 3%;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 3em;
			text-align: center;
			/* sharp 45 degree black shadow */
			text-shadow: black 5px 5px;
		}
		.garland {
			width: 90%;
			height: auto;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0.8;
		}
		.box {
			top: -20%;
		}
		.container {
			height: 50%;
			width: 100%;
			right: 0;
			bottom: 0;
			top: auto;
			transform: translateY(0);
			margin-bottom: 2em;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			justify-content: center;
			align-items: center;
		}
	}
</style>
