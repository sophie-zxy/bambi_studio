
<script>
    export let src = '';
    export let text = '';
    export let link = '';
    let squareDimension = '25rem'
    let isHovered = false;
</script>

<div class="card only:bg-cover bg-center"
     style="background-image: url({src}); background-size: cover; width: {squareDimension}; height: {squareDimension};"
     on:mouseenter={() => isHovered = true}
     on:mouseleave={() => isHovered = false}
     on:click={() => window.location.href = link}
     on:keydown|preventDefault={(e) => {
         if (e.key === 'Enter') {
             window.location.href = link;
         }
     }}
     role="button" 
     tabindex="0">
    {#if isHovered}
        <div class="text p-4 rounded-md animate-pulse"></div>
        <div class="text p-4 rounded-md">{text}</div>
    {/if}
</div>

<style>
    .card {
        position: relative;
    }
    .card:hover .text {
        font-family: "EB Garamond";
        background-color: rgba(255, 255, 255, 0.598);
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 3s;
        opacity: 1;
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-weight: 200;
        color: black;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
</style>