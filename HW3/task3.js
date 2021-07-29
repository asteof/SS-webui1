const findChair = (rooms, chair) => {
    if (chair === 0) return 'Game On';
    const availableChairs = rooms.map(([occupied, chairs]) => Math.max(chairs - occupied.length, 0));
    const allChairs = availableChairs.reduce((a, b) => a + b);

    if (allChairs < chair) {
        return 'Not enough!';
    } else {
        console.log(availableChairs);
        console.log(allChairs);
        let sum = 0;
        let result = [];
        while (sum < chair) {
            let ch = availableChairs.shift();
            // if (ch !== 0) {
                result.push(ch)
                sum += ch;
            // }
        }
        console.log(result)
    }
}


console.log('\n\n\t\tTASK 3\n\n\n');

const example1 = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const example2 = [['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]];
const example3 = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]];
const example4 = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]];

findChair(example1, 4)
/*
meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4) ---> [0, 1, 3]

meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5) ---> [0, 0, 1, 2, 2]

meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0) ---> 'Game On'

meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4) ---> 'Not enough!'


*/