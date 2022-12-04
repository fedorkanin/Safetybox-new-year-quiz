<script>
	import Question from './Question.svelte';
	import Radio from './Radio.svelte';
	import { quiz_array } from '../stores/QuizQuestions.js';

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let current_question = 0;
	let selected_answer_value = null;

	// handle next button click
	function nextQuestion() {
		if (current_question < quiz.length - 1) {
			current_question += 1;
		}
	}

	function previousQuestion() {
		if (current_question > 0) {
			current_question -= 1;
		}
	}

	function handleRadioChange(event) {
		console.log(event.detail.value);
		quiz[current_question].user_selected = event.detail.value;
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

	<!-- if there is next quextion, display next button, otherwize display "end quiz" button -->
	<div class="wrapper">
		{#if current_question > 0}
			<button on:click={previousQuestion}>Назад</button>
		{/if}

		{#if current_question < quiz.length - 1}
			<button on:click={nextQuestion}>Далее</button>
		{:else}
			<a href="../quiz_end">
				<button>Завершить</button>
			</a>
		{/if}
	</div>
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
	}
</style>
