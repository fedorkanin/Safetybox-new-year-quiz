<!-- button component with custom function and text -->
<script>
	import { goto } from '$app/navigation';

	export let text = 'Button';
	export let onClick = () => {};
	export let href = '';
	export let size = '1.5em';
	export let active = true;

	const handleClick = () => {
		if (!active) return;
		if (href) {
			goto(href);
		} else {
			onClick();
		}
	};
</script>

<button on:click={handleClick} style={`font-size: ${size}em`} class:disabled={!active}>
	{text}
</button>

<style>
	button {
		background: var(--safetybox-yellow);
		color: black;
		border: none;
		border-radius: 0.5em;
		padding: 0.5em 1em;
		font-weight: 600;
		width: fit-content;
		cursor: pointer;
	}
	button:hover {
		background: var(--safetybox-yellow-hover);
	}
	.disabled {
		filter: grayscale(100%);
		cursor: unset;
	}
	.disabled:hover {
		background: var(--safetybox-yellow);
	}
</style>
