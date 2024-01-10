import { settings } from "./settings.js";
import { DB } from "./DB.js";
import { createUnderScore } from "./createUnderScore.js";

export function showWordLine(wrapper, index) {
    settings.currentLetters = DB[index].answer.toUpperCase().split('');
    settings.currentLetters.forEach((char) => {
        wrapper.append(createUnderScore(char));
    })

}