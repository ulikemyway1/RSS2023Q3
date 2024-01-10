export function createElement(tag, className, id, textContent) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (textContent) {
        element.textContent = textContent;
    }
    if (id) {
        element.id = id;
    }
    return element;
}