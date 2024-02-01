import { gameLevel, gameName } from './appState.js';
import { timer } from './renderMainApp.js';
export function makeRecord() {
    let savedRecods = JSON.parse(localStorage.getItem('savedRecords_ULIKE'));
    if (!savedRecods) {
        savedRecods = [];
    }
    const newRecord = {
        time: timer.getTime(),
        level: `"${gameName[0]}" (${gameLevel[0]})`,
    };
    savedRecods.push(newRecord);
    if (savedRecods.length > 1) {
        savedRecods.sort((r1, r2) => r1.time - r2.time);
    }
    if (savedRecods.length > 5) {
        savedRecods.pop();
    }

    localStorage.setItem('savedRecords_ULIKE', JSON.stringify(savedRecods));
}
