<script lang='ts'>
    import Job from '$lib/SmallComponents/Job.svelte';
    let data = {
        cws: {
            title: "Auburn University Campus Web Solutions",
            role: "Full-Stack Web Developer",
            date: "May 2024 - August 2024, Jan 2025 - May 2025",
            img: "src/lib/still/cws.jpg",
            description: [
                "Working on various web development projects in the full stack for Auburn University, focusing on enhancing user experience, accessibility, and system functionality.",
                "Design and build database schemas and queries to support these web applications, ensuring efficient data management and retrieval.",
                "Collaborate with fellow developers and mentor younger students in the program, fostering a collaborative learning environment.",
                "Follow Agile workflow to manage project timelines, ensuring timely completion of tasks.",
                "Write and receive code reviews in the Git flow, maintaining high code quality and standards."
            ],
            location: "Auburn, AL",
            techs: ["JavaScript", "Jira", "Bootstrap", ".NET", "SQL", "C#", "HTML", "CSS", "GitHub"]
        },
        roadsync: {
            title: "RoadSync",
            role: "Software Engineering Intern",
            date: "May 2023 - Aug 2023, May 2025 - Aug 2025",
            img: "src/lib/still/roadsync.png",
            description: [
                "Contributed to data visualization and system health monitoring with Datadog, improving operational efficiency.",
                "Wrote python script to automate specific complex SQL queries, enhancing data retrieval processes.",
                "Developed OAuth 2.0 OIDC authentication for applications, enhancing security and user management."
            ],
            location: "Atlanta, GA",
            techs: ["Python", "DataDog", "Jira", "GitLab", "Docker"]
        }
    }
</script>

<div class="block">
    <div id="head">
        <h2>Experience</h2>
    </div>
    <Job details={data.cws}/>
    <Job details={data.roadsync}/>
</div>

<style>
    h2 {
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