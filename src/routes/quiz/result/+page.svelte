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
	const glob_import = import.meta.glob('$lib/images_compressed/*.png', { eager: true });

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

	let hide_on_mobile = true;
</script>

<!-- print user selected values -->
<section>
	<div id="decoration">
		<img src={decoration} alt="" />
	</div>
	<div id="darken" />
	<Star left="10" top="10" />
	<Star right="10" top="20" />
	<Star left="20" top="40" />
	<Star right="13" top="70" {hide_on_mobile} />
	<Star right="60" top="35" {hide_on_mobile} />
	<div id="hanging-boxes">
		{#each urls_array as image}
			<div class="box-wrapper">
				<img class="hanging-box" src="/src/static/graphics/hanging_box.svg" alt="" />
				<img class="hanging-image" src={image} alt="" />
			</div>
		{/each}
	</div>

	<div id="text-wrapper">
		<div class="text">
			<h5>Поздравляем!</h5>
			<h5>
				Вы&nbsp;взяли верный курс на&nbsp;Новый Год! Желаем, чтобы вас не&nbsp;покидало хорошее
				настроение и&nbsp;все мечты сбывались!
			</h5>
			<h3>
				Ваша команда <a href="https://safetybox.ru" rel="noopener noreferrer" target="_blank"
					>SafetyBox</a
				>
			</h3>
		</div>
		<div id="audio">
			<h3>Нажмите&nbsp;на&nbsp;граммофон,<br />чтобы включить звук!</h3>
			<AudioPlayer />
		</div>
	</div>
</section>

<style>
	h5 {
		font-size: 1.3em;
		text-transform: uppercase;
	}
	a {
		text-decoration: underline;
		color: var(--soft-white);
	}
	section {
		width: 100%;
		height: 100%;
		margin: 0;
		display: flex;
		flex-direction: row;
	}
	#darken {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgb(0, 0, 0);
		opacity: 10%;
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
	#hanging-boxes {
		height: 100%;
		width: 50%;
		position: relative;
	}
	.box-wrapper {
		position: absolute;
		width: 20em;
		width: 40%;
		height: auto;
		top: 0;

		/* create soft gold glow effect */
		filter: drop-shadow(0 0 7em #f9d56e);
	}
	.box-wrapper:nth-child(1) {
		left: 2%;
		transform: translate(0, -30%);
	}
	.box-wrapper:nth-child(2) {
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.box-wrapper:nth-child(3) {
		right: 10%;
		transform: translate(0, -10%);
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

		bottom: 5%;

		left: 50%;
		transform: translate(-50%, 0);

		border-radius: 50%;
	}
	#text-wrapper {
		position: absolute;
		/* right: calc(15% - 6em); */
		left: 52%;
		width: 45%;
		color: var(--soft-white);
		font-family: 'Arial Nova Cond Light';
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	/* #text-wrapper h2 {
		text-transform: uppercase;
	} */
	#text-wrapper h3 {
		font-style: italic;
	}
	#audio {
		left: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		color: var(--soft-white);
	}
	#audio h3 {
		font-size: 1em;
		/* font-style: normal; */
		width: 10em;
		text-align: left;
		font-weight: 300;
	}

	@media only screen and (max-width: 900px) {
		section {
			flex-direction: column;
			align-items: center;
		}
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
		#hanging-boxes {
			width: 100%;
			height: 70%;
			max-height: 16em;
			flex-shrink: 0;
		}
		.box-wrapper {
			width: 39%;
		}
		.box-wrapper:nth-child(3) {
			transform: translate(0, -20%);
			right: 2%;
		}
		#text-wrapper {
			font-size: 1em;
			width: 90%;
			position: relative;
			left: auto;
			right: auto;
			text-shadow: 0.5em 0.5em 1em rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		#audio {
			position: relative;
			left: auto;
			right: auto;
			bottom: auto;
			width: 100%;
			/* height: 20%; */
			transform: translateY(-20%);
		}
	}
</style>
