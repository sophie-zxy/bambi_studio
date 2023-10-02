<script>
    import GraphicDesignCardComponent from "$lib/GraphicDesignCardComponent.svelte";
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let cards = [
        {id: 1, title: "Event Poster", src:"../../../graphic_page_pics/poster1.png"},
        {id: 2, title: "Event Poster", src:"../../../graphic_page_pics/poster2.png"},
        {id: 3, title: "Event Poster", src:"../../../graphic_page_pics/poster3.png"},
        {id: 4, title: "Poster", src:"../../../graphic_page_pics/poster4.png"},
        {id: 5, title: "Poster", src:"../../../graphic_page_pics/poster5.png"},
        {id: 6, title: "Poster", src:"../../../graphic_page_pics/poster6.png"},
        {id: 7, title: "Menu", src:"../../../graphic_page_pics/poster7.png"},
        {id: 8, title: "Poster", src:"../../../graphic_page_pics/poster8.png"},
        {id: 9, title: "Poster", src:"../../../graphic_page_pics/poster9.png"},
        {id: 10, title: "Poster", src:"../../../graphic_page_pics/poster10.png"},
        {id: 11, title: "Poster", src:"../../../graphic_page_pics/poster11.png"},
        {id: 12, title: "Poster", src:"../../../graphic_page_pics/poster12.png"},
        {id: 13, title: "Postcard", src:"../../../graphic_page_pics/poster13.png"},
        {id: 14, title: "Menu", src:"../../../graphic_page_pics/poster14.png"},
        {id: 15, title: "Menu", src:"../../../graphic_page_pics/poster15.png"},
        {id: 16, title: "Poster", src:"../../../graphic_page_pics/poster16.png"},
        {id: 17, title: "Poster", src:"../../../graphic_page_pics/poster17.png"},
        // {id: 18, title: "Event Poster", src:"../../../graphic_page_pics/poster18.png"},
    ]
    let nav_obj = {
        left_link_txt: "UIUX",
        left_link: "/uiux",
        right_link_txt: "Animation",
        right_link: "/animation_route"
    }

</script>

<html lang="postcss">
    <div class="gd">
        {#each cards as card}
            <GraphicDesignCardComponent {...card}/>
        {/each}
    </div>
    <LeftAndRightArrow {...nav_obj}/>
</html>

<style>
    .gd {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
    }
</style>