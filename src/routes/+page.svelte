<script>
    import ImagePreviewCard from "$lib/ImagePreviewCard.svelte";

    const images = [
        { src: "../../Home_page_pics/wireframe.png", text: "UIUX", link: '/uiux' },
        { src: "../../Home_page_pics/poster.jpg", text: "Graphic Design", link: '/graphic_design' },
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
        gap: 1rem;
        padding: 2rem;
    }</style>

