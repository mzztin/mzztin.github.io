<script>
    import Card from "../components/Card.svelte"
    import colors from "../colors";

    import Python from "../images/python.png";
    import Typescript from "../images/typescript.png";
</script>

<svelte:head>
	<meta property="og:description" content="Here are some off my skills" />
</svelte:head>

<style>
    .cards {
        display: flex;
		align-content: center;
    }
</style>

<div class="cards">
    <Card title="TypeScript" description="I started to learn TypeScript in 2020 and it became my absoulte favorite." progress_absoulute=70 progress_bg={colors.white} progress_fg={colors.ts_blue} bg_image={Typescript}/>
    <Card title="Python" description="Python is a really fun language that I started to learn in class." progress_absoulute=35 progress_bg=gray progress_fg=yellow bg_image={Python}/>  
</div>