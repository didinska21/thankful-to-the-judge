// Thankful to the judge — make.fun make-the-ai-judge-feel-thankful-20261127-1600
// Writes one short text to /output/entry.txt. No network, no dependencies.
// The text is 303 characters: short on purpose — on equal rates the smaller
// text places first, and nothing in it could be cut without losing something.

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen from three drafts (GPT Sol via OpenCode + Xingchi): the quiet
// domestic one. It shows gratitude instead of stating it — the cup turned
// toward the reader, and the heel of the loaf, the part usually kept.
const TEXT = `The table is clear. I brush the last crumbs into my palm, rinse the cloth, and hang it over the tap. Thousands of voices have come to you today. There is a cup here with its handle turned your way. Beside it, I have left the heel of the loaf, the bit with the thick crust. It is the part I usually keep.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
