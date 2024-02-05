import { allCells, blackCells, boardIsBlocked, contextMenuIsBlocked, currentIndex, gameLevel, gameName, isSolve, pickedCells } from "./appState";
import { crossCell } from "./crossCell";
import { gameFieldClickHandler } from "./gameFieldClickHandler";
import { DB } from "./levels";
import { prevDef } from "./prevDef";
import { renderCells } from "./renderCells";
import { renderClueCells } from "./renderClueCells";
import { renderClues } from "./renderClues";
import { gameField, horClueCells, infoBox, main, resetGameBtn, saveGameBtn, showSolutionBtn, timer, vertClueCells } from "./renderMainApp";
import { levelsWindow } from "./showGameLevels";
import { modal } from "./showWinModal";

export function playChoosenGame(index) {
    currentIndex[0] = index;
    levelsWindow.classList.add('hidden');
    main.classList.remove('hidden');
    if (modal) {
        modal.remove();
    }
    infoBox.textContent = DB[index].name;
    pickedCells.clear();
    allCells.forEach((cell) => cell.remove());
    while (allCells.length !== 0) {
        allCells.pop();
    }
    renderCells(DB[index].arr);
    gameName[0] = DB[index].name;
    gameLevel[0] = DB[index].level;
    timer.stop();
    timer.setTime(0);
    timer.render();
    isSolve[0] = false;
    showSolutionBtn.disabled = false;
    saveGameBtn.disabled = false;
    resetGameBtn.disabled = false;
    if (boardIsBlocked[0]) {
        gameField.addEventListener('click', gameFieldClickHandler);
        boardIsBlocked[0] = false;
    }
    if (contextMenuIsBlocked[0]) {
        gameField.addEventListener('contextmenu', crossCell);
        gameField.removeEventListener('contextmenu', prevDef);
        contextMenuIsBlocked[0] = false;
    }
    gameField.classList.remove(
        'app__game-field_5x5',
        'app__game-field_10x10',
        'app__game-field_15x15',
    );

    switch (DB[index].level) {
        case 'Easy':
            gameField.classList.add('app__game-field_5x5');
            break;
        case 'Medium':
            gameField.classList.add('app__game-field_10x10');
            break;
        case 'Hard':
            gameField.classList.add('app__game-field_15x15');
            break;
    }

    horClueCells.forEach((clue) => clue.remove());
    vertClueCells.forEach((clue) => clue.remove());
    while (horClueCells.length > 0) {
        horClueCells.pop();
    }
    while (vertClueCells.length > 0) {
        vertClueCells.pop();
    }

    renderClueCells(DB[index].arr);
    renderClues(DB[index].arr);
    console.table(DB[index].arr);

}

