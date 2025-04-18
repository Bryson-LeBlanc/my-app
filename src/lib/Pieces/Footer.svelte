<script lang='ts'>
    import Piano from '$lib/SmallComponents/Piano.svelte';
</script>


<div id="head">
    <h2>Contact Me!</h2>
</div>

<Piano/>

<style>
    h2 {
        color : var(--color-d);
    }

    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>