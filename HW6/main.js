const fruits = ['Яблоко', 'Банан', 'Ананас', 'Арбуз', 'Груша', 'Вишня', 'Апельсин', 'Маракуйя'];

// map

console.log('map:', fruits.map(el => el[0]))

console.log('reduce:', fruits.reduce((a, c) => {
    a.push(c[0]);
    return a;
}, []))

// filter

console.log('filter:', fruits.filter(el => el[0].toLowerCase() === 'а'))

console.log('reduce:', fruits.reduce((a, c) => {
    c[0].toLowerCase() === 'а' && a.push(c);
    return a;
}, []))

// foreach

const fruits2 = fruits.slice(0);
fruits2.forEach((el, i, arr) => arr[i] = `${ i + 1 }: ${ el }`);

console.log('foreach:', fruits2)

console.log('reduce:',fruits.reduce((a, c, i)=>{
    a.push(`${i+1}: ${c}`);
    return a;
},[]))
