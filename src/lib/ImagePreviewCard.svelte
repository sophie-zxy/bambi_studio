<script>
    import { onMount } from 'svelte';
    import "@fontsource/eb-garamond/400.css";

    export let src = '';
    export let text = '';
    export let link = '';
    let isHovered = false;

    onMount(() => {
        isHovered = false;
    });
</script>

<a href={link}>
    <div class="grid card justify-items-center" 
         on:mouseenter={() => isHovered = true} 
         on:mouseleave={() => isHovered = false}>
        <div class="card-container" 
             style="transform: scale({isHovered ? 1.02 : 1}); transition-duration: {isHovered ? '200ms' : '0ms'};">
            <div class="inner-card only:bg-cover bg-center" 
                 style="background-image: url({src}); background-size: cover;">
            </div>
            <p class="text p-4 text-black">{text}</p>
        </div>
    </div>
</a>

<style>
    .card {
        position: relative;
    }
    .card-container {
        display: flex; /* 使用 Flexbox 布局 */
        flex-direction: column; /* 垂直排列 */
        justify-content: center; /* 垂直居中对齐 */
        align-items: center; /* 水平居中对齐 */
        will-change: transform;
        transition: transform 200ms;
        transform-origin: center center; /* 将放大/缩小的中心点设置为卡片中心 */
    }
    .inner-card {
        width: 20rem;
        height: 20rem;
        border-radius: 0%;
    }
    .text {
        /* font-family: "EB Garamond";
        font-weight: 400;
        font-size: 18px; */
        z-index: 5;
        text-align: center; /* 文字居中对齐 */
    }

    .card-container:hover {
        transform: scale(1.02);
    }

    @media (max-width: 640px) {
        .inner-card {
            width: 10rem;
            height: 10rem;
            border-radius: 0%;
        }
        .text {
            font-size: 14px;
        }
    }
</style>
