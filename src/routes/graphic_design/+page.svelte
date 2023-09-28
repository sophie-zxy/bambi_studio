<script>
    import GraphicDesignCardComponent from "$lib/GraphicDesignCardComponent.svelte";
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let cards = [
        {id: 1, title: "Event Poster"},
        {id: 2, title: "Event Poster"},
        {id: 3, title: "Event Poster"},
        {id: 4, title: "Poster"},
        {id: 5, title: "Menu"},
        {id: 6, title: "Poster"},
        {id: 7, title: "Menu"},
        {id: 8, title: "Poster"},
        {id: 9, title: "Poster"},
        {id: 10, title: "Poster"},
        {id: 11, title: "Poster"},
        {id: 12, title: "Poster"},
        {id: 13, title: "Postcard"},
        {id: 14, title: "Postcard"},
        {id: 15, title: "Postcard"},
        {id: 16, title: "Postcard"},
        {id: 17, title: "Postcard"},
        {id: 18, title: "Event Poster"},
    ]
    let nav_obj = {
        left_link_txt: "Animation",
        left_link: "/animation_route",
        right_link_txt: "Illustration",
        right_link: "/illustration"
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