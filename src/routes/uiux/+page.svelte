<script>
    import UIUXCardComponent from "$lib/UIUXCardComponent.svelte";
    import LeftArrow from "$lib/LeftArrow.svelte";
    let cards = [
        {id: 1, title: "SMUG", desc: "A smart cup brand dedicated to enhancing the convenience and information that comes with your favorite beverage. We envisioned a cup with an app that can heat a beverage, keeps it warm, stir your drink, and track your daily intake."},
        {id: 2, title: "Heartbeat", desc: "A music app that can link people with similar music tastes. This is a music software that can search for nearby users who listen to the same song as you, and you can choose to chat or not. Through different music types and works, find people with the same taste to become friends. Help those who are not good at expressing and communicating. Not only look at people’s appearance, no need to define others by appearance."},
        {id: 3, title: "Easychoice", desc: "A site to help people with selection difficulties, you can choose a category that you need most at the moment and the site will give you a random answer. You can also add your own personal options, or add new categories."},
    ]

</script>

<html lang="postcss">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20 px-10">
        {#each cards as card}
            <UIUXCardComponent {...card}/>
        {/each}
    </div>
    <LeftArrow link_txt="Sketches" link="/sketches_route"/>
</html>