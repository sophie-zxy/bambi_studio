<script>
    import LeftArrow from "$lib/LeftArrow.svelte";
    import RightArrow from "$lib/RightArrow.svelte";
    export let left_link_txt = ''
    export let left_link = '/'
    export let right_link_txt = ''
    export let right_link = '/'

</script>

<html lang="postcss">
    <div class="flex justify-between mt-9">
        <LeftArrow link_txt={left_link_txt} link={left_link}/>
        <RightArrow link_txt={right_link_txt} link={right_link}/>
    </div>
</html>