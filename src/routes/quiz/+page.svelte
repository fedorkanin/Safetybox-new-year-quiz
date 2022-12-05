<script>
	import Question from './Question.svelte';
	import Radio from './Radio.svelte';
	import { quiz_array } from '../stores/QuizQuestions.js';
	import Footer from './Footer.svelte';
	import { current_question_index } from '../stores/QuizQuestions.js';

	// import stores
	let current_question;
	current_question_index.subscribe((value) => {
		current_question = value;
	});

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

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
	<Question question_text={quiz[current_question].question} />

	<Radio
		legend="Выберите ответ"
		options={quiz[current_question].answers}
		userSelected={quiz[current_question].user_selected}
		on:change={handleRadioChange}
	/>

	<Footer />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 30%;
	}

	button {
		width: 100px;
		height: 50px;
		border-radius: 15px;
		background-color: #f3b65b;
		border-style: none;
	}
</style>
