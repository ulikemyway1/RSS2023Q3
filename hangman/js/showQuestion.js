import { DB } from "./DB.js";
import { showWordLine } from "./showWordLine.js";
import { settings } from "./settings.js";
export function showQuestion(parentNode) {
    let index = settings.currentWordID;
    while (index === settings.currentWordID) {
        index = Math.floor(Math.random() * DB.length);
    }
    if (index > DB.length) {
        index = DB.length - 1;
    }
    settings.currentWordID = index;
    parentNode.textContent = DB[index].question;
    showWordLine(parentNode.previousSibling, index)
}