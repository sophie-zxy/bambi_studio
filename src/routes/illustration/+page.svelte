<script>
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let nav_obj = {
        left_link_txt: "Graphic Design",
        left_link: "/graphic_design",
        right_link_txt: "Photography",
        right_link: "/photography"
    }
</script>

<html lang="postcss">
    <h1>This page contains content about bambi's illustrations stuff</h1>
    <LeftAndRightArrow {...nav_obj}/>
</html>

