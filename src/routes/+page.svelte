<script>
    import ImagePreviewCard from "$lib/ImagePreviewCard.svelte";

    const images = [
        { src: "../../Home_page_pics/UIUX.webp", text: "UIUX PROJECT", link: '/uiux' },
        { src: "../../Home_page_pics/illu.webp", text: "ILLUSTRATION", link: '/illustration' },
        { src: "../../Home_page_pics/gd.webp", text: "GRAPHIC DESIGN", link: '/graphic_design' },
        { src: "../../Home_page_pics/Animation.webp", text: "ANIMATION", link: '/animation_route' },
        // { src: "../../Home_page_pics/drawing.JPG", text: "Sketches", link: '/sketches_route' },
        // { src: "../../Home_page_pics/photography.JPG", text: "Photography", link: '/photography' },
    ];
</script>

<html lang="postcss">
    <div class="join">
        {#each images as image}
            <ImagePreviewCard {...image}/>
        {/each}
    </div>
    <div class="text">
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
    .text {
        font-size: 20px; 
   }
    /* make the peft and right padding be 1rem when on mobile screens */
    @media (max-width: 640px) {
        .join {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        .text {
        font-size: 14px; 
   }
    }
   
</style>

