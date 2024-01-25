export const arr = [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1]
]
export function countClues (arr) {
    const clues = {
        row: countRowClues(arr),
        col: countColClues(arr)
    }
    return clues;
}

function countRowClues (arr) {
    let rowClues = [];
    for (let i = 0; i < arr.length; i += 1) {
        const rowClue = [];
        let groupLength = 0;
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[i][j]) {
                groupLength += 1;
            }
            if (groupLength !== 0 && arr[i][j] === 0 || (groupLength !== 0 && j === arr.length - 1)) {
                rowClue.push(groupLength);
                groupLength = 0;
            }
        }
        rowClues.push(rowClue);
    }
    return rowClues;
}

function countColClues (arr) {
    let colClues = [];
    for (let i = 0; i < arr.length; i += 1) {
        const colClue = [];
        let groupLength = 0;
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[j][i]) {
                groupLength += 1;
            }
            if (groupLength !== 0 && arr[j][i] === 0 || (groupLength !== 0 && j === arr.length - 1)) {
                colClue.push(groupLength);
                groupLength = 0;
            }
        }
        colClues.push(colClue);
    }

    return colClues;
}
