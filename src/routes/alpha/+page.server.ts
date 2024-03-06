import { cssFabric } from '$lib/cssFabric/index.js';
import type { PageServerLoad } from '../$types.js';
import cssFabricSheet from '../../../cssFabric-sheet.json';

export const load = (async () => {
	cssFabric.cssFabricSheet();
	return { cssFabricSheet };
}) satisfies PageServerLoad;
