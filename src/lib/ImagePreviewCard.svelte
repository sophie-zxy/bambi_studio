
<script>
    import {onMount} from 'svelte';
    import "@fontsource/eb-garamond/400.css"
    export let src = '';
    export let text = '';
    export let link = '';
    let squareDimension = '25rem'
    let isHovered = false;

    onMount(() => {
        isHovered = false;
    });
</script>

<a href={link}>
    <div class="card">
        <div class="card only:bg-cover bg-center"
         style="background-image: url({src}); background-size: cover; width: {squareDimension}; height: {squareDimension}; filter: brightness(0.7)">
        </div>
        <p class="text p-4 text-white">{text}</p>
    </div>
</a>

<style>
    .card {
        position: relative;
    }
    .card:hover {
        transform: scale(1.02);
        transition-duration: 200ms;
    }
    .text {
        font-family: "EB Garamond";
        font-weight: 400;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        z-index: 5;
    }
</style>