<script>
	import Nav from '../components/Nav.svelte';
	export let segment;

	import Image from "../images/me.png";
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<meta property="og:image" content={Image}/>
	<meta property="og:title" content="Martin - Developer"/>
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#FFFFFF">
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>