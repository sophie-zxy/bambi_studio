<script>
    import { onMount } from 'svelte';
    import LeftArrow from "$lib/LeftArrow.svelte";
    import ImageCard from "$lib/ImageCard.svelte";

    let nav_obj = {
        left_link_txt: "Illustration",
        left_link: "/illustration",
        right_link_txt: "Sketches",
        right_link: "/sketches_route"
    }

    let images = [
        {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
    ]

    let isSmallScreen = false;

    onMount(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        isSmallScreen = mediaQuery.matches;
        mediaQuery.addEventListener('change', (e) => {
            isSmallScreen = e.matches;
        });
    });
</script>

<style>
    .columns-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @media (max-width: 768px) {
        .columns-2 {
            display: flex;
            flex-direction: column;
        }
    }
</style>

    <div class="columns-2 my-8 gap-12 mx-16">
        {#each images as image}
            <ImageCard {...image}/>
        {/each}
    </div>
    <LeftArrow link_txt="Sketches" link="/sketches_route"/>

