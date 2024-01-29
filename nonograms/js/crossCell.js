export function crossCell(cell) {
    cell.classList.remove('picked');
    cell.classList.toggle('crossed');
}