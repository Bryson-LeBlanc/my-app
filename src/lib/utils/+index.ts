import type { ProjType } from '$lib/types/ProjectType';

/**
 * Fetches all markdown files about projects
 *
 * @returns {Promise<ProjType[]>} A promise that resolves to an array of ProjectType objects.
 */
export const fetchMdProjects = async (): Promise<ProjType[]> => {
	// Use import.meta.glob to get all markdown files in the skills directory
	const allFiles = import.meta.glob('/md/*.md');
	// Convert object to array of entries for easier processing
	const iterableFiles = Object.entries(allFiles);

	const allProjects = await Promise.all(
		iterableFiles.map(async ([, resolver]) => {
			// Resolver function returns the file content with metadata
			const { metadata } = (await resolver()) as {
				metadata: {
					name: string;
					picLink: string;
					description: string[];
				};
			};

			// Determine the image URL - use a generic fallback if no specific image is provided
			const imageUrl = metadata.picLink
				? `/images/skills/${metadata.picLink}`
				: '/images/generic_skill.svg';

			return {
				name: metadata.name,
				picLink: imageUrl,
                description: metadata.description || [], // Ensure description is an array, defaulting to empty if not provided
			};
		})
	);

	return allProjects;
};