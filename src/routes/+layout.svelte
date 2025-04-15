<script>
    import '$lib/styles/global.scss';
    import Header from '$lib/Pieces/Header.svelte';
    import Footer from '$lib/Pieces/Footer.svelte';

	let { children } = $props();
</script>

<!-- <nav>
    <button>Bio</button>
    <button>Work</button>
    <button>Projects</button>
    <button>Education</button>
</nav> -->

<Header />
{@render children()}
<Footer />


