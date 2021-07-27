const create2DArray = (n, m) => {
    const array = [];
    for (let i = 0; i < n; i++) {
        const subArray = [];
        for (let j = 0; j < m; j++) {
            subArray[j] = Math.trunc((Math.random() * 18 + 1) * Math.random() * 16 + 1)
        }
        array.push(subArray);
    }
    console.table(array)
    return array;
}

// или return Math.min(...array);
const getArrayMin = (array) => {
    const min = array.reduce((acc, el) => {
        return acc = Math.min(el, acc);
    })
    console.log(min);
    return min;
}
// console.log(`i: ${ i }, acc: ${ acc }, el: ${el}`)

const sumMinimums = (n, m) => {
    const array = create2DArray(n, m);
    let sum = 0;
    array.forEach(el => {
        sum += getArrayMin(el);
    });
    console.log('Sum:', sum)
}

console.log('\n\n\t\tTASK 1\n\n\n');
sumMinimums(3, 4);
sumMinimums(3, 5);
sumMinimums(13, 2);
sumMinimums(8, 16);
