<script lang="ts">
    import type { PageProps } from './$types';
    import Bio from '$lib/Pieces/Bio.svelte';
    import Work from '$lib/Pieces/Work.svelte';
    import Projects from '$lib/Pieces/Projects.svelte';
    import Education from '$lib/Pieces/Education.svelte';
    import Break from '$lib/Pieces/Break.svelte';

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<link rel="stylesheet" href="src/lib/index.css">

<svelte:head>
    <title>Bryson LeBlanc</title>
</svelte:head>

<!-- Bio -->
<Bio />
<Break />
<!-- Projects -->
<Projects />
<Break />
<!-- Work -->
<Work />
<Break />
<!-- Education -->
<Education />
<Break />

<!-- Back to Top Button -->
<button class="back-to-top" on:click={scrollToTop}>↑ Back to Top</button>

<style>
    .back-to-top {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--color-b);
        color: white;
        border: none;
        width: 130px;
        border-radius: 3px;
        height: 50px;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .back-to-top:hover {
        background-color: var(--color-d);
    }
</style>