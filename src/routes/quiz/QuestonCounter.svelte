<script>
	// import stores
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import { current_question_index } from '/src/routes/stores/QuizQuestions.js';
	import { page } from '$app/stores';

	// subscribe to store
	let is_greeting;
	page.subscribe((value) => {
		is_greeting = value.url.pathname === '/quiz/greeting';
	});

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
	<div class="question_counter" class:hide={is_greeting}>
		<h3>Вопрос {from}/</h3>
		<h3>{to}</h3>
	</div>
</section>

<style>
	.hide {
		opacity: 0;
	}
	.question_counter {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height: fit-content;
	}

	.question_counter h3 {
		font-weight: 300;
		margin: 0;
		color: var(--safetybox-yellow);
	}

	.question_counter h3:last-child {
		color: gray;
	}
</style>
