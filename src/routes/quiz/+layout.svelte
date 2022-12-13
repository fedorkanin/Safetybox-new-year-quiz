<!-- redirect to main page -->
<script>
	// import { sidebarBackgroundStore } from 'src/routes/stores/LeftDecorationBackground.js';
	import { current_question_index } from '/src/routes/stores/QuizQuestions.js';
	import { leftDecorationBackgroundStore } from '/src/routes/stores/LeftDecorationBackground.js';
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
	$: console.log(is_answered);

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
			leftDecorationBackgroundStore.set(false);
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

<section class:all-background={is_greeting}>
	<Sidebar background={is_greeting} />
	<div class="main_content" class:height-fit-content={current_question === 4}>
		<div id="header">
			<QuestonCounter />
		</div>
		<slot />
		<div id="footer">
			<Button text={button_text} size="1.6" onClick={handleButtonClick} active={is_answered} />
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
		margin-bottom: 5%;
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
			margin: 0;
		}
		.main_content {
			height: 70vh;
			margin: 0;
		}
		.all-background {
			background: linear-gradient(120deg, #962f32, #420604);
		}
		.main_content {
			flex-direction: column;
			align-items: flex-start;
		}
		.height-fit-content {
			height: fit-content;
		}
		:global(body) {
			overflow: visible;
		}
	}
</style>
