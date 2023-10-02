
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
    <div class="grid card justify-items-center">
        <div class="inner-card only:bg-cover bg-center"
         style="background-image: url({src}); background-size: cover;">
        </div>
        <p class="text p-4 text-black">{text}</p>
    </div>
</a>

<style>
    .card {
        position: relative;
    }
    .inner-card {
        width: 25rem;
        height: 25rem;
    }
    .inner-card:hover {
        transform: scale(1.02);
        transition-duration: 200ms;
    }
    .text {
        font-family: "EB Garamond";
        font-weight: 400;
        font-size: 24px;
        z-index: 5;
    }

    @media (max-width: 640px) {
        .inner-card {
            width: 10rem;
            height: 10rem;
        }
        .text {
            font-size: 16px;
        }
    }
</style>