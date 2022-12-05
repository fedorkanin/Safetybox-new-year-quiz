<script></script>

<section>
	<div class="left_decoration">
		<img src="/src/static/graphics/hanging_asset_quesiton.svg" alt="" />
		<h3>Курс на новогодее настроение</h3>
	</div>
	<div class="main_content">
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.left_decoration {
		position: relative;
		width: 20%;
		height: 100vh;
	}

	.main_content {
		width: 80%;
		height: 100%;
	}

	.left_decoration img {
		position: absolute;
		width: 100%;
		top: -10%;
	}

	.left_decoration h3 {
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		min-width: 10em;
		bottom: 2em;
		text-align: left;
		color: #f3b65b;
	}
</style>
