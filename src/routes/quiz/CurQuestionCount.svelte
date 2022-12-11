<script>
	// import stores
	import { quiz_array } from '../stores/QuizQuestions.js';
	import { current_question_index } from '../stores/QuizQuestions.js';

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let question_index;
	current_question_index.subscribe((value) => {
		question_index = value;
	});

	$: from = question_index + 1;
	$: to = quiz.length;
</script>

<section>
	<p>{from}</p>
	<p>/{to}</p>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		justify-content: center;
		width: fit-content;
		margin: 0 1rem 0 1rem;
	}
	p {
		font-size: 1.5em;
	}
	/*first p is yellow, second is grey  */
	p:first-child {
		color: var(--safetybox_yellow);
	}
	p:last-child {
		color: #b3b3b3;
	}
</style>
