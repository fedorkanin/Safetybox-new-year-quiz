<script>
	import { quiz_array } from '/src/routes/stores/QuizQuestions.js';
	import patephone from '$lib/images/patephone.svg';
	import { onMount } from 'svelte';

	const glob_import = import.meta.glob('$lib/music/*.mp3', { eager: true });

	// subscribe to store
	let quiz;
	quiz_array.subscribe((value) => {
		quiz = value;
	});

	let urls_array = [];
	// get urls of user selected images
	for (const key in glob_import) {
		if (key.includes(quiz[3].user_selected)) {
			urls_array.push(glob_import[key].default);
		}
	}

	let audio = new Audio(urls_array[0]);
	document.body.appendChild(audio);
	let is_playing = false;
	function handlePlay() {
		if (audio.paused) {
			let audios = document.getElementsByTagName('audio');
			for (let i = 0; i < audios.length; i++) {
				audios[i].pause();
			}
			audio.play();
			is_playing = true;
		} else {
			// pause all audios on page
			let audios = document.getElementsByTagName('audio');
			for (let i = 0; i < audios.length; i++) {
				audios[i].pause();
			}
			is_playing = false;
		}
	}
</script>

<section>
	<button on:click={handlePlay}>
		<img src={patephone} alt="" class:playing={is_playing} />
	</button>
</section>

<style>
	button {
		background: none;
		border: none;
		cursor: pointer;
		border-radius: 50%;
	}
	img {
		width: 9rem;
		height: auto;
	}
	.playing {
		animation: sway 1.6s linear infinite;
	}

	/* animation for swaying patephone */
	@keyframes sway {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(8deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
