import { fetchMdProjects } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allProjects = await fetchMdProjects();

	return json(allProjects);
};