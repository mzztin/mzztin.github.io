<script>
	import Card from "../components/Card.svelte";
	import colors from "../colors";

	// Image imports
	import Python from "../images/python.png"
	import Typescript from "../images/typescript.png"
</script>

<style style=" ">
	.about {
		align-items: center;
		align-self: auto;
		font-family: 'Jetbrains Mono', Arial, Helvetica, sans-serif;
		font-size: 26px;	
	}

	.card-container {
		display: flex;
		align-content: center;
	}

	/** Mobile */
	@media (max-width: 480px) {

	}

</style>

<svelte:head>
	<title>Martin - Developer</title>
	<meta property="og:title" content="Martin - Developer"/>
	<meta property="og:description" content="Hey! This is my personal website."/>
</svelte:head>

<h1 class="about">
	Hey! My name is Martin and this is my personal website. Here you can find some stuff I am expierenced with:
</h1>

<div class="card-container">
	<Card title="TypeScript" description="I started to learn TypeScript in 2020 and it became my absoulte favorite." progress_absoulute=70 progress_bg={colors.white} progress_fg={colors.ts_blue} bg_image={Typescript}/>
	<Card title="Python" description="Python is a really fun language that I started to learn in class." progress_absoulute=35 progress_bg=gray progress_fg=yellow bg_image={Python}/>
</div>