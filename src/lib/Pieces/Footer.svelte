<script lang='ts'>
    import Piano from '$lib/SmallComponents/Piano.svelte';
</script>


<div id="head">
    <div class="flex">
        <h2>Contact Me!</h2>
        <div class="contacts flex">
            <a href="mailto:brysonleblanc2004@gmail.com" class="icons" aria-label="github">
                <img class="icon" src="src\lib\still\mail.png" alt="git">
            </a>
            <a href="https://www.linkedin.com/in/b-w-l/" class="icons" aria-label="linkedin">
                <img class="icon ln" src="src\lib\still\inICON.png" alt="in">
            </a>
        </div>
        <a href="https://github.com/Bryson-LeBlanc/my-app" class="nav flex source" aria-label="github">
            <img class="icon src" src="src\lib\still\gitICON.png" alt="git">
            Source Code
        </a>
    </div>
    <p>I'm pursuing opportunities that begin following May, 2026 (My graduation date)!</p>
</div>
<br />

<div class="piano-wrapper">
    <Piano/>
</div>


<footer>
	<div class="info">
		<span class="powered-by">
			Built with
			<a class="icon-link sveltekit-link" href="https://kit.svelte.dev/" target="_blank">
				<svg
					class="iconify-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 256 256"
					><g fill="none"
						><rect width="256" height="256" fill="#ff3e00" rx="60" /><g
							clip-path="url(#skillIconsSvelte0)"
							><path
								fill="#fff"
								d="M193.034 61.797c-16.627-23.95-49.729-30.966-73.525-15.865L77.559 72.78c-11.44 7.17-19.372 18.915-21.66 32.186c-1.984 11.136-.306 22.576 5.033 32.492c-3.66 5.491-6.102 11.593-7.17 18c-2.44 13.576.764 27.61 8.696 38.745c16.78 23.95 49.728 30.966 73.525 15.865l41.949-26.695c11.441-7.17 19.373-18.915 21.661-32.187c1.983-11.135.305-22.576-5.034-32.491c3.661-5.492 6.102-11.593 7.17-18c2.593-13.729-.61-27.763-8.695-38.898"
							/><path
								fill="#ff3e00"
								d="M115.39 196.491a33.25 33.25 0 0 1-35.695-13.271c-4.881-6.712-6.712-15.101-5.34-23.339c.306-1.373.611-2.593.916-3.966l.763-2.44L78.169 155a55.6 55.6 0 0 0 16.475 8.237l1.525.458l-.152 1.525c-.153 2.136.458 4.424 1.678 6.255c2.441 3.508 6.712 5.186 10.83 4.118c.916-.305 1.831-.61 2.594-1.068l41.796-26.695c2.136-1.372 3.509-3.355 3.966-5.796s-.152-5.034-1.525-7.017c-2.441-3.509-6.712-5.034-10.831-3.966c-.915.305-1.83.61-2.593 1.068l-16.017 10.22c-2.593 1.678-5.491 2.898-8.542 3.661a33.25 33.25 0 0 1-35.695-13.271c-4.729-6.712-6.712-15.102-5.186-23.339c1.372-7.932 6.254-15.102 13.118-19.373l41.949-26.695c2.593-1.678 5.492-2.898 8.543-3.814a33.25 33.25 0 0 1 35.695 13.272c4.881 6.712 6.711 15.101 5.339 23.339c-.306 1.373-.611 2.593-1.068 3.966l-.763 2.44l-2.136-1.525a55.6 55.6 0 0 0-16.474-8.237l-1.526-.458l.153-1.525c.153-2.136-.458-4.424-1.678-6.255c-2.441-3.508-6.712-5.034-10.83-3.966c-.916.305-1.831.61-2.594 1.068l-41.796 26.695c-2.136 1.373-3.509 3.356-3.966 5.797s.152 5.034 1.525 7.017c2.441 3.508 6.712 5.033 10.831 3.966c.915-.305 1.83-.611 2.593-1.068l16.017-10.22c2.593-1.678 5.491-2.899 8.542-3.814a33.25 33.25 0 0 1 35.695 13.271c4.881 6.712 6.712 15.102 5.339 23.339c-1.373 7.932-6.254 15.102-13.119 19.373l-41.949 26.695c-2.593 1.678-5.491 2.898-8.542 3.813"
							/></g
						><defs
							><clipPath id="skillIconsSvelte0"
								><path fill="#fff" d="M53 38h149.644v180H53z" /></clipPath
							></defs
						></g
					></svg
				>
				<span>SvelteKit</span>
			</a>
            </span>

</footer>


<style>
    footer {
        margin-top:1rem;
        padding: 1.3rem;
        background-color: var(--color-b);
        color: var(--color-e);
        font-weight: bold;
    }
    .sveltekit-link {
        text-decoration: none;
        color: white;
        margin-left:5px;
    } .sveltekit-link:hover {
        border: 3px solid black;
    }
    .icon-link {
        background-color: #fff;
        border: 5px solid #fff;
        padding: 2.5px;
        color: #000;
        border-radius: .4em;
        align-self: flex-end;
        font-size: 1.05em;
    }
    .flex {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 800px) {
		.piano-wrapper {
            display:none;
        }
	}

    .contacts {
        margin-left:30px;
        margin-top: 15px;
        
    }

    .source {
        margin-left: 52%;
        border: 3px solid black;
        padding: 5px;
        border-radius: .4em;
        background-color: var(--color-a);
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    .source:hover {
        border: 3px solid #d7c6ff;
    }
    .src {
        margin-right:5px;
    }

    .icon {
        width:40px;
        height:40px;
    } .icon:hover {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    } 
    .ln {
        width: 28px !important;
        height: 28px !important;
        margin-left:10px;
    }

    h2 {
        color : var(--color-d);
        margin-bottom : 10px;
    }
    p {
        margin-left: 0;
        margin-bottom: 50px;
    }

    #head {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>