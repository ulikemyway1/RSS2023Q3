import { createLetterButtons } from "./createLetterButtons.js";
export function showLetterButtons(arr, parentNode) {
    arr.forEach((letter) => {
        parentNode.append(createLetterButtons(letter, parentNode));
    });
}
