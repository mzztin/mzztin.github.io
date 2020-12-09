<script>
    export let title = "Example Title";
    export let description = "Example Description";
    export let bg_color = "#333333";
    export let bg_image = "";

    export let progress_absoulute = 100;
    export let progress_bg = "";
    export let progress_fg = "";
</script>

<style>
    .card {
        width: 180px;
        height: 350px;
        margin: 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 14px;
        margin-bottom: 1.6rem;
        justify-content: center;
        text-align: center;
        color: white;
        font-family: 'Jetbrains Mono', Arial, Helvetica, sans-serif;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(175, 150, 150, 0.456);
    }

    .image {
        width: 70px;
        height: 70px;
        align-items: center;
        border-radius: 6.5px;
        background-position-x: 60%;
        background-position-x: 20%;
        background-size: 100%;
    }

    .title {
        font-size: 26px;
    }

    .description {
        font-size: 16px;
    }

    .progress-bar {
        background-color: black;
        border-radius: 13px;    
        padding: 3px;
    }

    .progress {
        background-color: orange;
        width: 60%;
        height: 20px;
        border-radius: 10px;
    }

    @media (max-width: 480px) {
        .card {
            width: 180px;
            height: 350px;
            margin: 50px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 14px;
            margin-bottom: 1.6rem;
            justify-content: center;
            text-align: center;
            color: white;
            font-family: 'Jetbrains Mono', Arial, Helvetica, sans-serif;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(175, 150, 150, 0.456);
        }

        .image {
            width: 80px;
            height: 80px;
            align-items: center;
            border-radius: 6.5px;
            background-position-x: 60%;
            background-position-x: 20%;
            background-size: 100%;
        }

        .title {
            font-size: 18px;
        }

        .description {
            font-size: 10px;
        }

        .progress-bar {
            border-radius: 13px;    
            padding: 3px;
        }

        .progress {
            height: 8px;
        }
	}
</style>
 
<section class="card" style="background-color: {bg_color};">
    <div class="title"> {title} </div>

    <div class="description"> {description} </div>

    <div class="image" style="background-image: url({bg_image});" />

    <div class="progress-bar" style="background-color: {progress_bg};">
        <div class="progress" style="width: {progress_absoulute}%; background-color: {progress_fg};"/>
    </div>
</section>

