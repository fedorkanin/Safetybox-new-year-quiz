<script>
	import Curtain from './Curtain.svelte';
	import { leftDecorationBackgroundStore } from './stores/LeftDecorationBackground.js';
	import { current_question_index } from './stores/QuizQuestions.js';
	import './styles.css';

	// subscribe to store
	let leftDecorationBackground;
	leftDecorationBackgroundStore.subscribe((value) => {
		leftDecorationBackground = value;
	});

	let current_question;
	current_question_index.subscribe((value) => {
		current_question = value;
	});

	// if current question is 4, scroll to main content
	$: if (current_question === 4) {
		console.log('scrolling');
		window.scrollTo(0, document.body.scrollHeight);
	}
</script>

<section class:all-background={leftDecorationBackground}>
	<div class="left_decoration" class:left_decoration_with_background={leftDecorationBackground}>
		<img src="/src/static/graphics/hanging_asset_question.svg" alt="" />
		<h3>Курс на новогодее настроение</h3>
	</div>
	<div class="main_content" class:hide_left_decoration={current_question === 4}>
		<slot />
	</div>
</section>

<Curtain />

<style>
	/* global variables with color */
	:global(body) {
		/* font-family: 'Inter', sans-serif; */
		font-family: 'Helvetica', sans-serif;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.left_decoration {
		position: relative;
		width: 30%;
		max-width: 15rem;
		height: 100vh;
		overflow: hidden;
	}

	.left_decoration_with_background {
		background: linear-gradient(120deg, #962f32, #420604);
	}

	.main_content {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
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

	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
			margin: 0;
		}
		.left_decoration {
			height: 30vh;
			max-width: 100%;
			width: 100%;
		}
		.main_content {
			height: 70vh;
			margin: 0;
		}
		.left_decoration img {
			top: auto;
			bottom: 10%;
		}
		.left_decoration_with_background {
			background: none;
		}
		.all-background {
			background: linear-gradient(120deg, #962f32, #420604);
		}
		.main_content {
			flex-direction: column;
			align-items: flex-start;
		}
		h3 {
			opacity: 0;
		}
		.hide_left_decoration {
			height: fit-content;
		}
		:global(body) {
			overflow: visible;
		}
	}
</style>
