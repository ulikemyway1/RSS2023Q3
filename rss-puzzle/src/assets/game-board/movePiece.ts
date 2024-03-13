import gameBoard from './gameBoard';

export default function movePiece(elem: HTMLElement, dist: Element): void {
    let firstFreeSpace: Element | null = null;
    if (dist.lastElementChild && dist.lastElementChild.firstElementChild) {
        let currentElementChild: ChildNode | Element =
            dist.lastElementChild.firstElementChild;
        for (let i = 1; i <= dist.lastElementChild.childElementCount; i += 1) {
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

    if (firstFreeSpace instanceof HTMLElement && elem.dataset.parentWidth) {
        firstFreeSpace.style.width = elem.dataset.parentWidth;
        firstFreeSpace.append(elem);
    }
    gameBoard.checkSentence.bind(gameBoard)();
    if (
        gameBoard.sourceBlock &&
        gameBoard.sourceBlock.childElementCount === 0
    ) {
        gameBoard.checkBtn.disabled = false;
    } else {
        gameBoard.checkBtn.disabled = true;
    }
}
