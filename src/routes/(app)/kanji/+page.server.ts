import type { PageServerLoad } from "./$types";

import getKanji from "$lib/server/getKanji";

export type PageItem = {
	kvgId: string;
	symbol: string;
	jlpt: 1 | 2 | 3 | 4 | 5 | null;
	meanings: string[];
	readings_on: string[];
	readings_kun: string[];
	strokes: number | null;
};

export const load: PageServerLoad = async () => {
	const items: PageItem[] = Object.entries(getKanji()).map(([id, item]) => {
		return {
			kvgId: id,
			symbol: item.symbol,
			jlpt: item.jlpt_new,
			meanings: item.meanings,
			readings_on: item.readings_on,
			readings_kun: item.readings_kun,
			strokes: item.strokes
		};
	});

	return { items };
};
