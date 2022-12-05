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
	}

	button img {
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}

	button.greyed img {
		filter: grayscale(100%);
		cursor: default;
	}
</style>
