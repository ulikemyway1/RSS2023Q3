import gameProgressObserver from '../levels-board/gameProgress';

export default function deleteUser() {
    localStorage.removeItem('user_ULIKE');
    localStorage.removeItem('completedRounds__ULIKE');
    localStorage.removeItem('completedLevels__ULIKE');
    gameProgressObserver.deleteAllData();
}
