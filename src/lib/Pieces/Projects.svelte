<script lang='ts'>
    import Project from '$lib/SmallComponents/Project.svelte';
    import type { ProjType } from "$lib/types/ProjectType.ts";
    import { onMount } from 'svelte';

    // let {projects} = $props<{ projects: ProjType[] }>();

    let projects: { [key: string]: ProjType } = {
        voting: {
            name: "Voting",
            description: [
                ".NET app written in C#, built for elections held at Auburn University (i.e. SGA, Homecoming Queen, etc.)",
                "Accessible, responsive, and secure. Built in role based permissions for voters, admins, watchers, and election officials.", 
                "Developed in the agile workflow with a team of 6 students alongside QA and project management teams.",
            ],
            picLink: "/still/voting.png",
            appLink: ""
        },
        // debug: {
        //     name: "Debug Extension",
        //     description: ["A browser extension for debugging web pages"],
        //     picLink: "src/lib/still/placeholder.png",
        //     appLink: ""
        // },
        pokemon: {
            name: "Pokémon App",
            description: [
                "Personal project to practice API usage, edge case handling, authentication, and cloud-hosted NoSQL DBaaS.",
                "Uses the PokéAPI to fetch Pokémon data and display it in a user-friendly interface.",
                "Includes 'Who's that Pokémon?' game mode with user-based high scores to test Pokémon knowledge.",
                "Integrated Firebase for authentication and real-time NoSQL data storage."
            ],
            picLink: "/still/poke.png",
            appLink: "https://mypokemonapp-xpyl.onrender.com"
        },
        dataP: {
            name: "Auburn Football",
            description: [
                "Auburn University Football application (AUFSTC) for student ticketing, worked on during my time with Campus Web Solutions",
                "Responded to deadlock errors during a high traffic ticketing event, rewrote logic to improve performance from >2min to <2seconds",
                "Built mass data manipulation functionality for admin ticket appeal decisions",
                "Redesign admin appeals page frontend with accessibility, responsiveness, and user experience in mind"
            ],
            picLink: "/still/aufstc.png",
            appLink: ""
        }
    };

    onMount(() => {
        let overlays = document.querySelectorAll('.overlayText');
        function handleOverlay(overlays : NodeListOf<Element>, e : Event) {
            let i = 0;
            overlays.forEach((overlay) => {
                if (overlay.classList.contains('selected')) {
                    i = parseInt(overlay.getAttribute('data-index') || '0', 10);
                    overlay.classList.remove('selected');
                }
            });
            let target = e.target as HTMLButtonElement; // what was clicked
            let projNav = target.closest('.box') as HTMLLIElement;
            if (projNav == null) { // we are using arrow keys in this case
                if (target.innerHTML == "˂") { // left nav
                    let nextI = (i === 0) ? 3 : i - 1;
                    overlays[nextI].classList.add('selected');
                    
                } else { // right nav
                    let nextI = (i === 3) ? 0 : i + 1;
                    overlays[nextI].classList.add('selected');
                }
                
                
                
            } else {
                let overlayText = projNav.querySelector('.overlayText') as HTMLSpanElement;
                overlayText.classList.add('selected');
            }
        
        }

        // handle project navigation via title boxes
        const projNavButtons = document.querySelectorAll('.box');
        projNavButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                let target = e.target as HTMLButtonElement; // what was clicked
                let projNav = target.closest('.box') as HTMLLIElement;

                let projIndex = Array.from(projNavButtons).indexOf(projNav); // index of clicked project
                let projDivs = document.querySelectorAll('.is-selected');
                projDivs.forEach((div, index) => {
                    // show and hide proper projects
                    if (index === projIndex) {
                        div.classList.add('yes');
                        div.classList.remove('no');
                    } else {
                        div.classList.add('no');
                        div.classList.remove('yes');
                    }
                });
                handleOverlay(overlays, e);
            });
        });

        // handle project navigation via arrows
        const projNavArrows = document.querySelectorAll('.arrow');
        projNavArrows.forEach((arrow) => {
            arrow.addEventListener('click', (e) => {
                if (arrow.innerHTML == "˂") { // left nav
                    let projDivs = document.querySelectorAll('.is-selected');
                    let selectedIndex = Array.from(projDivs).findIndex(div => div.classList.contains('yes'));
                    if (selectedIndex > 0) {
                        projDivs[selectedIndex].classList.add('no');
                        projDivs[selectedIndex].classList.remove('yes');
                        projDivs[selectedIndex - 1].classList.add('yes');
                        projDivs[selectedIndex - 1].classList.remove('no');
                    } else {
                        projDivs[selectedIndex].classList.add('no');
                        projDivs[selectedIndex].classList.remove('yes');
                        projDivs[3].classList.add('yes');
                        projDivs[3].classList.remove('no');
                    }
                } else { // right nav
                    let projDivs = document.querySelectorAll('.is-selected');
                    let selectedIndex = Array.from(projDivs).findIndex(div => div.classList.contains('yes'));
                    if (selectedIndex < 3) {
                        projDivs[selectedIndex].classList.add('no');
                        projDivs[selectedIndex].classList.remove('yes');
                        projDivs[selectedIndex + 1].classList.add('yes');
                        projDivs[selectedIndex + 1].classList.remove('no');
                    } else {
                        projDivs[selectedIndex].classList.add('no');
                        projDivs[selectedIndex].classList.remove('yes');
                        projDivs[0].classList.add('yes');
                        projDivs[0].classList.remove('no');
                    }
                }

                handleOverlay(overlays, e);
            });
        });
    });

    

</script>

<div class="block">
    <div id="head">
        <h2>Projects</h2>
        <ul class="flex slideshow">
            <li class="projNav left">
                <button class="projNavButton arrow">˂</button>
            </li>
            <li class="projNav square">
                <button class="projNavButton box" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="/still/voting.png" alt="project" class="projIcon">
                        <span class="overlayText selected" data-index="0">Voting</span>
                    </div>
                </button>
            </li>
            <!-- <li class="projNav square">
                <button class="projNavButton box" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="src/lib/still/placeholder.png" alt="project" class="projIcon">
                        <span class="overlayText" data-index="1">React Project???</span>
                    </div>
                </button>
            </li> -->
            <li class="projNav square">
                <button class="projNavButton box" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="/still/poke.png" alt="project" class="projIcon">
                        <span class="overlayText" data-index="2">Pokémon App</span>
                    </div>
                </button>
            </li>
            <li class="projNav square">
                <button class="projNavButton box" aria-label="project">
                    <div class="imgTextContainer">
                        <img src="/still/aufstc.png" alt="project" class="projIcon">
                        <span class="overlayText" data-index="3">Auburn Football</span>
                    </div>
                </button>
            </li>
            <li class="projNav right">
                <button class="projNavButton arrow">˃</button>
            </li>
        </ul>
    </div>
    
    <div class="is-selected yes" data-index="0">
        <Project details={projects.voting}/>
    </div>
    <!-- <div class="is-selected no" data-index="1">
        <Project details={projects.debug}/>
    </div> -->
    <div class="is-selected no" data-index="2">
        <Project details={projects.pokemon}/>
    </div>
    <div class="is-selected no" data-index="3">
        <Project details={projects.dataP}/>
    </div>

</div>

<style>
    h2 {
        color : white;
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
        width: 120px; /* Set a fixed width */
        height: 60px; /* Set a fixed height */
        object-fit: cover; /* Ensures the image fills the box without distortion */
        opacity: 0.4; /* Adjust opacity as needed */
    }

    .overlayText {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 11px;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        pointer-events: none;
    }

    .selected {
        font-size:20px;
        text-decoration: underline;
    }

    .no {
        display:none;
    }

    .yes {
        display:block;
    }

    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (max-width:1000px) {
        .left {
            width:10px;
        }
        .right {
            width:10px;
        }
    }
    @media (max-width: 865px) {
		.square {
            display:none;
        }
        .slideshow {
            margin-right: 25%;
        }
        .left {
            margin-right: 75px;
        }
        .right {
            margin-left: 75px;
        }
	}
    @media (max-width: 600px) {
		.square {
            display:none;
        }
        .slideshow {
            margin-right: 25%;
        }
        .left {
            margin-right: 10px;
            width: 10px;
        }
        .right {
            margin-left: 10px;
        }
	}
</style>