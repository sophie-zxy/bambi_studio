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
                {:else if link.render === "Instagram"}
                    <a href={link.href} class="items-center"><InstagramSvg/></a>
                {:else if link.render === "Linkedin"}
                    <a href={link.href} class="items-center"><LinkedinSvg/></a>
                {/if}
            </li>
        {/each}
    </ul>
</div>
