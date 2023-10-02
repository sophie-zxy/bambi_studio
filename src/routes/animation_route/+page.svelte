<script>
    import LeftAndRightArrow from "$lib/LeftAndRightArrow.svelte";

    let nav_obj = {
        left_link_txt: "Graphic Design",
        left_link: "/graphic_design",
        right_link_txt: "Illustration",
        right_link: "/illustration"
    }
</script>

<html lang="postcss">
    <div class="videoContainerWrapper">
        <div class="cropContainer">
            <img class="videoContainer cropVideo" src="../../../animation_page_pics/FIT.webp" alt="FIT animation">
        </div>        
        <img class="videoContainer" src="../../../animation_page_pics/blob.webp" alt="blob animation">
        <img class="videoContainer" src="../../../animation_page_pics/extreme_pose.webp" alt="extreme pose animation">
        <img class="videoContainer" src="../../../animation_page_pics/face_expression.webp" alt="face expression animation">
        <img class="videoContainer" src="../../../animation_page_pics/Fountain.webp" alt="Fountain animation">
        <img class="videoContainer" src="../../../animation_page_pics/walk_to_run.webp" alt="walk to run animation">    
    </div>

    <LeftAndRightArrow {...nav_obj}/>
</html>

<style>
    .videoContainer {
        width: 100%;
        object-fit: fill; /* or 'fill' if you want to stretch the video */
    }

    .cropContainer {
        width: 100%;
        height: 100%; /* Or a specific height as per your design */
        overflow: hidden;
        position: relative;
    }

    .cropVideo{
        scale: 1.05;
    }

    .videoContainerWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
