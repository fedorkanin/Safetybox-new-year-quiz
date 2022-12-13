<script>
	// redirect to main page in any case
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import AudioPlayer from './AudioPlayer.svelte';

	// check quiz_array validity, if not valid, redirect to main page
	// check that every user_selected value is not null
	let is_valid = true;
	quiz_array.subscribe((value) => {
		for (let i = 0; i < value.length; i++) {
			if (value[i].user_selected === null) {
				is_valid = false;
			}
		}
	});

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
			let user_selected_to_lower =
				user_selected_img_names[i] == null ? ' ' : user_selected_img_names[i].toLowerCase();
			if (key.includes(user_selected_to_lower)) {
				urls_array.push(glob_import[key].default);
			}
		}
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

	<div class="text-wrapper">
		<h2>Поздравляем!</h2>
		<h2>Вы успешно прошли курс на новогоднее настроение! Желаем вам сохранять его весь год!</h2>
		<h3>Ваша команда SafetyBox</h3>
	</div>

	<div id="audio">
		<AudioPlayer />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		margin: 0;
	}
	#audio {
		position: absolute;
		bottom: 5rem;
		right: 5rem;
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
		width: 60%;
		aspect-ratio: 4/5;
		object-fit: contain;

		/* bottom is parent width divided by 2 */
		bottom: 5%;

		left: 50%;
		transform: translate(-50%, 0);

		border-radius: 50%;
	}

	.text-wrapper {
		position: absolute;
		right: calc(20% - 6em);
		width: 25em;

		color: var(--soft-white);
		font-family: 'Arial Nova Cond Light';
		text-transform: uppercase;
		font-size: 1.4em;
	}
	h3 {
		font-style: italic;
	}
</style>
