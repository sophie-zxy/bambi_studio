<script lang="ts">
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    import ImageCard from "$lib/ImageCard.svelte";
    let nav_obj = {
        left_link_txt: "Animation",
        left_link: "/animation_route",
        right_link_txt: "sketches",
        right_link: "/sketches_route"
    }
    let images = [
        {src: "../../illustration_page_pics/Child.jpg", alt: "Child"},
        {src: "../../illustration_page_pics/Christmas Snow.GIF", alt: "Snow"},
        {src: "../../illustration_page_pics/Diamond.jpg", alt: "Diamond"},
        {src: "../../illustration_page_pics/Flushing.JPG", alt: "Flushing"},
        {src: "../../illustration_page_pics/Game Card.PNG", alt: "Game Card"},
        {src: "../../illustration_page_pics/High Heel.jpg", alt: "High heel"},
        {src: "../../illustration_page_pics/IMG_3496.jpg", alt: "img"},
        {src: "../../illustration_page_pics/Immigrate.JPG", alt: "Immigrate"},
        {src: "../../illustration_page_pics/Ocean.jpg", alt: "Ocean"},
        {src: "../../illustration_page_pics/Piano.jpg", alt: "Piano"},
        {src: "../../illustration_page_pics/Pubg Mucha.JPG", alt: "pubg"},
        {src: "../../illustration_page_pics/Rabbit.jpg", alt: "Rabbit"},
        {src: "../../illustration_page_pics/Sunset.JPG", alt: "Sunset"},
        {src: "../../illustration_page_pics/Yard.JPG", alt: "Yard"},
    ]
</script>

<html lang="postcss">

<div class="lg:columns-3 md:columns-2 sm:columns-1 mt-12">
    {#each images as image}
        <ImageCard {...image}/>
    {/each}
</div>

    <LeftAndRightArrow {...nav_obj}/>
</html>

