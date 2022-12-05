<script>
	// import stores
	import { quiz_array } from '../stores/QuizQuestions.js';
	import { current_question_index } from '../stores/QuizQuestions.js';
	import ArrowButton from './ArrowButton.svelte';
	import CurQuestionCount from './CurQuestionCount.svelte';

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let question_index;
	current_question_index.subscribe((value) => {
		question_index = value;
	});

	function nextQuestion() {
		current_question_index.update((value) => {
			if (value < quiz.length - 1) {
				return value + 1;
			}
		});
	}

	function previousQuestion() {
		current_question_index.update((value) => {
			if (value > 0) {
				return value - 1;
			}
		});
	}

	// check if current question is answered reactively
	$: is_answered = quiz[question_index].user_selected !== null;
	$: is_forward_disabled = !is_answered || question_index === quiz.length - 1;
</script>

<!-- forward and backward buttons -->
<section>
	<ArrowButton direction="left" on:click={previousQuestion} greyed={question_index === 0} />
	<CurQuestionCount />
	<ArrowButton direction="right" on:click={nextQuestion} greyed={is_forward_disabled} />
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 100%;
		align-items: center;
		width: fit-content;
	}

	button {
		background: none;
		border: none;
	}

	button img {
		width: 4em;
		cursor: pointer;
	}
</style>
