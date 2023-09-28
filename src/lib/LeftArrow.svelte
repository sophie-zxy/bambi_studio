<script>
    export let link_txt = ''
    export let link = '/'
</script>

<html lang="postcss">
    <div class="back-btn ml-10">
        <button class="btn btn-lg no-animation bg-transparent border-transparent hover:underline" on:click={() => {
            window.location.href = link
        }}>
            <img alt="Previous page arrow" width="25" height="25" src="https://www.reshot.com/build/chevron--dark-ceeb4c718ee6f014d714b646d957cdba33c46f313fa6ac77cabcc5bc8f4901dc.svg" style="transform: rotate(180deg);">
            {link_txt}
        </button>
    </div>
</html>

<style>
    .back-btn {
        font-family: "EB Garamond";
    }

    .btn:hover {
        cursor: pointer;
        background-color: transparent;
        border-color: transparent;
    }
</style>