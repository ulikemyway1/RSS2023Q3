function createElement(
    tag: string,
    id?: string,
    classNames?: string[],
    textContent?: string
): HTMLElement {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (classNames && classNames.length > 0)
        element.classList.add(...classNames);
    if (textContent) element.textContent = textContent;
    return element;
}

export default createElement;
