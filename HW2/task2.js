const createArray = (length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.trunc((Math.random() * 88 + 1));
    }
    return array;
}

const getArrayMax = (array) => {
    const max = array.reduce((acc, el) => {
        return acc = Math.max(el, acc);
    })
    console.log(max);
    return max;
}

const theOldestAges = (ages) => {
    const oldestAge = getArrayMax(ages);
    const oldestAgeIndex = ages.indexOf(oldestAge);
    ages.splice(oldestAgeIndex, 1);
    const secondOldestAge = getArrayMax(ages);

    console.table(ages);
    console.log('Second Oldest Age:', secondOldestAge, 'Oldest Age:', oldestAge);
    // return [secondOldestAge, oldestAge];
}

console.log('\n\n\t\tTASK 2\n\n\n');
theOldestAges(createArray(2));
theOldestAges(createArray(10));
theOldestAges(createArray(23));
theOldestAges(createArray(36));
