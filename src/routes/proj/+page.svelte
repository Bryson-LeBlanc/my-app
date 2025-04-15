<script lang="ts">
    import type { PageProps } from './$types';

    let { data } : PageProps = $props();
</script>

<section class="hero bg-color full-width"> 
	<h1>Bryson LeBlanc {data.titles['proj']}</h1>
    <a href="/">Back</a>

</section>