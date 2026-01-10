// src/lib/data/marks.ts
export type MarkRow = "marks";
export type MarkCol = "none";

export interface KanaMark {
	id: string;
	kind: "marks";
	row: MarkRow;
	col: MarkCol;
	romaji: string;
	/** Some marks have distinct hiragana/katakana forms (iteration marks). */
	hira: string;
	kata: string;
	notes?: string;
}

/**
 * Kana-adjacent marks (phonetic helpers / kana-specific symbols).
 * This is intentionally NOT general Japanese punctuation (see punctuation.ts).
 */
export const MARKS: KanaMark[] = [
	{
		id: "marks:dash",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "-",
		hira: "ー",
		kata: "ー",
		notes: "chōonpu (long vowel mark; mainly katakana, sometimes hiragana)"
	},
	{
		id: "marks:dot",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "·",
		hira: "・",
		kata: "・",
		notes: "nakaguro (middle dot; separator in foreign names/loanwords)"
	},
	{
		id: "marks:iteration",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "repeat",
		hira: "ゝ",
		kata: "ヽ",
		notes: "kana iteration mark (repeats previous kana)"
	},
	{
		id: "marks:iteration-dakuten",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "repeat-voiced",
		hira: "ゞ",
		kata: "ヾ",
		notes: "voiced kana iteration mark"
	},
	{
		id: "marks:small-ka",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "ka",
		hira: "ゕ",
		kata: "",
		notes: "small ka (historical/rare hiragana; appears in some fixed spellings)"
	},
	{
		id: "marks:small-ke",
		kind: "marks",
		row: "marks",
		col: "none",
		romaji: "ke",
		hira: "ゖ",
		kata: "",
		notes: "small ke (historical/rare hiragana; appears in some fixed spellings)"
	}
];
