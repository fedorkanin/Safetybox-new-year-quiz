<script>
	export let size = 10; // size in em
	export let left = NaN; // left in %
	export let right = NaN; // right in %
	export let top = NaN; // top in %
	export let bottom = NaN; // bottom in %
	export let rotate = Math.random() * 360; // rotate in deg
	export let translate_x = 0; // translateX in %
	export let translate_y = 0; // translateY in %
	export let hide_on_mobile = false; // hide star
	import star from '$lib/assets_new/star_good_bg.png';

	let horizontal_style = '';
	$: if (!isNaN(left)) {
		horizontal_style = `left: ${left}%;`;
		translate_x = translate_x ? translate_x : -50;
	} else if (!isNaN(right)) {
		horizontal_style = `right: ${right}%;`;
		translate_x = translate_x ? translate_x : 50;
	}

	let vertical_style = '';
	$: if (!isNaN(top)) {
		vertical_style = `top: ${top}%;`;
		translate_y = translate_y ? translate_y : -50;
	} else if (!isNaN(bottom)) {
		vertical_style = `bottom: ${bottom}%;`;
		translate_y = translate_y ? translate_y : 50;
	}

	// random animation delay
	let animation_delay = Math.random() * 1.5;
</script>

<img
	src={star}
	alt=""
	style="width: {size}em; 
    {horizontal_style}
    {vertical_style}
    transform: translate({translate_x}%, {translate_y}%) rotate({rotate}deg); 
    animation-delay: {animation_delay}s; "
	class:hide_on_mobile
/>

<style>
	img {
		position: absolute;
		height: auto;
		opacity: 100%;

		/* animation star blinker */
		animation: blinker 1.5s linear infinite;

		filter: drop-shadow(0 0 0.5rem rgb(254, 204, 78));

		/* mix-blend-mode: screen; */
	}
	/* animation star blinker */
	@keyframes blinker {
		50% {
			opacity: 50%;
		}
	}

	@media (max-width: 900px) {
		.hide_on_mobile {
			display: none;
		}
	}
</style>
