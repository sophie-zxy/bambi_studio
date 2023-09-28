<script>
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";
    let nav_obj = {
        left_link_txt: "Illustration",
        left_link: "/illustration",
        right_link_txt: "Sketches",
        right_link: "/sketches_route"
    }
</script>

<html lang="postcss">
    <h1>This page contains content about bambi's photography stuff</h1>
    <LeftAndRightArrow {...nav_obj}/>
</html>