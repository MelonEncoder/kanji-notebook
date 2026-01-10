// src/lib/data/punctuation.ts
export type PunctRow = "punctuation";
export type PunctCol = "none";

export interface JapanesePunctuation {
	id: string;
	kind: "punctuation";
	row: PunctRow;
	col: PunctCol;
	romaji: string;
	char: string;
	notes?: string;
}

/**
 * General Japanese punctuation / brackets / repetition symbols used in Japanese text.
 * Brackets/quotes are split into individual open/close entries (as requested).
 */
export const PUNCTUATION: JapanesePunctuation[] = [
	// sentence punctuation
	{
		id: "punctuation:maru",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: ".",
		char: "。",
		notes: "kuten (Japanese full stop)"
	},
	{
		id: "punctuation:ten",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: ",",
		char: "、",
		notes: "tōten (Japanese comma)"
	},

	// quotes (corner brackets)
	{
		id: "punctuation:quote-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "quote-open",
		char: "「",
		notes: "corner bracket quote (open)"
	},
	{
		id: "punctuation:quote-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "quote-close",
		char: "」",
		notes: "corner bracket quote (close)"
	},

	// double quotes
	{
		id: "punctuation:double-quote-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "double-quote-open",
		char: "『",
		notes: "double corner bracket quote (open; quotes within quotes, titles)"
	},
	{
		id: "punctuation:double-quote-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "double-quote-close",
		char: "』",
		notes: "double corner bracket quote (close)"
	},

	// full-width parentheses
	{
		id: "punctuation:paren-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "paren-open",
		char: "（",
		notes: "full-width parenthesis (open)"
	},
	{
		id: "punctuation:paren-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "paren-close",
		char: "）",
		notes: "full-width parenthesis (close)"
	},

	// full-width square brackets
	{
		id: "punctuation:square-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "square-open",
		char: "［",
		notes: "full-width square bracket (open)"
	},
	{
		id: "punctuation:square-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "square-close",
		char: "］",
		notes: "full-width square bracket (close)"
	},

	// full-width curly brackets
	{
		id: "punctuation:curly-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "curly-open",
		char: "｛",
		notes: "full-width curly bracket (open)"
	},
	{
		id: "punctuation:curly-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "curly-close",
		char: "｝",
		notes: "full-width curly bracket (close)"
	},

	// Japanese publishing brackets: 〈〉 《》 【】 〔〕
	{
		id: "punctuation:angle-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "angle-open",
		char: "〈",
		notes: "angle bracket (open)"
	},
	{
		id: "punctuation:angle-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "angle-close",
		char: "〉",
		notes: "angle bracket (close)"
	},
	{
		id: "punctuation:double-angle-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "double-angle-open",
		char: "《",
		notes: "double angle bracket (open)"
	},
	{
		id: "punctuation:double-angle-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "double-angle-close",
		char: "》",
		notes: "double angle bracket (close)"
	},
	{
		id: "punctuation:lenticular-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "lenticular-open",
		char: "【",
		notes: "lenticular bracket (open)"
	},
	{
		id: "punctuation:lenticular-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "lenticular-close",
		char: "】",
		notes: "lenticular bracket (close)"
	},
	{
		id: "punctuation:tortoise-open",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "tortoise-open",
		char: "〔",
		notes: "tortoise shell bracket (open)"
	},
	{
		id: "punctuation:tortoise-close",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "tortoise-close",
		char: "〕",
		notes: "tortoise shell bracket (close)"
	},

	// ellipsis
	{
		id: "punctuation:ellipsis",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "...",
		char: "…",
		notes: "ellipsis"
	},
	{
		id: "punctuation:two-dot-leader",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "..",
		char: "‥",
		notes: "two-dot leader (less common than …)"
	},

	// emphasis / modern full-width
	{
		id: "punctuation:question",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "?",
		char: "？",
		notes: "full-width question mark (modern usage)"
	},
	{
		id: "punctuation:exclamation",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "!",
		char: "！",
		notes: "full-width exclamation mark (modern usage)"
	},

	// separators
	{
		id: "punctuation:colon",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: ":",
		char: "：",
		notes: "full-width colon"
	},
	{
		id: "punctuation:semicolon",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: ";",
		char: "；",
		notes: "full-width semicolon"
	},

	// wave dash (distinct from ー)
	{
		id: "punctuation:wave-dash",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "~",
		char: "〜",
		notes: "wave dash (ranges, casual elongation; distinct from chōonpu ー)"
	},

	// repetition/ditto-like symbols often seen with kanji
	{
		id: "punctuation:odoriji-kanji",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "repeat-kanji",
		char: "々",
		notes: "kanji iteration mark (repeats previous kanji)"
	},
	{
		id: "punctuation:ditto",
		kind: "punctuation",
		row: "punctuation",
		col: "none",
		romaji: "ditto",
		char: "〃",
		notes: "ditto mark (repeats previous entry; less common)"
	}
];
