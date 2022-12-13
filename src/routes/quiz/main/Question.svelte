<script>
	export let question_text;
</script>

<section>
	<h1>{question_text}</h1>
</section>

<style>
	h1 {
		height: fit-content;
		text-align: left;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			margin: 1rem 0;
		}
	}
</style>
