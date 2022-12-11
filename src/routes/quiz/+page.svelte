<script>
	import Question from './Question.svelte';
	import Radio from './Radio.svelte';
	import { quiz_array } from '../stores/QuizQuestions.js';
	import Footer from './Footer.svelte';
	import { current_question_index } from '../stores/QuizQuestions.js';
	import { leftDecorationBackgroundStore } from '../stores/LeftDecorationBackground';

	// import stores
	let current_question;
	current_question_index.subscribe((value) => {
		current_question = value;
	});

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let leftDecorationBackground;
	leftDecorationBackgroundStore.subscribe((value) => {
		leftDecorationBackground = value;
	});

	leftDecorationBackgroundStore.set(0);

	function handleRadioChange(event) {
		// console.log(event.detail.value);
		quiz_array.update((value) => {
			value[current_question].user_selected = event.detail.value;
			return value;
		});
	}
</script>

<svelte:head>
	<title>Quiz</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div id="main-container">
		<div class="wrapper">
			<Question question_text={quiz[current_question].question} />
			<div id="radio">
				<Radio
					legend="Выберите ответ:"
					options={quiz[current_question].answers}
					userSelected={quiz[current_question].user_selected}
					on:change={handleRadioChange}
				/>
			</div>
		</div>
		<Footer />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 85%;
		width: 100%;
		margin-left: 5%;
	}

	#radio {
		margin-bottom: 2rem;
	}

	#main-container {
		width: 90%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: flex-start;
	}

	@media only screen and (max-width: 600px) {
		section {
			margin-left: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
	}
</style>
