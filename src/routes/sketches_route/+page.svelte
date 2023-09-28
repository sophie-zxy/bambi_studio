<script>
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let nav_obj = {
        left_link_txt: "Photography",
        left_link: "/photography",
        right_link_txt: "UIUX",
        right_link: "/uiux"
    }
</script>

<html lang="postcss">
    <h1>This page contains content about bambi's sketches stuff</h1>
    <LeftAndRightArrow {...nav_obj}/>
</html>