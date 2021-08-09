const ipToNumber = (ipStr) => {
    if (typeof ipStr !== 'string') {
        throw new TypeError(`${ ipStr } is not a string`);
    }

    const ip = ipStr
        .split('.')
        .reduce((a, c, i, arr) => {
            return a + ((256 ** (arr.length - (1 + i))) * parseInt(c))
        }, 0);
    return ip
}

const numberToIp = (num) => {
    if (typeof num !== 'number') {
        throw new TypeError(`${ num } is not a number`);
    }

    let d = num % 256;
    for (let i = 3; i > 0; i -= 1) {
        num = Math.floor(num / 256);
        d = num % 256 + '.' + d;
    }
    return d;
}

console.log(ipToNumber('192.168.0.1'))
console.log(numberToIp(3232235521))

const ipsBetween = (ip1, ip2) => {
    const decimal = Math.abs(ipToNumber(ip1) - ipToNumber(ip2));
    console.log(decimal)
    // const result = numberToIp(decimal);
}


ipsBetween("10.0.0.0", "10.0.0.50");
ipsBetween("10.0.0.0", "10.0.1.0");
ipsBetween("20.0.0.10", "20.0.1.0");
