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

    let scoreTableContent = createElement('p', null, ['score-table__header'], 'Nothing to show yet...')
    const arr = JSON.parse(localStorage.getItem('savedRecords_ULIKE'));
    if (arr) {
        scoreTableContent = createList(arr);
    }
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

function createList(arr) {
    const list = createElement('ol', null, ['score-table__item-wrapper']);
 
        arr.forEach((record) => {
            const listItem = createElement('li', null, ['score-table__item'], `The nonogram ${record.level} was completed in ${record.time} s`);
            list.append(listItem)
        })

    return list;
}