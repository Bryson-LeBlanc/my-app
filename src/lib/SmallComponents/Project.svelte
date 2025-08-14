<script lang='ts'>
    import type { ProjType } from "$lib/types/ProjectType"; 
    let { details } = $props<{ details: ProjType }>();

</script>
 

<div class="project-details flex">
    <div class="project-header">
        <h2>{details.name}</h2>
        {#if details.appLink != ""}
            <a href={details.appLink} class="app-link" target="_blank" rel="noopener noreferrer">
            <button class="nice-btn">
                🚀 View App
            </button>
            </a>
        <!-- {:else}
            <span class="no-link">No App Link Available</span> -->
        {/if}
    </div>
    <div class="desc-pic">
        <div class="desc">
            <ul>
                {#each details.description as desc}
                    <li class="details">{desc}</li>
                {/each}
            </ul>
            <div class="tools">
                <ul>
                    {#each details.tools as tool}
                        <li>{tool}</li>
                    {/each}
                </ul>
            </div>
        </div>
        
        <!-- <p>{details.description}</p> -->
        <img src={details.picLink} alt={details.name} class="project-img" />
    </div>
    
</div>



<style>
    img {
        width: 450px;
    }

    h2, li {
        color: var(--color-e);
    }


    .flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
    }

    .details {
        padding-bottom: 10px;
    }

    .desc-pic {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:90%;
    }

    .project-details {
        margin-bottom: 20px;
    }

    .project-img {
        width: 500px;
        height: 250px;
        object-fit: cover;
    }

    .project-header {
        display: flex;
        align-items: center; /* Vertically center items */
        justify-content: center; /* Center the title by default */
        width: 100%;
        position: relative; /* Allows positioning of the app link */
    }

    .app-link {
        position: absolute;
        right: 0; /* Aligns the app link to the right */
    }

    .nice-btn {
        background-color: var(--color-b);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        margin-right: 50px;
    }

    .nice-btn:hover {
        background-color: var(--color-d);
    }

    @media (max-width: 865px) {
        .project-img {
            width: 300px;
            height: 150px;
            object-fit: cover;
        }
    }
    @media (max-width: 650px) {
        .project-img {
            display:none;
        }
    }
</style>