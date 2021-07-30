const parseString = (string) => {
    const array = string.split(' ');
    const regEx = /[1-9]/;
    const resultString = array
        .sort(((a, b) => a.match(regEx) - b.match(regEx)))
        .join(' ');
    console.log(resultString)
}

console.log('\n\n\t\tTASK 1\n\n\n');

parseString('is2 Thi1s T4est 3a"');
parseString('4of Fo1r pe6ople g3ood th5e the2');
parseString('4fox qu2ick brown3 T1he dog9 la8zy jum6ps ov7er');
parseString('task3 task2 task1');
parseString('HW1 HW5 HW2 HW1 HW6 HW3 HW4 HW7 HW8 HW9');
