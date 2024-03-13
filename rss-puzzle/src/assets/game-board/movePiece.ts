export default function movePiece(elem: HTMLElement, dist: Element): void {
    if (dist.classList.contains('game-board__source-block')) {
        dist.append(elem);
    } else {
        let fisrtFreeSpace: Element | null = null;
        if (dist.firstElementChild && dist.firstElementChild.firstElementChild) {
            let currentElementChild: ChildNode | Element  = dist.firstElementChild.firstElementChild;
            for (let i = 1; i <= dist.firstElementChild.childElementCount; i += 1) {
                if (!currentElementChild.firstChild && currentElementChild instanceof Element) {
                    fisrtFreeSpace = currentElementChild;
                    break;
                }
                if (currentElementChild.nextSibling)
                currentElementChild = currentElementChild.nextSibling;

            }
        }
        if (fisrtFreeSpace) fisrtFreeSpace.append(elem);
    }

}
