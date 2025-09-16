import type { ProjType } from '$lib/types/ProjectType.ts';

import type { Load } from '@sveltejs/kit';

// be weary about this load type thing
export const load: Load = async ({ fetch }) => {
	try {
		const response = await fetch(`/api/projects`);
		const projects = (await response.json()) as ProjType[];
		return {
			projects
		};
	} catch (error) {
		console.error('Failed to fetch data for the home page', error);
		throw error;
	}
};