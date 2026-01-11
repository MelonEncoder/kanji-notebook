// import { json } from "@sveltejs/kit";

// let progressData = {};

// export const POST = async ({ request }) => {
// 	const { symbolId, progressIncrement } = await request.json();

// 	if (!progressData) {
// 		progressData[symbolId] = 0;
// 	}

// 	progressData[symbolId] = progressIncrement;

// 	return json({ success: true, newProgress: progressData[symbolId] });
// };
