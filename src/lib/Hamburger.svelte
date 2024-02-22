<script>
    import DefaultNavigationBarLong from "./DefaultNavigationBarLong.svelte";
    import InstagramSvg from "./instagramSvg.svelte";
    import LinkedinSvg from "./Linkedin.svelte";
    let openModal = false;
    function toggleModal() {
        openModal = !openModal;
    }
    const navLinks = [
        { name: "UIUX DESIGNS", href: "/uiux" },
        { name: "GRAPHIC DESIGNS", href: "/graphic_design" },
        { name: "ANIMATIONS", href: "/animation_route" },
        { name: "ILLUSTRATIONS", href: "/illustration" },
        // { name: "Sketches", href: "/sketches_route" },
        // { name: "Photography", href: "/photography" },
    ];
</script>

<div>
    {#if openModal}
        <div class="test">
                <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2" on:click={toggleModal}>✕</button>
            <nav>
                {#each navLinks as link}
                    <a class="menuItems" href={link.href} on:click={toggleModal}>{link.name}</a>
                {/each}
                <div class="flex space-x-4 mt-4 items-center">
                    <a href="https://www.instagram.com/_lightnlight/?igshid=YmMyMTA2M2Y%3D">
                        <InstagramSvg/>
                    </a>
                    <a href="https://www.linkedin.com/in/zhiyi-bambi-li-390479208/">
                        <LinkedinSvg/>
                    </a>
                </div>
            </nav>
        </div>
    {:else}
        <div>
            <button class="hamburgerMenu btn btn-md border-transparent bg-transparent" on:click={toggleModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <span class="longMenu">
                <DefaultNavigationBarLong navLinks={navLinks}/>
            </span>
        </div>
    {/if}
</div>

<style>
    .test {
        background-color: rgb(255, 255, 255);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .menuItems {
        margin: 10px;
        font-size: 18px;
        color: black;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        transition: 0.3s ease-in-out;
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menuItems:hover {
        text-decoration: underline;
    }
    .menuItems > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hamburgerMenu {
        display: none;
    }

    @media (max-width: 904px) {
        .longMenu {
            display: none;
        }
        .hamburgerMenu {
            display: block;
        }
    }
</style>

