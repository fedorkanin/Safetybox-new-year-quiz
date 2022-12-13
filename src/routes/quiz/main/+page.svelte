<script>
	import Radio from './Radio.svelte';
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import { current_question_index } from '/src/routes/stores/QuizQuestions.js';
	import { leftDecorationBackgroundStore } from '/src/routes/stores/LeftDecorationBackground';

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
		quiz_array.update((value) => {
			value[current_question].user_selected = event.detail.value;
			return value;
		});
		console.log(quiz);
	}

	if (current_question === -1) {
		current_question_index.set(0);
	}
</script>

<svelte:head>
	<title>Quiz</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="wrapper">
		<h2>
			{quiz[current_question].question}
		</h2>
		<h3>Выберите ответ</h3>
		<Radio
			options={quiz[current_question].answers}
			userSelected={quiz[current_question].user_selected}
			on:change={handleRadioChange}
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 85%;
		width: 90%;
	}
	h3 {
		font-style: italic;
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
