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
            <video class="videoContainer cropVideo" src="../../../animation_page_pics/FIT.mp4" autoplay loop muted playsinline></video>
        </div>        
        <video class="videoContainer" src="../../../animation_page_pics/blob.mp4" autoplay loop muted playsinline></video>
        <video class="videoContainer" src="../../../animation_page_pics/extreme_pose.mp4" autoplay loop muted playsinline></video>
        <video class="videoContainer" src="../../../animation_page_pics/face_expression.mp4" autoplay loop muted playsinline></video>
        <video class="videoContainer" src="../../../animation_page_pics/Fountain.mp4" autoplay loop muted playsinline></video>
        <video class="videoContainer" src="../../../animation_page_pics/walk_to_run.mp4" autoplay loop muted playsinline></video>    
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
