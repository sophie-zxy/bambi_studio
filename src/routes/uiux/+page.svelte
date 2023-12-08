<script>
    import UIUXCardComponent from "$lib/UIUXCardComponent.svelte";
    import RightArrow from "$lib/RightArrow.svelte";
    let cards = [
        {
            id: 1, 
            title: "Heartbeat", 
            desc: "A music app that can link people with similar music tastes. This is a music software that can search for nearby users who listen to the same song as you, and you can choose to chat or not. Through different music types and works, find people with the same taste to become friends. Help those who are not good at expressing and communicating. Not only look at people’s appearance, no need to define others by appearance.",
            src: '../../../uiux_page_pics/Heartbeat.png',
            link: '/uiux/heartbeat'
        },
        {
            id: 2, 
            title: "Eazzy Consulting", 
            desc: "Based on the original Eazzy Consulting website (Loan Service), optimizing the website according to the brand logo color scheme, adding Login and Online Payment, and adjusting the visual effect of the website as well as increasing the user experience. All functionality and design were achieved through Hubspot.",
            src: '../../../uiux_eazzyconsulting/cover.webp',
            link: '/uiux/eazzyconsulting'
        },
        {
            id: 3, 
            title: "SMUG", 
            desc: "A smart cup brand dedicated to enhancing the convenience and information that comes with your favorite beverage. We envisioned a cup with an app that can heat a beverage, keeps it warm, stir your drink, and track your daily intake.",
            src: '../../../uiux_page_pics/smug.png',
            link: '/uiux/smug'
        },
        {
            id: 4, 
            title: "Easychoice", 
            desc: "A site to help people with selection difficulties, you can choose a category that you need most at the moment and the site will give you a random answer. You can also add your own personal options, or add new categories.",
            src: '../../../uiux_easychoice_page_pics/easychoice translucent.png',
            link: '/uiux/easychoice'
        },
    ]

</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20 px-10">
    {#each cards as card}
        <UIUXCardComponent {...card}/>
    {/each}
</div>
<div class="flex justify-end">
    <RightArrow link_txt="Graphic design" link="/graphic_design"/>
</div>
