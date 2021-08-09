const quipuToNumber = (string) => {
    if (typeof string !== 'string') {
        throw `${ string } is not a string`;
    }

    const quipu = string.split('~');
    const lastQuipuEl = quipu.length - 1;
    if (quipu[lastQuipuEl] === '') {
        quipu.splice(lastQuipuEl, 1);
    }

    const numbers = quipu.map(el => el.length);
    return parseInt(numbers.join(''));
}

const numberToQuipu = (nums) => {
    const Q = '@';
    const quipu = nums.reduce((qui, el) => {
        const parsedEl = parseInt(el);
        const value = parsedEl === 0 ? '~' : Q.repeat(parsedEl);
        return `${ qui }~${ value }`;
    }, '');
    return quipu.slice(1);
}

const quipuCalculator = (string) => {
    const calcRegEx = /[*+\/-]/;
    const operator = calcRegEx.exec(string)[0];
    const quipu = string.split(calcRegEx);
    const leftOperand = quipuToNumber(quipu[0]);
    const rightOperand = quipuToNumber(quipu[1]);

    const calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    };
    const decimal = calc[operator](leftOperand, rightOperand);
    const numbers = decimal.toString().match(/\d/g);
    console.log(`${ leftOperand } ${ operator } ${ rightOperand } = ${ decimal }`);
    return numberToQuipu(numbers)
}

// 123, 20, 101, 1001, 1000100
quipuToNumber('@~@@~@@@');
quipuToNumber('@@~~');
quipuToNumber('@~~@');
quipuToNumber('@~~~@');
quipuToNumber('@~~~~@');
quipuToNumber('@~~~~@~~~');
//@@, @@~@@~@@~@@, @@@@@@@@@~@@@@@
// numberToQuipu(2);
// numberToQuipu(2222);
// numberToQuipu(95);

console.log(quipuCalculator('@~@@+@@'))
console.log(quipuCalculator('@~@@-@@'));
console.log(quipuCalculator('@~@@*@@'));
console.log(quipuCalculator('@~@@/@@'));
console.log(quipuCalculator('@~@@+@@~~'));
console.log(quipuCalculator('@~~~~@~~~/@~@@@@@@@@~@@@@~@@'));

/**
 * ###Вопросы
 *      //вопрос - foreach & splice или map?
 const numArray = quipuArray.map(el => el.length);
 *
 *      // const operator = string.match(regEx)[0]
 const operator = regEx.exec(string)[0]
 *
 *  eval()
 * */