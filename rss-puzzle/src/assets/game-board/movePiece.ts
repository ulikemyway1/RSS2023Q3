import gameBoard from "./gameBoard";

export default function movePiece(elem: HTMLElement, dist: Element): void {
    if (dist.classList.contains('game-board__source-block')) {
        dist.append(elem);
    } else {
        let firstFreeSpace: Element | null = null;
        if (
            dist.lastElementChild &&
            dist.lastElementChild.firstElementChild
        ) {
            let currentElementChild: ChildNode | Element =
                dist.lastElementChild.firstElementChild;
            for (
                let i = 1;
                i <= dist.lastElementChild.childElementCount;
                i += 1
            ) {
                if (
                    !currentElementChild.firstChild &&
                    currentElementChild instanceof Element
                ) {
                    firstFreeSpace = currentElementChild;
                    break;
                }
                if (currentElementChild.nextSibling)
                    currentElementChild = currentElementChild.nextSibling;
            }
        }
        if (firstFreeSpace) firstFreeSpace.append(elem);
        gameBoard.checkSentence.bind(gameBoard)();
    }
}
