<script>
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    import ImageCard from "$lib/ImageCard.svelte";
    let images = [
        {src: "../../sketches_page_pics/IMG_7886.JPG", alt: "IMG3"},
        {src: "../../sketches_page_pics/Alley.jpg", alt: "Alley"},
        {src: "../../sketches_page_pics/IMG_1555.JPG", alt: "IMG1"},
        {src: "../../sketches_page_pics/IMG_1202.jpg", alt: "IMG5"},
        {src: "../../sketches_page_pics/Rabbit & Hands.jpg", alt: "Rabbit & Hands"},
        {src: "../../sketches_page_pics/IMG_1558.JPG", alt: "IMG2"},
        {src: "../../sketches_page_pics/IMG_7892.JPG", alt: "IMG6"},
        {src: "../../sketches_page_pics/IMG_7887.JPG", alt: "IMG4"},
        {src: "../../sketches_page_pics/Town.JPG", alt: "Town"},
        {src: "../../sketches_page_pics/IMG_7893.JPG", alt: "IM7"},
        {src: "../../sketches_page_pics/IMG_7894.JPG", alt: "IMG8"},
    ]
    let nav_obj = {
        left_link_txt: "illustration",
        left_link: "/illustration",
        right_link_txt: "Photography",
        right_link: "/photography"
    }
</script>

<html lang="postcss">
    <div class="columns-1 lg:columns-3 md:columns-2 my-12 mx-16 md:mx-44">
        {#each images as image}
            <ImageCard {...image}/>
        {/each}
    </div>

    <LeftAndRightArrow {...nav_obj}/>
</html>