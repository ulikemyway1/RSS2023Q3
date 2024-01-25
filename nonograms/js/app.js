import { countClues } from "./countClues.js";
import { arr } from "./countClues.js";

const clues = countClues(arr);
console.table(arr);
console.table(clues.col);
console.table(clues.row)