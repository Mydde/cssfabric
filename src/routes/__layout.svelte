
<script context="module" lang="ts">

	export const prerender = true;
</script>
<script lang="ts">
	import Header from '$lib/../components/header/Header.svelte';
	import '../app.css';
</script>

<main  class={"w-full"}>
	<!--<h4 class={"flex-v flex-align-center flex-align-middle pad"}>
		cssfabric
	</h4>-->
	<slot />
</main>


<style global lang="scss">
	@import "src/lib/styles/cssfabric.min";
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
