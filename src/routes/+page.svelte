<script lang="ts">
    import type { PageProps } from './$types';
    import Bio from '$lib/Pieces/Bio.svelte';
    import Work from '$lib/Pieces/Work.svelte';
    import Projects from '$lib/Pieces/Projects.svelte';
    import Education from '$lib/Pieces/Education.svelte';

    let { data } : PageProps = $props();
    console.log(data.titles);
</script>

<link rel="stylesheet" href="src/lib/index.css">

<svelte:head>
	<title>Bryson LeBlanc</title>
</svelte:head>

<!-- Bio -->
<Bio />

<!-- Work -->
<Work />

<!-- Projects -->
<Projects />

<!-- Education -->
<Education />


<style>

</style>