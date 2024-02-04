import { createElement } from "./createElement";
import { buttonClickSoundPlay } from "./prepareSounds";
import { highScoreTableBtn, main, timer } from "./renderMainApp";
import { Timer } from "./timer";

export function showScoreTable () {
    highScoreTableBtn.disabled = true;
    const timerStarted = timer.getStatus();
    timer.stop();
    const scoreTable = createElement('div', null, ['score-table']);
    const closeBtn = createElement('button', null, ['score-table__btn', 'button'], 'Close Score Table');
    main.classList.add('hidden');
    closeBtn.addEventListener('click', () => closeScoreTable(scoreTable, timerStarted));

    const scoreTableHeader = createElement('h2', null, ['score-table__header'], 'Hight Score Table')

    let scoreTableContent = createElement('p', null, ['score-table__header'], 'Nothing to show yet...')
    const arr = JSON.parse(localStorage.getItem('savedRecords_ULIKE'));
    if (arr) {
        scoreTableContent = createList(arr.sort((r1, r2) => r1.time - r2.time));
    }
    scoreTable.append(scoreTableHeader, scoreTableContent, closeBtn);
    document.body.append(scoreTable);
}

function closeScoreTable(table, timerStatus) {
    buttonClickSoundPlay();
    highScoreTableBtn.disabled = false;
    main.classList.remove('hidden')
    if (timerStatus) {
        timer.start();
    }
    table.remove();
}

function createList(arr) {
    const list = createElement('ol', null, ['score-table__item-wrapper']);
 
        arr.forEach((record) => {
            const convertingTimer = new Timer(record.time)
            const convertedTime = convertingTimer.convertTime()
            const listItem = createElement('li', null, ['score-table__item'], `The nonogram ${record.level} was completed in ${convertedTime}`);
            list.append(listItem)
        })

    return list;
}