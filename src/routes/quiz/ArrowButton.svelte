<script>
	import { createEventDispatcher } from 'svelte';
	import left_arrow from '/src/static/graphics/left_arrow.svg';
	import right_arrow from '/src/static/graphics/right_arrow.svg';

	export let direction = 'right';
	export let greyed = false;

	let arrow = direction === 'right' ? right_arrow : left_arrow;
	// create event dispatcher to dispatch button click event
	const dispatch = createEventDispatcher();

	function handleClick() {
		if (!greyed) {
			dispatch('click');
		}
	}
</script>

<button on:click={handleClick} class:greyed>
	<img src={arrow} alt="" />
</button>

<style>
	button {
		background: none;
		border: none;
		height: 100%;
		width: auto;
		padding: 0;
	}

	button img {
		height: 100%;
		width: auto;
		cursor: pointer;
	}

	button.greyed img {
		filter: grayscale(100%);
		cursor: default;
	}
</style>
