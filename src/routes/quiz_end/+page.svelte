<script>
	import { quiz_array } from '../stores/QuizQuestions.js';
	import FunnyText from './FunnyText.svelte';
	// subscribe to the store
	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let box_images = [];
	for (let i = 0; i < 3; i++) {
		box_images.push('/src/static/images/' + quiz[i].user_selected + '.png');
	}

	// saying
	let saying = 'Lorem';
	let last_question_value = quiz[quiz.length - 1].user_selected;
	if (last_question_value !== null) {
		let last_question_label = quiz[quiz.length - 1].answers.find(
			(item) => item.value === last_question_value
		).label;
		saying = last_question_label;
	}
</script>

<!-- print user selected values -->
<section>
	<div class="hanging-boxes">
		{#each box_images as box_image, index}
			<div class="box-wrapper">
				<img class="hanging-box" src="/src/static/graphics/hanging_box.svg" alt="" />
				<img class="hanging-image" src={box_image} alt="" />
			</div>
		{/each}
	</div>

	<div class="main-text-wrapper">
		<div class="wish">
			<h2>
				Поздравляем! Вы успешно прошли курс на новогоднее настроение! Желаем вам сохранять его весь
				год! Ваша команда SafetyBox
			</h2>
			<h3>Ваша команда SafetyBox</h3>
		</div>
		<div class="saying">
			<FunnyText text={saying} animate={true} />
		</div>
	</div>
</section>

<section />

<style>
	section {
		width: 100%;
		height: 100%;
		margin: 0;
	}
	.hanging-boxes {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.box-wrapper {
		position: absolute;
		width: 20em;
		height: auto;

		/* create soft gold glow effect */
		filter: drop-shadow(0 0 7em #f9d56e);
	}
	.box-wrapper:nth-child(1) {
		top: -20%;
		left: 3%;
	}
	.box-wrapper:nth-child(2) {
		top: -50%;
		left: 15%;
	}
	.box-wrapper:nth-child(3) {
		top: -5%;
		left: 27%;
	}

	.hanging-box {
		width: 100%;
		height: auto;
	}
	.hanging-image {
		position: absolute;
		width: 50%;
		height: auto;

		/* bottom is parent width divided by 2 */
		bottom: 10%;

		left: 50%;
		transform: translate(-50%, 0);

		border-radius: 50%;
	}

	.main-text-wrapper {
		width: 43%;
		position: absolute;
		right: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.main-text-wrapper .wish {
		width: 100%;
		text-align: center;
		overflow-wrap: break-word;
		text-align: left;
	}
	.saying {
		width: 100%;
	}
</style>
