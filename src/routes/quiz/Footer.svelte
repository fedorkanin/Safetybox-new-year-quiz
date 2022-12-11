<script>
	import ForwardBackward from './ForwardBackward.svelte';
	import AnswerButton from './AnswerButton.svelte';
</script>

<section>
	<AnswerButton />
	<ForwardBackward />
</section>

<style>
	section {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rem;
		height: 4rem;
	}

	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
			align-items: center;
			margin: 0;
			margin-bottom: 3rem;
		}
	}
</style>
