<script>
	import Button from '$lib/Button.svelte';
	import star2 from '$lib/assets_new/star2.png';
	import Star from '$lib/Star.svelte';

	// $: is_mobile = !window.matchMedia('(min-width: 600px)');
	let is_mobile = false;
</script>

<section>
	<div id="darker" />
	<img class="garland" src="/src/static/graphics/hanging_garland.svg" alt="" />

	<Star size="10" left="10" top="10" rotate="0" hide={is_mobile} />
	<Star size="10" left="20" top="40" rotate="0" hide={is_mobile} />
	<Star size="10" left="30" top="50" rotate="0" hide={is_mobile} />
	<Star size="10" left="20" bottom="25" rotate="0" hide={is_mobile} />
	<div id="box-with-stars">
		<Star size="10" right="22" bottom="40" rotate="-15" />
		<Star size="10" left="0" bottom="0" rotate="0" hide={is_mobile} />
		<img id="box" src="/src/static/graphics/welcome_hanging_box.svg" alt="" />
	</div>
	<div class="container">
		<h1>Курс<br />на новогоднее настроение</h1>
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
		color: var(--soft-white);
		font-family: 'Arial Nova Cond Light';
		text-transform: uppercase;
		text-shadow: rgba(31, 23, 17, 0.5) 0.3rem 0.3rem 0.5rem;
		width: fit-content;
	}
	.container {
		position: absolute;
		right: calc(20% - 12rem);
		height: 90%;
		max-width: 30rem;
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
	#box-with-stars {
		position: absolute;
		height: 60%;
		width: auto;
		right: 47%;
		z-index: 1;
	}
	#box {
		height: 100%;
		width: auto;
		mix-blend-mode: normal;
	}
	/* .star {
		position: absolute;
		height: auto;
		opacity: 100%;

		animation: blinker 1.5s linear infinite;

		filter: drop-shadow(0 0 0.5rem rgb(254, 204, 78));

		mix-blend-mode: screen;
	}
	#star1 {
		width: 50%;
		left: 0;
		bottom: 0;
		animation-delay: 1s;
		transform: translate(-50%, 50%) rotate(60deg);
	}
	#star2 {
		width: 70%;
		right: 10%;
		top: 65%;
		transform: translate(50%, -50%) rotate(-60deg);
	}
	#star3 {
		width: 10rem;
		left: 10%;
		top: 10%;
		transform: translate(-50%, -50%);
	}
	#star4 {
		width: 10rem;
		right: 10%;
		top: 10%;
		transform: translate(50%, -50%);
		animation-delay: 0.5s;
	}
	#star5 {
		width: 10rem;
		left: 10%;
		bottom: 30%;
		transform: translate(-50%, 50%);
		animation-delay: 0.7s;
	} */

	/* animation star blinker */
	@keyframes blinker {
		50% {
			opacity: 50%;
		}
	}

	@media (max-width: 600px) {
		section {
			display: flex;
			flex-direction: column;
		}
		h1 {
			font-size: 3em;
			text-align: center;
			/* sharp 45 degree black shadow */
			text-shadow: black 5px 5px;
		}
		.garland {
			height: 50%;
			left: 50%;
			transform: translateX(-50%);
			opacity: 0.8;
		}
		#box-with-stars {
			height: 50%;
			top: -10%;
			right: 50%;
			transform: translateX(50%);
		}
	}
</style>
