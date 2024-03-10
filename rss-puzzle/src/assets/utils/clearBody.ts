export default function clearBody() {
    const { childElementCount } = document.body;
    let currentElement = document.body.firstChild;
    for (let i = 0; i <= childElementCount; i += 1) {
        if (currentElement && currentElement.nodeName !== 'HEADER') {
            currentElement.remove();
        }
        if (currentElement && currentElement.nextSibling)
            currentElement = currentElement.nextSibling;
    }
}
