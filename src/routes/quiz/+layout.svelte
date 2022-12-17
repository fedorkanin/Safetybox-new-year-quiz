<!-- redirect to main page -->
<script>
	import { current_question_index } from '/src/routes/stores/QuizQuestions.js';
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import { goto } from '$app/navigation';
	import Button from '../../lib/Button.svelte';
	import Sidebar from './Sidebar.svelte';
	import QuestonCounter from './QuestonCounter.svelte';
	import { page } from '$app/stores';

	let current_question;
	current_question_index.subscribe((value) => {
		current_question = value;
	});

	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let is_greeting;
	page.subscribe((value) => {
		is_greeting = value.url.pathname === '/quiz/greeting';
	});

	$: is_answered = current_question == -1 ? true : quiz[current_question].user_selected != null;
	$: is_button_active = is_answered || is_greeting;

	let button_text = 'Продолжить';
	$: if (is_greeting) {
		button_text = 'Начать тест';
	} else if (current_question === quiz.length - 1) {
		button_text = 'Завершить';
	} else {
		button_text = 'Ответить';
	}

	function handleButtonClick() {
		if (is_greeting) {
			current_question_index.set(0);
			goto('/quiz/main');
		} else if (current_question === quiz.length - 1) {
			goto('/quiz/result');
		} else {
			current_question_index.update((value) => {
				return value + 1;
			});
		}
	}
</script>

<section>
	<Sidebar background={false} />
	<div class="main_content" class:height-fit-content={current_question === 4}>
		<div id="header">
			<QuestonCounter />
		</div>
		<slot />
		<div id="footer">
			<Button text={button_text} size="1.6" onClick={handleButtonClick} active={is_button_active} />
		</div>
	</div>
</section>

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
		justify-content: flex-start;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.main_content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 8%;
	}
	#header {
		height: 15%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
	#footer {
		margin-top: auto;
		margin-bottom: 7%;
		width: 100%;
	}

	@media only screen and (max-width: 900px) {
		section {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
		#header {
			height: 10%;
			font-size: 1.2rem;
		}
		#footer {
			position: absolute;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 0);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-bottom: 10%;
		}
	}
</style>
