
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
    <div class="card only:bg-cover bg-center"
     style="background-image: url({src}); background-size: cover; width: {squareDimension}; height: {squareDimension}; filter: brightness(.8);"
     role="button" 
     tabindex="0">
     <p class="text p-4 text-white">{text}</p>
    </div>
</a>

<style>
    .card {
        position: relative;
        color: rgba(255, 255, 255, 0.2);
    }
    /* .card:hover {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 3s;
        opacity: 1;
    } */
    .text {
        font-family: "EB Garamond";
        font-weight: 400;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-weight: 200;
        color: black;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
</style>