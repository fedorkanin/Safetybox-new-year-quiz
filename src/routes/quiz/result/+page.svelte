<script>
	// redirect to main page in any case
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import AudioPlayer from './AudioPlayer.svelte';
	import decoration from '/src/static/graphics/hanging_garland.svg';
	import Star from '$lib/Star.svelte';

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
	<div id="decoration">
		<img src={decoration} alt="" />
	</div>
	<Star left="10" top="10" />
	<Star right="10" top="20" />
	<Star left="20" top="40" />
	<div class="hanging-boxes">
		{#each urls_array as image}
			<div class="box-wrapper">
				<img class="hanging-box" src="/src/static/graphics/hanging_box.svg" alt="" />
				<img class="hanging-image" src={image} alt="" />
			</div>
		{/each}
	</div>

	<div id="text-wrapper">
		<h1>Поздравляем!</h1>
		<h2>Вы успешно прошли курс на новогоднее настроение! Желаем вам сохранять его весь год!</h2>
		<h3>Ваша команда SafetyBox</h3>
		<div id="audio">
			<h3>Нажмите на картинку, чтобы вкюлчить звук!</h3>
			<AudioPlayer />
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		margin: 0;
	}
	#decoration {
		position: absolute;
		height: 100%;
		width: auto;
		z-index: 0;
		top: 0;
		left: 5%;
		opacity: 40%;
	}
	#decoration img {
		height: 100%;
		width: auto;
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
		width: 50%;
		aspect-ratio: 2/3;
		object-fit: contain;

		/* bottom is parent width divided by 2 */
		bottom: 5%;

		left: 50%;
		transform: translate(-50%, 0);

		border-radius: 50%;
	}
	#text-wrapper {
		position: absolute;
		right: calc(20% - 6em);
		width: 25em;

		color: var(--soft-white);
		font-family: 'Arial Nova Cond Light';
		text-transform: uppercase;
		font-size: 1.4em;
		height: 100%;
	}
	h3 {
		font-style: italic;
	}
	#text-wrapper h1 {
		font-size: 2.6em;
	}
	#audio {
		left: 0;
		bottom: 0;
		height: 30%;
		width: 100%;
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: var(--soft-white);
	}
	#audio h3 {
		font-size: 1em;
		font-style: normal;
		width: 50%;
		text-align: left;
		font-weight: 300;
	}

	@media only screen and (max-width: 600px) {
		/* reset styles */
		#decoration {
			left: 0;
			top: 0;
			width: 100%;
			height: auto;
		}
		#decoration img {
			width: 100%;
			height: auto;
		}
		.hanging-boxes .box-wrapper {
			left: auto;
			top: auto;
		}
		.box-wrapper {
			width: 10em;
		}
		.box-wrapper:nth-child(1) {
			right: 20px;
			top: -30px;
		}
		.box-wrapper:nth-child(2) {
			left: 50%;
			transform: translate(-50%, 0);
			top: -180px;
		}
		.box-wrapper:nth-child(3) {
			left: 10px;
			top: -90px;
		}
		#text-wrapper {
			font-size: 1em;
			width: 90%;
			left: 50%;
			height: 55%;
			transform: translate(-50%, 80%);
			text-shadow: 0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
		}
		#audio {
			width: 100%;
			align-items: flex-end;
		}
	}
</style>
