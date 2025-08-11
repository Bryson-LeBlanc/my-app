<script lang="ts">
    import type { Job } from '$lib/types/Job.ts';
    export let details: {
        title: string;
        role: string;
        date: string;
        img: string;
        description: string[];
        location : string;
        techs : string[];
    };
</script>

<div class="job">
    <div class="job-header flex">
        <img src={details.img} alt={details.title} />
        <div class="main-details">
            <h3 class="role">{details.role}</h3>
            <div id="title-place" class="flex">
                <h3>{details.title}</h3>
                <p class="hyphen">-</p> 
                <h4>{details.location}</h4>
            </div>
            <div id="dates">
                <p class="dateTime">{details.date}</p>
            </div>
        </div>
    </div>
    <div class="job-details">
        <ul class="description">
            {#each details.description as line}
                <li>{line}</li>
            {/each}
        </ul>
    </div>

    <br/>
    <br/>

</div>


<style>
    img {
        width : 100px;
        margin-left:20px;
        border: 3px solid var(--color-d);
    }

    h3, p, h4, li {
        color: var(--color-e);
    }


    .hyphen {
        color: var(--color-e);
        margin: 0px 20px 0px 20px !important;
        font-size:20px;
    }


    .description {
        margin-bottom: 30px;
        margin-top: 20px;
    }

    .dateTime {
        margin : 0px 0px 0px 20px;
    }

    .flex {
        display:flex;
        align-items: center;
    }

    h3 {
        margin: 0px 0px 0px 20px;
    }

    #title-place {
        height: 40px;
    }

    li {
        padding-bottom: 10px;
    }
</style>