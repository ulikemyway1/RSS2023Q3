import { createElement } from "./createElement";
import { highScoreTableBtn, main, timer } from "./renderMainApp";

export function showScoreTable () {
    highScoreTableBtn.disabled = true;
    const timerStarted = timer.getStatus();
    timer.stop();
    const scoreTable = createElement('div', null, ['score-table']);
    const closeBtn = createElement('button', null, ['score-table__btn', 'button'], 'Close Score Table');
    closeBtn.addEventListener('click', () => closeScoreTable(scoreTable, timerStarted));

    const scoreTableHeader = createElement('h2', null, ['score-table__header'], 'Hight Score Table')

    const scoreTableContent = createElement('p', null, ['score-table__header'], 'Nothing to show yet...')

    scoreTable.append(scoreTableHeader, scoreTableContent, closeBtn);
    main.append(scoreTable);
}

function closeScoreTable(table, timerStatus) {
    highScoreTableBtn.disabled = false;

    if (timerStatus) {
        timer.start();
    }
    table.remove();
}