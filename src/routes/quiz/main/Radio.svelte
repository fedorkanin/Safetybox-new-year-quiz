<script>
	// based on suggestions from:
	// Sami Keijonen https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
	// and Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
	import { createEventDispatcher } from 'svelte';

	export let options; // array of objects with text and value properties
	export let userSelected = options[0].value; // value of the selected radio button
	export let flexDirection = 'column'; // 'row' or 'column'

	const uniqueID = Math.floor(Math.random() * 100);

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');

	// create change event
	const dispatch = createEventDispatcher();

	function handleChange(event) {
		userSelected = event.target.value;
		dispatch('change', { value: userSelected });
	}
</script>

<div
	role="radiogroup"
	class="group-container"
	aria-labelledby={`label-${uniqueID}`}
	style="flex-direction:{flexDirection}"
	id={`group-${uniqueID}`}
>
	{#each options as { value, label }}
		<input
			class="sr-only"
			type="radio"
			checked={value === userSelected}
			id={slugify(label)}
			bind:group={userSelected}
			{value}
			on:change={handleChange}
		/>
		<label for={slugify(label)}> <h3>{label}</h3> </label>
	{/each}
</div>

<style>
	:root {
		--accent-color: CornflowerBlue;
		--gray: #ccc;
	}

	.group-container {
		border-radius: 2px;
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	label {
		user-select: none;
		margin: 0.8em;
	}
	h3 {
		display: inline-block;
		width: fit-content;
		margin: 0;
	}

	.sr-only {
		position: absolute;
		clip: rect(1px, 1px, 1px, 1px);
		padding: 0;
		border: 0;
		height: 1px;
		width: 1px;
		overflow: hidden;
	}

	input[type='radio'] {
		position: absolute;
	}

	input[type='radio'] + label {
		display: flex;
		align-items: center;
		/* justify-content: center; */
		position: relative;
		text-align: left;
	}

	input[type='radio'] + label::before {
		content: '';
		position: relative;
		display: inline-block;
		margin-right: 0.5em;
		width: 1em;
		height: 1em;
		background: transparent;
		border: 1px solid var(--gray, #ccc);
		border-radius: 50%;
		/* top: 0.2em; */
	}

	input[type='radio']:checked + label::before {
		border: 1px solid var(--gray, #ccc);
		border-radius: 50%;
	}

	input[type='radio'] + label::after {
		content: '';
		position: absolute;
		display: inline-block;
		width: 0.5em;
		height: 0.5em;
		/* 0.45em;(top) */
		left: 0.25em;
		background: var(--accent-color, #282828);
		border: 1px solid var(--accent-color, #282828);
		border-radius: 50%;
		transform: scale(0);
	}

	input[type='radio']:checked + label::after {
		opacity: 1;
		transform: scale(1);
	}

	input[type='radio']:focus + label::before {
		box-shadow: 0 0 0 1px var(--accent-color, #282828);
		border-radius: 50%;
	}

	input[type='radio']:disabled + label {
		color: darken(var(--gray, #ccc), 10);
	}

	input[type='radio']:disabled + label::before {
		background: var(--gray, #ccc);
	}
	/* gravy */

	input[type='radio'] + label::before {
		transition: background 0.3s ease-out;
	}

	input[type='radio']:checked + label::before {
		transition: background 0.3s ease-in;
	}

	input[type='radio'] + label::after {
		transition: transform 0.2s ease-out;
	}

	input[type='radio']:checked + label::after {
		transition: transform 0.2s ease-in;
	}

	input[type='radio']:focus + label::before {
		/* box-shadow: 0 0 8px var(--accent-color, #282828); */
		border: 1px solid var(--accent-color, #282828);
		border-radius: 50%;
	}

	@media only screen and (max-width: 900px) {
	}
</style>
