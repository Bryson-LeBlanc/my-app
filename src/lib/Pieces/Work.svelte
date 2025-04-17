<script lang='ts'>
    import Job from '$lib/SmallComponents/Job.svelte';
    let data = {
        cws: {
            title: "Auburn University Campus Web Solutions",
            role: "Full-Stack Web Developer",
            date: "May 2024 - August 2024, Jan 2025 - Present",
            img: "src/lib/static/cws.jpg",
            description: "Working on various web development projects for Auburn University, focusing on enhancing user experience and system functionality.",
            location: "Auburn, AL"
        },
        roadsync: {
            title: "RoadSync",
            role: "Software Engineering Intern",
            date: "May 2023 - Aug 2023, May 2025 - Aug 2025",
            img: "src/lib/static/roadsync.png",
            description: "Contributed to data visualization and system health monitoring, improving operational efficiency.",
            location: "Atlanta, GA"
        }
    }
</script>

<div class="block">
    <div id="head">
        <h2>Work</h2>
    </div>
    <Job details={data.cws}/>
    <Job details={data.roadsync}/>
</div>

<style>
    p, h2 {
        color : var(--color-e);
    }

    #head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>