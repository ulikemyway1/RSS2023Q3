import { createElement } from "./createElement.js";
export function createUnderScore(char) {
    const letter = createElement('div', 'letter', null, '__');
    letter.setAttribute('data-letter', char.toUpperCase())
    return letter
}