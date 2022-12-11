<script>
	import { createEventDispatcher } from 'svelte';

	export let direction = 'right';
	export let greyed = false;

	// create event dispatcher to dispatch button click event
	const dispatch = createEventDispatcher();

	function handleClick() {
		if (!greyed) {
			dispatch('click');
		}
	}
</script>

<button on:click={handleClick} class:greyed>
	<img src="/src/static/graphics/{direction}_arrow.svg" alt="" />
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
