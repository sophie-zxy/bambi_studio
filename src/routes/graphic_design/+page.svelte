<script>
    import GraphicDesignCardComponent from "$lib/GraphicDesignCardComponent.svelte";
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let cards = [
        {id: 17, title: "YIFANG - POSTER", src:"../../../graphic_page_pics/yifang.webp"},
        {id: 17, title: "CHELI - COUPON", src:"../../../graphic_page_pics/cheli.webp"},
        {id: 17, title: "THE LITTLE PRINCE - BOOK COVER", src:"../../../graphic_page_pics/thelittleprince.webp"},
        {id: 17, title: "SOCIAL MEDIA POST", src:"../../../graphic_page_pics/midsummer.webp"},
        {id: 17, title: "SOCIAL MEIDA POST", src:"../../../graphic_page_pics/referral.webp"},
        {id: 17, title: "PRIME GUARD - BUSINESS CARD", src:"../../../graphic_page_pics/primeguard.webp"},
        {id: 17, title: "POSTER", src:"../../../graphic_page_pics/Poster Mokcup.webp"},
        {id: 17, title: "SOCIAL MEIDA POST", src:"../../../graphic_page_pics/socialmediapost.webp"},
        {id: 17, title: "MENU", src:"../../../graphic_page_pics/menu.webp"},
        {id: 17, title: "POSTER", src:"../../../graphic_page_pics/poster.webp"},
        // {id: 1, title: "Event Poster", src:"../../../graphic_page_pics/poster1.webp"},
        // {id: 2, title: "Event Poster", src:"../../../graphic_page_pics/poster2.webp"},
        // {id: 3, title: "Event Poster", src:"../../../graphic_page_pics/poster3.webp"},
        // {id: 4, title: "Poster", src:"../../../graphic_page_pics/poster4.webp"},
        // {id: 5, title: "Poster", src:"../../../graphic_page_pics/poster5.webp"},
        // {id: 6, title: "Poster", src:"../../../graphic_page_pics/poster6.webp"},
        // {id: 7, title: "Menu", src:"../../../graphic_page_pics/poster7.webp"},
        // {id: 8, title: "Poster", src:"../../../graphic_page_pics/poster8.webp"},
        // {id: 9, title: "Poster", src:"../../../graphic_page_pics/poster9.webp"},
        // {id: 10, title: "Poster", src:"../../../graphic_page_pics/poster10.webp"},
        // {id: 11, title: "Poster", src:"../../../graphic_page_pics/poster11.webp"},
        // {id: 12, title: "Poster", src:"../../../graphic_page_pics/poster12.webp"},
        // {id: 13, title: "Postcard", src:"../../../graphic_page_pics/poster13.webp"},
        // {id: 14, title: "Menu", src:"../../../graphic_page_pics/poster14.webp"},
        // {id: 15, title: "Menu", src:"../../../graphic_page_pics/poster15.webp"},
        // {id: 16, title: "Poster", src:"../../../graphic_page_pics/poster16.webp"},
        // {id: 17, title: "Poster", src:"../../../graphic_page_pics/poster17.webp"},
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