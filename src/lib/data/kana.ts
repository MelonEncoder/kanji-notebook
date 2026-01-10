export type KanaKind = "base" | "dakuten" | "handakuten" | "yoon" | "small" | "marks";

export type KanaScript = "hiragana" | "katakana";

export type KanaRow =
	| "v"
	| "k"
	| "s"
	| "t"
	| "n"
	| "h"
	| "m"
	| "y"
	| "r"
	| "w"
	| "g"
	| "z"
	| "d"
	| "b"
	| "p"
	| "yoon"
	| "small"
	| "marks"
	| "other";

export type KanaCol = "a" | "i" | "u" | "e" | "o" | "none";

export interface KanaCell {
	id: string; // e.g. "base:ka" or "dakudan:ka" or "yoon:ki+ya"
	kind: KanaKind;

	row: KanaRow;
	col: KanaCol;

	/** reading you want to display/test against */
	romaji: string;

	/** underlying base kana key (helps grouping & derivations) */
	baseKey?: string; // e.g. "ka" for ga, "shi" for ji(じ), "ki" for kya

	hira: string;
	kata: string;

	notes?: string;
}

export const KANA: KanaCell[] = [
	// =========================
	// BASE (GOJŪON)
	// =========================
	{ id: "base:a", kind: "base", row: "v", col: "a", romaji: "a", hira: "あ", kata: "ア" },
	{ id: "base:i", kind: "base", row: "v", col: "i", romaji: "i", hira: "い", kata: "イ" },
	{ id: "base:u", kind: "base", row: "v", col: "u", romaji: "u", hira: "う", kata: "ウ" },
	{ id: "base:e", kind: "base", row: "v", col: "e", romaji: "e", hira: "え", kata: "エ" },
	{ id: "base:o", kind: "base", row: "v", col: "o", romaji: "o", hira: "お", kata: "オ" },

	{ id: "base:ka", kind: "base", row: "k", col: "a", romaji: "ka", hira: "か", kata: "カ" },
	{ id: "base:ki", kind: "base", row: "k", col: "i", romaji: "ki", hira: "き", kata: "キ" },
	{ id: "base:ku", kind: "base", row: "k", col: "u", romaji: "ku", hira: "く", kata: "ク" },
	{ id: "base:ke", kind: "base", row: "k", col: "e", romaji: "ke", hira: "け", kata: "ケ" },
	{ id: "base:ko", kind: "base", row: "k", col: "o", romaji: "ko", hira: "こ", kata: "コ" },

	{ id: "base:sa", kind: "base", row: "s", col: "a", romaji: "sa", hira: "さ", kata: "サ" },
	{
		id: "base:shi",
		kind: "base",
		row: "s",
		col: "i",
		romaji: "shi",
		hira: "し",
		kata: "シ",
		notes: "spelling: si → shi"
	},
	{ id: "base:su", kind: "base", row: "s", col: "u", romaji: "su", hira: "す", kata: "ス" },
	{ id: "base:se", kind: "base", row: "s", col: "e", romaji: "se", hira: "せ", kata: "セ" },
	{ id: "base:so", kind: "base", row: "s", col: "o", romaji: "so", hira: "そ", kata: "ソ" },

	{ id: "base:ta", kind: "base", row: "t", col: "a", romaji: "ta", hira: "た", kata: "タ" },
	{
		id: "base:chi",
		kind: "base",
		row: "t",
		col: "i",
		romaji: "chi",
		hira: "ち",
		kata: "チ",
		notes: "spelling: ti → chi"
	},
	{
		id: "base:tsu",
		kind: "base",
		row: "t",
		col: "u",
		romaji: "tsu",
		hira: "つ",
		kata: "ツ",
		notes: "spelling: tu → tsu"
	},
	{ id: "base:te", kind: "base", row: "t", col: "e", romaji: "te", hira: "て", kata: "テ" },
	{ id: "base:to", kind: "base", row: "t", col: "o", romaji: "to", hira: "と", kata: "ト" },

	{ id: "base:na", kind: "base", row: "n", col: "a", romaji: "na", hira: "な", kata: "ナ" },
	{ id: "base:ni", kind: "base", row: "n", col: "i", romaji: "ni", hira: "に", kata: "ニ" },
	{ id: "base:nu", kind: "base", row: "n", col: "u", romaji: "nu", hira: "ぬ", kata: "ヌ" },
	{ id: "base:ne", kind: "base", row: "n", col: "e", romaji: "ne", hira: "ね", kata: "ネ" },
	{ id: "base:no", kind: "base", row: "n", col: "o", romaji: "no", hira: "の", kata: "ノ" },

	{ id: "base:ha", kind: "base", row: "h", col: "a", romaji: "ha", hira: "は", kata: "ハ" },
	{ id: "base:hi", kind: "base", row: "h", col: "i", romaji: "hi", hira: "ひ", kata: "ヒ" },
	{
		id: "base:fu",
		kind: "base",
		row: "h",
		col: "u",
		romaji: "fu",
		hira: "ふ",
		kata: "フ",
		notes: "spelling: hu → fu"
	},
	{ id: "base:he", kind: "base", row: "h", col: "e", romaji: "he", hira: "へ", kata: "ヘ" },
	{ id: "base:ho", kind: "base", row: "h", col: "o", romaji: "ho", hira: "ほ", kata: "ホ" },

	{ id: "base:ma", kind: "base", row: "m", col: "a", romaji: "ma", hira: "ま", kata: "マ" },
	{ id: "base:mi", kind: "base", row: "m", col: "i", romaji: "mi", hira: "み", kata: "ミ" },
	{ id: "base:mu", kind: "base", row: "m", col: "u", romaji: "mu", hira: "む", kata: "ム" },
	{ id: "base:me", kind: "base", row: "m", col: "e", romaji: "me", hira: "め", kata: "メ" },
	{ id: "base:mo", kind: "base", row: "m", col: "o", romaji: "mo", hira: "も", kata: "モ" },

	{ id: "base:ya", kind: "base", row: "y", col: "a", romaji: "ya", hira: "や", kata: "ヤ" },
	{ id: "base:yu", kind: "base", row: "y", col: "u", romaji: "yu", hira: "ゆ", kata: "ユ" },
	{ id: "base:yo", kind: "base", row: "y", col: "o", romaji: "yo", hira: "よ", kata: "ヨ" },

	{ id: "base:ra", kind: "base", row: "r", col: "a", romaji: "ra", hira: "ら", kata: "ラ" },
	{ id: "base:ri", kind: "base", row: "r", col: "i", romaji: "ri", hira: "り", kata: "リ" },
	{ id: "base:ru", kind: "base", row: "r", col: "u", romaji: "ru", hira: "る", kata: "ル" },
	{ id: "base:re", kind: "base", row: "r", col: "e", romaji: "re", hira: "れ", kata: "レ" },
	{ id: "base:ro", kind: "base", row: "r", col: "o", romaji: "ro", hira: "ろ", kata: "ロ" },

	{ id: "base:wa", kind: "base", row: "w", col: "a", romaji: "wa", hira: "わ", kata: "ワ" },
	{
		id: "base:wo",
		kind: "base",
		row: "w",
		col: "o",
		romaji: "wo",
		hira: "を",
		kata: "ヲ",
		notes: 'often pronounced "o"'
	},

	{ id: "base:n", kind: "base", row: "other", col: "a", romaji: "n", hira: "ん", kata: "ン" },

	// =========================
	// DAKUTEN
	// id matches your example: dakuten:ka, dakuten:ki ...
	// baseKey points to underlying unvoiced kana
	// =========================
	{
		id: "dakuten:ka",
		kind: "dakuten",
		row: "k",
		col: "a",
		romaji: "ga",
		baseKey: "ka",
		hira: "が",
		kata: "ガ"
	},
	{
		id: "dakuten:ki",
		kind: "dakuten",
		row: "k",
		col: "i",
		romaji: "gi",
		baseKey: "ki",
		hira: "ぎ",
		kata: "ギ"
	},
	{
		id: "dakuten:ku",
		kind: "dakuten",
		row: "k",
		col: "u",
		romaji: "gu",
		baseKey: "ku",
		hira: "ぐ",
		kata: "グ"
	},
	{
		id: "dakuten:ke",
		kind: "dakuten",
		row: "k",
		col: "e",
		romaji: "ge",
		baseKey: "ke",
		hira: "げ",
		kata: "ゲ"
	},
	{
		id: "dakuten:ko",
		kind: "dakuten",
		row: "k",
		col: "o",
		romaji: "go",
		baseKey: "ko",
		hira: "ご",
		kata: "ゴ"
	},

	{
		id: "dakuten:sa",
		kind: "dakuten",
		row: "s",
		col: "a",
		romaji: "za",
		baseKey: "sa",
		hira: "ざ",
		kata: "ザ"
	},
	{
		id: "dakuten:shi",
		kind: "dakuten",
		row: "s",
		col: "i",
		romaji: "ji",
		baseKey: "shi",
		hira: "じ",
		kata: "ジ",
		notes: 'also "zi" in some systems'
	},
	{
		id: "dakuten:su",
		kind: "dakuten",
		row: "s",
		col: "u",
		romaji: "zu",
		baseKey: "su",
		hira: "ず",
		kata: "ズ"
	},
	{
		id: "dakuten:se",
		kind: "dakuten",
		row: "s",
		col: "e",
		romaji: "ze",
		baseKey: "se",
		hira: "ぜ",
		kata: "ゼ"
	},
	{
		id: "dakuten:so",
		kind: "dakuten",
		row: "s",
		col: "o",
		romaji: "zo",
		baseKey: "so",
		hira: "ぞ",
		kata: "ゾ"
	},

	{
		id: "dakuten:ta",
		kind: "dakuten",
		row: "t",
		col: "a",
		romaji: "da",
		baseKey: "ta",
		hira: "だ",
		kata: "ダ"
	},
	{
		id: "dakuten:chi",
		kind: "dakuten",
		row: "t",
		col: "i",
		romaji: "ji",
		baseKey: "chi",
		hira: "ぢ",
		kata: "ヂ",
		notes: "rare; often same sound as じ"
	},
	{
		id: "dakuten:tsu",
		kind: "dakuten",
		row: "t",
		col: "u",
		romaji: "zu",
		baseKey: "tsu",
		hira: "づ",
		kata: "ヅ",
		notes: "rare; often same sound as ず"
	},
	{
		id: "dakuten:te",
		kind: "dakuten",
		row: "t",
		col: "e",
		romaji: "de",
		baseKey: "te",
		hira: "で",
		kata: "デ"
	},
	{
		id: "dakuten:to",
		kind: "dakuten",
		row: "t",
		col: "o",
		romaji: "do",
		baseKey: "to",
		hira: "ど",
		kata: "ド"
	},

	{
		id: "dakuten:ha",
		kind: "dakuten",
		row: "h",
		col: "a",
		romaji: "ba",
		baseKey: "ha",
		hira: "ば",
		kata: "バ"
	},
	{
		id: "dakuten:hi",
		kind: "dakuten",
		row: "h",
		col: "i",
		romaji: "bi",
		baseKey: "hi",
		hira: "び",
		kata: "ビ"
	},
	{
		id: "dakuten:fu",
		kind: "dakuten",
		row: "h",
		col: "u",
		romaji: "bu",
		baseKey: "fu",
		hira: "ぶ",
		kata: "ブ"
	},
	{
		id: "dakuten:he",
		kind: "dakuten",
		row: "h",
		col: "e",
		romaji: "be",
		baseKey: "he",
		hira: "べ",
		kata: "ベ"
	},
	{
		id: "dakuten:ho",
		kind: "dakuten",
		row: "h",
		col: "o",
		romaji: "bo",
		baseKey: "ho",
		hira: "ぼ",
		kata: "ボ"
	},

	// =========================
	// HANDAKUTEN
	// =========================
	{
		id: "handakuten:ha",
		kind: "handakuten",
		row: "h",
		col: "a",
		romaji: "pa",
		baseKey: "ha",
		hira: "ぱ",
		kata: "パ"
	},
	{
		id: "handakuten:hi",
		kind: "handakuten",
		row: "h",
		col: "i",
		romaji: "pi",
		baseKey: "hi",
		hira: "ぴ",
		kata: "ピ"
	},
	{
		id: "handakuten:fu",
		kind: "handakuten",
		row: "h",
		col: "u",
		romaji: "pu",
		baseKey: "fu",
		hira: "ぷ",
		kata: "プ"
	},
	{
		id: "handakuten:he",
		kind: "handakuten",
		row: "h",
		col: "e",
		romaji: "pe",
		baseKey: "he",
		hira: "ぺ",
		kata: "ペ"
	},
	{
		id: "handakuten:ho",
		kind: "handakuten",
		row: "h",
		col: "o",
		romaji: "po",
		baseKey: "ho",
		hira: "ぽ",
		kata: "ポ"
	},

	// =========================
	// YŌON (common)
	// ids use baseKey + +ya/yu/yo so it stays deterministic
	// =========================
	{
		id: "yoon:ki+ya",
		kind: "yoon",
		row: "k",
		col: "a",
		romaji: "kya",
		baseKey: "ki",
		hira: "きゃ",
		kata: "キャ"
	},
	{
		id: "yoon:ki+yu",
		kind: "yoon",
		row: "k",
		col: "u",
		romaji: "kyu",
		baseKey: "ki",
		hira: "きゅ",
		kata: "キュ"
	},
	{
		id: "yoon:ki+yo",
		kind: "yoon",
		row: "k",
		col: "o",
		romaji: "kyo",
		baseKey: "ki",
		hira: "きょ",
		kata: "キョ"
	},

	{
		id: "yoon:shi+ya",
		kind: "yoon",
		row: "s",
		col: "a",
		romaji: "sha",
		baseKey: "shi",
		hira: "しゃ",
		kata: "シャ"
	},
	{
		id: "yoon:shi+yu",
		kind: "yoon",
		row: "s",
		col: "u",
		romaji: "shu",
		baseKey: "shi",
		hira: "しゅ",
		kata: "シュ"
	},
	{
		id: "yoon:shi+yo",
		kind: "yoon",
		row: "s",
		col: "o",
		romaji: "sho",
		baseKey: "shi",
		hira: "しょ",
		kata: "ショ"
	},

	{
		id: "yoon:chi+ya",
		kind: "yoon",
		row: "t",
		col: "a",
		romaji: "cha",
		baseKey: "chi",
		hira: "ちゃ",
		kata: "チャ"
	},
	{
		id: "yoon:chi+yu",
		kind: "yoon",
		row: "t",
		col: "u",
		romaji: "chu",
		baseKey: "chi",
		hira: "ちゅ",
		kata: "チュ"
	},
	{
		id: "yoon:chi+yo",
		kind: "yoon",
		row: "t",
		col: "o",
		romaji: "cho",
		baseKey: "chi",
		hira: "ちょ",
		kata: "チョ"
	},

	{
		id: "yoon:ni+ya",
		kind: "yoon",
		row: "n",
		col: "a",
		romaji: "nya",
		baseKey: "ni",
		hira: "にゃ",
		kata: "ニャ"
	},
	{
		id: "yoon:ni+yu",
		kind: "yoon",
		row: "n",
		col: "u",
		romaji: "nyu",
		baseKey: "ni",
		hira: "にゅ",
		kata: "ニュ"
	},
	{
		id: "yoon:ni+yo",
		kind: "yoon",
		row: "n",
		col: "o",
		romaji: "nyo",
		baseKey: "ni",
		hira: "にょ",
		kata: "ニョ"
	},

	{
		id: "yoon:hi+ya",
		kind: "yoon",
		row: "h",
		col: "a",
		romaji: "hya",
		baseKey: "hi",
		hira: "ひゃ",
		kata: "ヒャ"
	},
	{
		id: "yoon:hi+yu",
		kind: "yoon",
		row: "h",
		col: "u",
		romaji: "hyu",
		baseKey: "hi",
		hira: "ひゅ",
		kata: "ヒュ"
	},
	{
		id: "yoon:hi+yo",
		kind: "yoon",
		row: "h",
		col: "o",
		romaji: "hyo",
		baseKey: "hi",
		hira: "ひょ",
		kata: "ヒョ"
	},

	{
		id: "yoon:mi+ya",
		kind: "yoon",
		row: "m",
		col: "a",
		romaji: "mya",
		baseKey: "mi",
		hira: "みゃ",
		kata: "ミャ"
	},
	{
		id: "yoon:mi+yu",
		kind: "yoon",
		row: "m",
		col: "u",
		romaji: "myu",
		baseKey: "mi",
		hira: "みゅ",
		kata: "ミュ"
	},
	{
		id: "yoon:mi+yo",
		kind: "yoon",
		row: "m",
		col: "o",
		romaji: "myo",
		baseKey: "mi",
		hira: "みょ",
		kata: "ミョ"
	},

	{
		id: "yoon:ri+ya",
		kind: "yoon",
		row: "r",
		col: "a",
		romaji: "rya",
		baseKey: "ri",
		hira: "りゃ",
		kata: "リャ"
	},
	{
		id: "yoon:ri+yu",
		kind: "yoon",
		row: "r",
		col: "u",
		romaji: "ryu",
		baseKey: "ri",
		hira: "りゅ",
		kata: "リュ"
	},
	{
		id: "yoon:ri+yo",
		kind: "yoon",
		row: "r",
		col: "o",
		romaji: "ryo",
		baseKey: "ri",
		hira: "りょ",
		kata: "リョ"
	},

	{
		id: "yoon:gi+ya",
		kind: "yoon",
		row: "g",
		col: "a",
		romaji: "gya",
		baseKey: "gi",
		hira: "ぎゃ",
		kata: "ギャ"
	},
	{
		id: "yoon:gi+yu",
		kind: "yoon",
		row: "g",
		col: "u",
		romaji: "gyu",
		baseKey: "gi",
		hira: "ぎゅ",
		kata: "ギュ"
	},
	{
		id: "yoon:gi+yo",
		kind: "yoon",
		row: "g",
		col: "o",
		romaji: "gyo",
		baseKey: "gi",
		hira: "ぎょ",
		kata: "ギョ"
	},

	{
		id: "yoon:ji+ya",
		kind: "yoon",
		row: "z",
		col: "a",
		romaji: "ja",
		baseKey: "ji",
		hira: "じゃ",
		kata: "ジャ"
	},
	{
		id: "yoon:ji+yu",
		kind: "yoon",
		row: "z",
		col: "u",
		romaji: "ju",
		baseKey: "ji",
		hira: "じゅ",
		kata: "ジュ"
	},
	{
		id: "yoon:ji+yo",
		kind: "yoon",
		row: "z",
		col: "o",
		romaji: "jo",
		baseKey: "ji",
		hira: "じょ",
		kata: "ジョ"
	},

	{
		id: "yoon:bi+ya",
		kind: "yoon",
		row: "b",
		col: "a",
		romaji: "bya",
		baseKey: "bi",
		hira: "びゃ",
		kata: "ビャ"
	},
	{
		id: "yoon:bi+yu",
		kind: "yoon",
		row: "b",
		col: "u",
		romaji: "byu",
		baseKey: "bi",
		hira: "びゅ",
		kata: "ビュ"
	},
	{
		id: "yoon:bi+yo",
		kind: "yoon",
		row: "b",
		col: "o",
		romaji: "byo",
		baseKey: "bi",
		hira: "びょ",
		kata: "ビョ"
	},

	{
		id: "yoon:pi+ya",
		kind: "yoon",
		row: "p",
		col: "a",
		romaji: "pya",
		baseKey: "pi",
		hira: "ぴゃ",
		kata: "ピャ"
	},
	{
		id: "yoon:pi+yu",
		kind: "yoon",
		row: "p",
		col: "u",
		romaji: "pyu",
		baseKey: "pi",
		hira: "ぴゅ",
		kata: "ピュ"
	},
	{
		id: "yoon:pi+yo",
		kind: "yoon",
		row: "p",
		col: "o",
		romaji: "pyo",
		baseKey: "pi",
		hira: "ぴょ",
		kata: "ピョ"
	},

	// =========================
	// SMALL
	// =========================
	{
		id: "small:a",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "a",
		hira: "ぁ",
		kata: "ァ"
	},
	{
		id: "small:i",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "i",
		hira: "ぃ",
		kata: "ィ"
	},
	{
		id: "small:u",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "u",
		hira: "ぅ",
		kata: "ゥ"
	},
	{
		id: "small:e",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "e",
		hira: "ぇ",
		kata: "ェ"
	},
	{
		id: "small:o",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "o",
		hira: "ぉ",
		kata: "ォ"
	},
	{
		id: "small:ya",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "ya",
		hira: "ゃ",
		kata: "ャ"
	},
	{
		id: "small:yu",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "yu",
		hira: "ゅ",
		kata: "ュ"
	},
	{
		id: "small:yo",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "yo",
		hira: "ょ",
		kata: "ョ"
	},
	{
		id: "small:tsu",
		kind: "small",
		row: "small",
		col: "none",
		romaji: "tsu",
		hira: "っ",
		kata: "ッ",
		notes: "sokuon (gemination)"
	}
];
