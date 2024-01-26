export function createElement(tag = 'div', id, className = [], textContent) {
    const element = document.createElement(tag);
    if (id) {
        element.id = id;
    }
    if (Array.isArray(className) && className.length > 0) {
        className.forEach((item) => element.classList.add(item));
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}
