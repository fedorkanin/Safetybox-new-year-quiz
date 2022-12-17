<script>
	import Button from '$lib/Button.svelte';
	import Star from '$lib/Star.svelte';

	let hide_on_mobile = true;
</script>

<section>
	<img class="garland" src="/src/static/graphics/hanging_garland.svg" alt="" />

	<Star size="10" left="10" top="10" rotate="0" {hide_on_mobile} />
	<Star size="10" left="20" top="40" rotate="0" {hide_on_mobile} />
	<Star size="10" left="30" top="50" rotate="0" {hide_on_mobile} />
	<Star size="10" left="20" bottom="25" rotate="0" {hide_on_mobile} />
	<div id="box-with-stars">
		<Star size="10" right="22" bottom="40" rotate="-15" />
		<Star size="10" left="0" bottom="0" rotate="0" />
		<img id="box" src="/src/static/graphics/hanging-box-slide1.svg" alt="" />
	</div>
	<div class="container">
		<h1>Курс на&nbsp;новогоднее настроение</h1>
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
	}
	h1 {
		color: var(--soft-white);
		font-family: 'Arial Nova Cond Light';
		text-transform: uppercase;
		text-shadow: rgba(31, 23, 17, 0.5) 0.3rem 0.3rem 0.5rem;
		width: fit-content;
		font-size: 4em;
	}
	.container {
		position: absolute;
		/* right: calc(20% - 12rem); */
		left: 60%;
		height: 90%;
		max-width: 30em;
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
		width: fit-content;
		top: -2%;
		left: 5%;
	}
	#box-with-stars {
		position: absolute;
		left: 38%;
		width: 12em;
		top: 37%;
		transform: translateY(-83.5%);
		z-index: 1;
	}
	#box {
		width: 100%;
		height: auto;
		mix-blend-mode: normal;
	}

	@media (max-width: 1200px) {
		.garland {
			height: 70%;
		}
	}

	@media (max-width: 900px) {
		section {
			display: flex;
			justify-content: center;
		}
		.container {
			position: relative;
			width: 90%;
			top: 50%;
			right: auto;
			left: auto;
			height: fit-content;
			transform: none;
			align-items: center;
		}
		h1 {
			font-size: 3em;
			text-align: center;
			margin-bottom: 1em;
		}
		.garland {
			height: 50%;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0.8;
			top: -5%;
		}
		#box-with-stars {
			transform: translate(-50%, -83.5%);
			top: 30%;
			left: 50%;

			display: flex;
			justify-content: center;
		}
	}
	@media screen and (max-width: 400px) and (max-height: 700px) {
		#box-with-stars {
			width: 10em;
			transform: translate(-50%, -83.5%);
			top: 30%;
			left: 50%;

			display: flex;
			justify-content: center;
		}
	}
</style>
