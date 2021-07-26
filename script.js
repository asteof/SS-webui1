const dom = {
    task1: {
        input: document.getElementById('t1-values'),
        submit: document.getElementById('calc1'),
        output: document.getElementById('out1')
    },
    task2: {
        input: document.getElementById('t2-values'),
        submit: document.getElementById('calc2'),
        output: document.getElementById('out2')
    },
    task3: {
        input: document.getElementById('t3-values'),
        submit: document.getElementById('calc3'),
        output: document.getElementById('out3')
    }
}

const testValues = (amount, lowerLimit, upperLimit, ...values) => {
    if (values.length < amount || values.length > amount) {
        return false;
    }
    return values.every(el => !(el < lowerLimit || el > upperLimit));
}
/**
 console.log(1, testValues(3, 1, 100, 2, 2, 2))
 console.log(2, testValues(2, 1, 100, 2, 2, 2))
 console.log(3, testValues(4, 1, 100, 2, 2, 2))

 console.log(4, testValues(3, 1, 100, 1, 2, 2))
 console.log(5, testValues(4, 3, 100, 2, 2, 2, 0))
 console.log(6, testValues(4, 1, 100, 2, 2, 2, 100))
 console.log(6, testValues(4, 1, 100, 2, 2, 2, 101))
 /**/

const calculatePaint = () => {
    const values = dom.task1.input.value.split('x').map(el => parseInt(el));
    const isOk = testValues(3, 1, 1000, ...values);
    dom.task1.output.textContent = ``;

    if (isOk) {
        const x = Math.ceil((values[0] * values[1] * values[2]) / 16);
        dom.task1.output.textContent = `Чтобы покрасить стены необходимо ${ x } банок краски`;
    } else {
        dom.task1.output.textContent = `Слишком большое число!`;
    }
    dom.task1.input.value = '';
}

dom.task1.submit.addEventListener('click', calculatePaint);
/**
 * */
const calculateSand = () => {
    const values = dom.task2.input.value.split(',').map(el => parseInt(el));
    const isOk = testValues(6, 1, 100, ...values);
    dom.task2.output.textContent = ``;
    console.log(isOk, values);

    if (isOk) {
        const price = values.slice(0, 3).sort((a, b) => a - b);
        const capacity = values.slice(3, 6).sort((a, b) => a - b);

        console.log(price, capacity)
        const result = price.reduce((acc, el, i) => {
            return acc += el * capacity[i];
        }, 0)
        dom.task2.output.textContent = result.toString();
    } else {
        dom.task2.output.textContent = `Неправильный ввод!`;
    }
    dom.task2.input.value = '';
}

dom.task2.submit.addEventListener('click', calculateSand);
/**
 * */
const checkTicket = () => {
    const value = parseInt(dom.task3.input.value, 10);
    let digits = dom.task3.input.value.split('').map(el => parseInt(el));
    let result;
    const isOk = testValues(1, 0, (10 ** 6) - 1, value);
    dom.task3.output.textContent = ``;

    if (isOk && digits.length === 6) {
        const firstHalf = digits.slice(0, 3).reduce((acc, el) => acc += el);
        const secondHalf = digits.slice(3, 6).reduce((acc, el) => acc += el);
        result = firstHalf === secondHalf ? 'Ура! Билет счастливый!' : 'Не в этот раз...';
        dom.task3.output.textContent = result;
    } else {
        dom.task3.output.textContent = `Неправильный ввод!`;
    }
    dom.task3.input.value = '';
}

dom.task3.submit.addEventListener('click', checkTicket);