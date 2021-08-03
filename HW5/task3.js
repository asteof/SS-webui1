const ticket = (array) => {
    if (!Array.isArray(array)) {
        throw `${ array } in not an array`;
    }

    const sum = array.reduce((a, b) => a + b);
    if (sum % 25 !== 0) {
        throw `Dollar bills can be only 25, 50 and 100`;
    }

    console.log(array)
    let bill25 = 0;
    let bill50 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 25) {
            bill25 += 1;
        }
        if (array[i] === 50) {
            bill25 -= 1;
            bill50 += 1;
        }
        if (array[i] === 100) {
            if (bill50 === 0 && bill25 >= 3) {
                bill25 -= 3;
            } else {
                bill25 -= 1;
                bill50 -= 1;
            }
        }
        if (bill25 < 0 || bill50 < 0) {
            console.log('NO')
            return 'NO';
        }
    }
    console.log('YES')
    return 'YES'
}

ticket([25, 25, 50]);
ticket([25, 100]);
ticket([25, 25, 50, 50, 100]);
ticket([25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100]);
