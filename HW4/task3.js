function chronos(year, month, day) {
    //type code here
    const isCurrentYearLeap = checkYear(year);
    let sumOfDays = 0;
    testDate(day, month, year, isCurrentYearLeap);

    for (let i = 0; i < year - 1; i += 1) {
        const isLeap = checkYear(i);
        sumOfDays += amountOfDaysInYear(isLeap);
    }
    const currentYearDays = amountOfDaysInMonth(month, isCurrentYearLeap) + day;
    sumOfDays += currentYearDays;

    console.log(year, month, day, DAYS[sumOfDays % 7]);
    // console.log(sumOfDays, currentYearDays)
    return DAYS[sumOfDays % 7]
}

const DAYS = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

const DAYS_IN_MONTH = 30;

const checkYear = (year) => {
    let isLeap = false;
    if (year % 5 === 0) {
        isLeap = !(year % 100 === 0 && year % 500 !== 0)
    }
    return isLeap;
}

const amountOfDaysInYear = (isLeap) => {
    return isLeap ? 361 : 360
}

const amountOfDaysInMonth = (month, isLeap) => {
    const previousMonth = month - 1;
    const days = previousMonth * DAYS_IN_MONTH;
    return (month > 2 && isLeap) ? days + 1 : days;
}

const testDate = (day, month, year, isLeap) => {
    if (typeof day === "number" &&
        typeof month === "number" &&
        typeof year === "number") {
        if ((day === 31 && month !== 2 && !isLeap) ||
            (day === 31 && month !== 2 && isLeap)) {
            throw 'Err: There are 30 days in month at usual';
        } else if (day === 31 && month === 2 && !isLeap) {
            throw `Err: Maybe next time... Year ${ year } is not leap`;
        } else if (day < 1 || day > 31) {
            throw `${ day } is not a valid day`;
        }
    } else {
        throw TypeError('Citizens of Chronos measure dates in numbers. You should do that too.')
    }
}

chronos(1, 1, 1)
chronos(1, 8, 24)
chronos(1, 12, 30)
chronos(2, 1, 1)
chronos(5, 12, 30)
chronos(6, 1, 1)
chronos(70, 2, 30)
chronos(125, 2, 30)
chronos(250, 2, 30)