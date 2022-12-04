<script>
	import { quiz_array } from '../stores/QuizQuestions.js';

	// subscribe to the store
	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});
</script>

<!-- print user selected values -->
<section>
	{#each quiz as question}
		<h1>{question.question}</h1>
		<p>{question.user_selected}</p>
	{/each}
</section>
