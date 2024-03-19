import gameBoard from '../game-board/gameBoard';
import gameProgressObserver from '../levels-board/gameProgress';

export default function deleteUser() {
    localStorage.removeItem('user_ULIKE');
    localStorage.removeItem('completedRounds__ULIKE');
    localStorage.removeItem('completedLevels__ULIKE');
    localStorage.removeItem('lastCompleted__ULIKE');
    gameProgressObserver.deleteAllData();
    gameBoard.statisticObserver.reset();
    gameBoard.levelNumber = 1;
    gameBoard.roundNumber = 0;
    gameBoard.wordNumber = 0;
    gameBoard.statisticBtn.classList.add('hidden');
    gameBoard.autoCompleteBtn.disabled = false;
}
