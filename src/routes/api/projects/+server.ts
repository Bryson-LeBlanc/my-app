import { fetchMdProjects } from 'c:/Users/bwl0016/Documents/Projects/svPort/my-app/src/lib/utils/+index';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allProjects = await fetchMdProjects();
	return json(allProjects);
};