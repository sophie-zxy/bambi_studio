<script lang="ts">
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    import ImageCard from "$lib/ImageCard.svelte";
    let nav_obj = {
        left_link_txt: "Animation",
        left_link: "/animation_route",
        // right_link_txt: "sketches",
        // right_link: "/sketches_route"
    }
    let images = [
        {src: "../../illustration_page_pics/illustration2.webp", alt: "Snow"},
       
        {src: "../../illustration_page_pics/Flushing.JPG", alt: "Flushing"},
     
        {src: "../../sketches_page_pics/illustration1.webp", alt: "town"},
       
       
        {src: "../../illustration_page_pics/Game Card.PNG", alt: "Game Card"},
        {src: "../../illustration_page_pics/illustration13.webp", alt: "High heel"},
        {src: "../../illustration_page_pics/IMG_3496.jpg", alt: "img"},
       
        {src: "../../illustration_page_pics/IMG_9433.webp", alt: "Snow"},
        {src: "../../sketches_page_pics/IMG_7886.JPG", alt: "IMG3"},
        {src: "../../illustration_page_pics/illustration14.webp", alt: "Piano"},
        {src: "../../sketches_page_pics/illustration24.webp", alt: "IMG8"},
        {src: "../../illustration_page_pics/Pubg Mucha.JPG", alt: "pubg"},
     
        {src: "../../sketches_page_pics/illustration3.webp", alt: "Alley"},
        {src: "../../illustration_page_pics/Ocean.jpg", alt: "Ocean"},
       
        {src: "../../illustration_page_pics/Diamond.jpg", alt: "Diamond"},
     
        {src: "../../illustration_page_pics/IMG_9892.webp", alt: "Octopus"},
        {src: "../../illustration_page_pics/illustration5.webp", alt: "Sunset"},
        {src: "../../sketches_page_pics/illustration17.webp", alt: "Rabbit & Hands"},
        {src: "../../illustration_page_pics/Immigrate.JPG", alt: "Immigrate"},
        
        {src: "../../sketches_page_pics/illustration7.webp", alt: "IMG6"},
        {src: "../../illustration_page_pics/illustration9.webp", alt: "IMG8"},
        {src: "../../sketches_page_pics/IMG_1558.JPG", alt: "IMG2"},

        {src: "../../illustration_page_pics/illustration4.webp", alt: "Rabbit"},
        {src: "../../sketches_page_pics/IMG_1202.jpg", alt: "IMG5"},
        {src: "../../sketches_page_pics/illustration23.webp", alt: "IMG4"},
      
        {src: "../../sketches_page_pics/illustration25.webp", alt: "Town"},
        {src: "../../illustration_page_pics/illustration6.webp", alt: "Yard"},
        {src: "../../sketches_page_pics/illustration16.webp", alt: "IM7"},
        {src: "../../illustration_page_pics/illustration21.webp", alt: "IMG8"},
     
        {src: "../../sketches_page_pics/IMG_7894.JPG", alt: "IMG8"},
        {src: "../../illustration_page_pics/illustration22.webp", alt: "IMG8"},
        {src: "../../illustration_page_pics/illustration8.webp", alt: "IMG8"},
        
        {src: "../../sketches_page_pics/illustration15.webp", alt: "IMG8"},
        {src: "../../illustration_page_pics/Christmas Snow.GIF", alt: "Snow"},
        {src: "../../illustration_page_pics/illustration18.webp", alt: "IMG8"},
        {src: "../../illustration_page_pics/illustration19.webp", alt: "IMG8"},
        {src: "../../illustration_page_pics/illustration20.webp", alt: "IMG8"},
       
  
        {src: "../../sketches_page_pics/IMG_1555.JPG", alt: "IMG1"},
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

