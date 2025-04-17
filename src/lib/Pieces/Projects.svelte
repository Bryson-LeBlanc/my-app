<script lang='ts'>
    import Project from '$lib/SmallComponents/Project.svelte';
    import type { ProjType } from "$lib/types/ProjectType.ts";

    // let {projects} = $props<{ projects: ProjType[] }>();

    let projects: { [key: string]: ProjType } = {
        voting: {
            name: "Voting",
            description: ["A voting app"],
            picLink: "src/lib/static/placeholder.png"
        },
        debug: {
            name: "Debug Extension",
            description: ["A browser extension for debugging web pages"],
            picLink: "src/lib/static/placeholder.png"
        },
        pokemon: {
            name: "Pokémon App",
            description: ["An app for Pokémon information"],
            picLink: "src/lib/static/placeholder.png"
        },
        dataP: {
            name: "Data Thing",
            description: ["A project for data manipulation"],
            picLink: "src/lib/static/placeholder.png"
        }
    };

</script>

<div class="block">
    <div id="head">
        <h2>Projects</h2>
        <ul class="flex slideshow">
            <li class="projNav left">
                <button class="projNavButton arrow">˂</button>
            </li>
            <li class="projNav">
                <button class="projNavButton" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="src/lib/static/placeholder.png" alt="project" class="projIcon">
                        <span class="overlayText selected">Voting</span>
                    </div>
                </button>
            </li>
            <li class="projNav">
                <button class="projNavButton" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="src/lib/static/placeholder.png" alt="project" class="projIcon">
                        <span class="overlayText">Debug Extension</span>
                    </div>
                </button>
            </li>
            <li class="projNav">
                <button class="projNavButton" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="src/lib/static/placeholder.png" alt="project" class="projIcon">
                        <span class="overlayText">Pokémon App</span>
                    </div>
                </button>
            </li>
            <li class="projNav">
                <button class="projNavButton" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="src/lib/static/placeholder.png" alt="project" class="projIcon">
                        <span class="overlayText">Data Thing</span>
                    </div>
                </button>
            </li>
            <li class="projNav right">
                <button class="projNavButton arrow">˃</button>
            </li>
        </ul>
    </div>
    
    <Project details={projects.voting}/>
    <Project details={projects.debug}/>
    <Project details={projects.pokemon}/>
    <Project details={projects.dataP}/>
    
</div>

<style>
    p, h2 {
        color : var(--color-e);
    }

    

    ul {
        display:flex;
        align-items: center;
        margin-right : 15%;
    }

    li {
        list-style: none;
        display:inline-block;
        margin : 0px 10px 0px 10px;
    }

    .arrow {
        background: none;
        border: 2px solid transparent !important;
        color: white;
        font-weight: bold;
    }

    .projNavButton {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        border: 2px solid white;
    } .projNavButton:hover {
        opacity: 0.8;
        border: 2px solid var(--color-d);
    }

    .imgTextContainer {
        position: relative;
        display: inline-block;
    }

    .projIcon {
        display: block;
        width: 120px;
        height: 40px;
        opacity: 0.4; /* Adjust opacity as needed */
        height: auto;
    }

    .overlayText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 10px;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        pointer-events: none;
    }

    .selected {
        font-size:20px;
        text-decoration: underline;
    }


    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>