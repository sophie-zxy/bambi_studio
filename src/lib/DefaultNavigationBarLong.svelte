<script>
    import InstagramSvg from "./instagramSvg.svelte";
    import LinkedinSvg from "./Linkedin.svelte";
    export let navLinks = [];
</script>

<div>
    <ul class="flex items-center flex-wrap menu menu-horizontal px-1">
        {#each navLinks as link}
            <li class="flex items-center px-2">
                {#if link.name}
                    <a href={link.href} class="items-center">{link.name}</a>
                {/if}
            </li>
        {/each}
        <li class="flex items-center">
            <a href="https://www.instagram.com/_lightnlight/?igshid=YmMyMTA2M2Y%3D">
                <InstagramSvg/>
            </a>
        </li>
        <li class="flex items-center">
            <a href="https://www.linkedin.com/in/zhiyi-bambi-li-390479208/">
                <LinkedinSvg/>
            </a>
        </li>
    </ul>
</div>

<style>
    body {
        background-color: white !important;
    }
</style>