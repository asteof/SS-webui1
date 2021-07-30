/*
const createBoard = () => {
    const board = [];
    const len = 3;
    for (let i = 0; i < len; i++) {
        const boardRow = [];
        for (let j = 0; j < len; j++) {
            boardRow[j] = Math.trunc((Math.random() * 3));
        }
        board.push(boardRow);
    }
    console.table(board)
    return board;
}
*/

// const checkEqualReducer = (a, b) => a === b ? a : 0;
const multiplyReducer = (a, b) => a * b;

const checkRows = (array) => {
    const result = array.map(subArr => subArr.reduce(multiplyReducer));
    console.log(result)
    if (result.includes(1)) return 1;
    else if (result.includes(8)) return 8;
    else return 0;
}

const checkColumns = (array) => {
    const transposeBoard = array[0].map((el, i) => array.map(el => el[i]));
    return checkRows(transposeBoard);
}

const checkDiagonals = (array) => {
    const main = array.map((el, i) => el[i]).reduce(multiplyReducer);
    const lastElem = array.length - 1;
    const sub = array.map((el, i) => el[lastElem - i]).reduce(multiplyReducer);
    return [testResult(main), testResult(sub)];
}

const testResult = (result) => {
    if (result === 1) return result;
    else if (result === 8) return result;
    else return 0;
}

const ticTacToe = (board) => {
    console.table(board)
    const checks = [
        checkRows(board),
        checkColumns(board),
        ...checkDiagonals(board),
    ]
    console.log(checks)

    const isGameFinished = (checks.includes(1) || checks.includes(8))
    console.log(isGameFinished)

    let result = 0;
    if (isGameFinished && checks.includes(1)) {
        result = 1;
    } else if (isGameFinished && checks.includes(8)) {
        result = 2
    } else if (!isGameFinished) {
        result = -1
    }
    console.log(result)
}

console.log('\n\n\t\tTASK 2\n\n\n');

// first row equal, [0].xWins = 1, result = -1
const sample1 = [
    [1, 1, 1],
    [1, 2, 0],
    [2, 0, 2]];
// first column equal, [1].xWins = 1, result = -1
const sample2 = [
    [1, 2, 2],
    [1, 0, 2],
    [1, 0, 0]];
// right diag equal, [3].oWins = 1, result = -1
const sample3 = [
    [1, 0, 2],
    [0, 2, 2],
    [2, 2, 1]];
// first column equal, [1].xWins = 1, result = 2
const sample4 = [
    [1, 1, 2],
    [1, 2, 2],
    [2, 2, 1]];
// first column equal, [1].xWins = 1, result = 1
const sample5 = [
    [1, 1, 1],
    [1, 2, 2],
    [2, 2, 1]];

ticTacToe(sample5)
