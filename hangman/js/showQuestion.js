import { DB } from "./DB.js";
import { showWordLine } from "./showWordLine.js";
export function showQuestion(parentNode) {
    let index = Math.floor(Math.random() * DB.length);
    if (index > DB.length) {
        index = DB.length - 1;
    }
    parentNode.textContent = DB[index].question;
    showWordLine(parentNode.previousSibling, index)
}