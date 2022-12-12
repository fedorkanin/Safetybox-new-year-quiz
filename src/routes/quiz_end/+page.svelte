<script>
	import { quiz_array } from '../stores/QuizQuestions.js';
	import chimney from '$lib/images/chimney.png';
	import { group_outros } from 'svelte/internal';
	//import all photos from static/images
	const glob_import = import.meta.glob('$lib/images/*.png', { eager: true });

	// subscribe to store
	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let user_selected_img_names = [];
	let urls_array = [];
	// get user selected values
	for (let i = 0; i < 3; i++) {
		user_selected_img_names.push(quiz[i].user_selected);
	}

	// get urls of user selected images
	for (let i = 0; i < user_selected_img_names.length; i++) {
		for (const key in glob_import) {
			let user_selected_to_lower = user_selected_img_names[i].toLowerCase();
			if (key.includes(user_selected_to_lower)) {
				urls_array.push(glob_import[key].default);
			}
		}
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
		{#each urls_array as image}
			<div class="box-wrapper">
				<img class="hanging-box" src="/src/static/graphics/hanging_box.svg" alt="" />
				<img class="hanging-image" src={image} alt="" />
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
			<!-- <FunnyText text={saying} animate={true} /> -->
			<h1>{saying}</h1>
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
		aspect-ratio: 1;
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
	h1 {
		font-size: 3em;
		color: var(--safetybox-yellow);
	}
	h2 {
		color: var(--safetybox-yellow);
	}
	h3 {
		color: var(--safetybox-yellow);
	}
</style>
