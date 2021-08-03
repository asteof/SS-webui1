const findMaxProd = (n) => {
    const allPartitions = partition(n);
    const max = allPartitions.reduce((a, b) => Math.max(a, b[1]), 0);
    const maxIndices = allPartitions.reduce((a, b, i) => {
        b[1] === max && a.push(i);
        return a;
    }, []);

    const result = maxIndices.map(el => allPartitions[el][0]);
    result.push(max);
    console.table(allPartitions)
    console.log(result)
    // console.log(allProducts, maxProduct);
}

const partition = (n) => {
    const partArray = [];
    let i = 0;
    partArray[i] = n;
    const allPartitions = [];

    while (true) {
        // console.log(partArray); //, i + 1
        let sum = partArray.reduce((a, b) => a + b);
        while (sum > n) {
            partArray.pop();
            sum = partArray.reduce((a, b) => a + b);
        }

        allPartitions.push([
            [...partArray],
            partArray.reduce((a, b) => a * b)
        ])
        let lastValBeforeOnes = 0;
        while (i >= 0 && partArray[i] === 1) {
            lastValBeforeOnes += partArray[i];
            i -= 1;
        }

        if (i < 0) {
            return allPartitions;
        }

        partArray[i] -= 1;
        lastValBeforeOnes += 1;

        while (lastValBeforeOnes > partArray[i]) {
            partArray[i + 1] = partArray[i];
            lastValBeforeOnes = lastValBeforeOnes - partArray[i];
            i += 1;
        }

        partArray[i + 1] = lastValBeforeOnes;
        i += 1;
    }
}

console.log('---------------------------------')
findMaxProd(10)
// partition(3)
// console.log('---------------------------------')
// partition(4)
// console.log('---------------------------------')
// partition(5)
