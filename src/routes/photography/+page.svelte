<script lang="ts">

    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
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
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo2.JPG", alt: "bench"},
        // {src: "../../photo_page_pics/photo1.JPG", alt: "cherry blossom"},
    ]

    // make image group 1 to contain only odd entries of images in images array
    let image_group1: {src: string, alt: string}[] = [];
    let image_group2: {src: string, alt: string}[] = [];


    for (let i = 0; i < images.length; i++) {
        if (i % 2 == 0) {
            image_group1.push(images[i])
        } else {
            image_group2.push(images[i])
        }
    }
</script>

<style>
</style>

<div class="grid grid-cols-2 gap-5 m-14">
    <div>
        {#each image_group1 as image}
            <ImageCard {...image}/>
        {/each}
    </div>
    <div>
        {#each image_group2 as image}
            <ImageCard {...image}/>
        {/each}
    </div>
</div>

<LeftAndRightArrow {...nav_obj}/>