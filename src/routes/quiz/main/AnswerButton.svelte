<script>
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import { current_question_index } from '/src/routes/stores/QuizQuestions.js';

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let question_index;
	current_question_index.subscribe((value) => {
		question_index = value;
	});

	$: is_last_question = question_index === quiz.length - 1;
	$: is_question_answered = quiz[question_index].user_selected !== null;

	function handleClick() {
		if (!is_last_question && is_question_answered) {
			current_question_index.update((n) => n + 1);
		}
	}
</script>

{#if is_last_question}
	<button>
		<a href="../quiz_end"><p>Завершить</p></a>
	</button>
{:else}
	<button on:click={handleClick}><p>Ответить</p></button>
{/if}

<style>
	button {
		background-color: var(--safetybox-yellow);
		border: none;
		border-radius: 20px;
		height: 100%;
		aspect-ratio: 3;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button:hover {
		background-color: var(--safetybox-yellow-hover);
	}

	a {
		text-decoration: none;
		color: black;
	}

	p {
		text-align: center;
		font-weight: 600;
	}

	@media only screen and (max-width: 600px) {
		button {
			display: none;
		}
	}
</style>
