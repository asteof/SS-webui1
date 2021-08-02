const quipuToNumber = (string) => {
    if (typeof string !== 'string') {
        throw `${ string } is not a string`;
    }

    const quipuArray = string.split('~');
    const quipuLength = quipuArray.length;
    const lastQuipu = quipuLength - 1;
    if (quipuArray[lastQuipu] === '') {
        quipuArray.splice(lastQuipu, 1);
    }

    const numArray = quipuArray.map(el => el.length);
    return parseInt(numArray.join(''));
}

const numberToQuipu = (num) => {
    const numArray = [...num.toString()];
    const quipuArray = numArray.map(el => {
        let res = '';
        for (let i = 0; i < parseInt(el); i += 1) {
            res += '@';
        }
        return res;
    })
    return quipuArray.join('~')
}

const quipuCalculator = (string) => {
    const regEx = /[*+\/-]/
    const operator = regEx.exec(string)[0]
    const quipuArray = string.split(regEx);
    const leftOperand = quipuToNumber(quipuArray[0]);
    const rightOperand = quipuToNumber(quipuArray[1]);

    const calc = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b),
    };
    const decimal = calc[operator](leftOperand, rightOperand);
    console.log(`${ leftOperand } ${ operator } ${ rightOperand } = ${ decimal }`);
    const result = numberToQuipu(decimal);
    console.log(result);
}

// 123, 20, 101, 1001, 1000100
quipuToNumber('@~@@~@@@');
quipuToNumber('@@~~');
quipuToNumber('@~~@');
quipuToNumber('@~~~@');
quipuToNumber('@~~~~@');
quipuToNumber('@~~~~@~~~');
//@@, @@~@@~@@~@@, @@@@@@@@@~@@@@@
numberToQuipu(2);
numberToQuipu(2222);
numberToQuipu(95);

quipuCalculator('@~@@+@@')
quipuCalculator('@~@@-@@')
quipuCalculator('@~@@*@@')
quipuCalculator('@~@@/@@')
quipuCalculator('@~@@+@@~~')
quipuCalculator('@~~~~@~~~/@~@@@@@@@@~@@@@~@@')

/**
 * ###Вопросы
 *      //вопрос - foreach & splice или map?
 const numArray = quipuArray.map(el => el.length);
 *
 *      // const operator = string.match(regEx)[0]
 const operator = regEx.exec(string)[0]
 *
 *  eval()
 *
 *
 *
 * */