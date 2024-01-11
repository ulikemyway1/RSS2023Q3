import { bodyParts } from "./bodyParts.js";
import { createElement } from "./createElement.js";

export function addBodyPart(index) {
    const bodyPart = createElement('img', null, `body-part-${index + 1}`, null);
    bodyPart.classList.add('the-man')
    bodyPart.src = `img/${bodyParts[index]}`;
    document.querySelector('#the-man-container').append(bodyPart);
}