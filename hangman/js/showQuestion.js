import { DB } from "./DB.js";
import { showWordLine } from "./showWordLine.js";
import { settings } from "./settings.js";
export function showQuestion(parentNode) {
    let index = settings.currentWordID;
    let localIndex = localStorage.getItem('localIndex_ulikemyway');
    while (index === settings.currentWordID || index === +localIndex) {
        index = Math.round(Math.random() * DB.length);
    }
    if (index >= DB.length) {
        index = DB.length - 1;
    }
    settings.currentWordID = index;
    localStorage.setItem('localIndex_ulikemyway', index);
    parentNode.textContent = DB[index].question;
    showWordLine(parentNode.previousSibling, index)
}