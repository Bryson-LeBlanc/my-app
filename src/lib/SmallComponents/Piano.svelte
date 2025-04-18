<script lang="ts">
    import Octave from '$lib/SmallComponents/Octave.svelte';
</script>

<div id="piano">
    <div class="octave 1">
        <Octave />
    </div>
    <div class="octave 2">
        <Octave />
    </div>
    <div class="octave 3">
        <Octave />
    </div>
</div>

<style>
    .octave {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    #piano {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-bottom : 10px;
    }
</style>