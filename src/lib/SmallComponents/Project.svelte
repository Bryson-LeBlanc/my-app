<script lang='ts'>
    import type { ProjType } from "$lib/types/ProjectType"; 
    let { details } = $props<{ details: ProjType }>();

</script>
 

<div class="project-details flex">
    <h2>{details.name}</h2>
    <div class="desc-pic">
        <ul>
            {#each details.description as desc}
                <li>{desc}</li>
            {/each}
        </ul>
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
</style>