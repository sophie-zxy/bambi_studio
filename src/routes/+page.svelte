<script>
    import ImagePreviewCard from "$lib/ImagePreviewCard.svelte";

    const images = [
        { src: "../../Home_page_pics/wireframe.png", text: "UIUX", link: '/uiux' },
        { src: "../../Home_page_pics/graphic_d.png", text: "Graphic Design", link: '/graphic_design' },
        { src: "../../Home_page_pics/fitlogo.png", text: "Animation", link: '/animation_route' },
        { src: "../../Home_page_pics/Immigrate.JPG", text: "Illustration", link: '/illustration' },
        { src: "../../Home_page_pics/drawing.JPG", text: "Sketches", link: '/sketches_route' },
        { src: "../../Home_page_pics/photography.JPG", text: "Photography", link: '/photography' },
    ];
</script>

<html lang="postcss">
    <div class="join">
        {#each images as image}
            <ImagePreviewCard {...image}/>
        {/each}
    </div>
</html>

<style>
    .join {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;
    }
    /* make the peft and right padding be 1rem when on mobile screens */
    @media (max-width: 640px) {
        .join {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>

