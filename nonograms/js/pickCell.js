export function pickCell (cell) {
    cell.classList.remove('crossed')
    cell.classList.toggle('picked');
}