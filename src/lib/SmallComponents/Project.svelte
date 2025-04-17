<script lang='ts'>
    import type { ProjType } from "$lib/types/ProjectType"; 
    let { details } = $props<{ details: ProjType }>();

</script>
 
 
<h2>{details.name}</h2>
<div class="desc-pic">
    <p>{details.description}</p>
    <img src={details.picLink} alt={details.name} class="project-img" />
</div>