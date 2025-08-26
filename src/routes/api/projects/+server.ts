import { fetchMdProjects } from '$lib/utils/+index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allProjects = await fetchMdProjects();
	return json(allProjects);
};