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

const checkEqualReducer = (a, b) => a === b ? a : 0;
const sumReducer = (a, b) => a + b;

const checkRows = (array) => {
    return array.map(subArr => subArr.reduce(checkEqualReducer));
}

const checkColumns = (array) => {
    const transposeBoard = array[0].map((el, i) => array.map(el => el[i]));
    return checkRows(transposeBoard);
}

const checkLeftDiag = (array) => {
    return array.map((el, i) => el[i]).reduce(checkEqualReducer);
}

const checkRightDiag = (array) => {
    const lastElem = array.length - 1;
    return array.map((el, i) => el[lastElem - i]).reduce(checkEqualReducer);
}

const countWins = (array) => {
    let xWins = 0;
    let oWins = 0;
    array.forEach(el => el === 1 ? xWins += 1 : el === 2 ? oWins += 1 : 0);
    return {xWins, oWins}
}

const ticTacToe = (board) => {
    console.table(board)
    const checks = [
        checkRows(board),
        checkColumns(board),
        [checkLeftDiag(board)],
        [checkRightDiag(board)]
    ]
    console.log(checks)

    const isGameFinished = !board.some(el => el.includes(0));
    console.log(isGameFinished)
    const wins = checks.map(el => countWins(el))
    console.table(wins)

    const finalX = wins.map(el => el.xWins).reduce(sumReducer, 0);
    const finalO = wins.map(el => el.oWins).reduce(sumReducer, 0);

    let result = 0;
    if (isGameFinished && (finalX !== 0 || finalO !== 0)) {
        result = finalX > finalO ? 1 : 2;
    } else if (isGameFinished && finalX === 0 && finalO === 0) {
        result = 0
    } else if(!isGameFinished){
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
