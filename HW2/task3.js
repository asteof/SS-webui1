const getMinString = array => {
    const min = array.reduce((acc, el) => {
        return acc = Math.min(el.length, acc);
    }, 10 ** 8)
    console.log(min);
    return min;
}

const findShortestString = string => {
    const array = string.split(/[,.\/\\'"`:;()\[\] -?!]+/);

    array.forEach((el, i) => el === '' && array.splice(i, 1));
    console.log(array);
    const shortestWord = getMinString(array);
    console.log(shortestWord);
}

console.log('\n\n\t\tTASK 3\n\n\n');
findShortestString('Hi, do you know your abc\'s?');

findShortestString('Regular expressions are patterns used to match character ' +
    'combinations in strings. In JavaScript, regular expressions are also objects. ' +
    'These patterns are used with the exec() and test() methods of RegExp, and with' +
    ' the match(), matchAll(), replace(), replaceAll(), search(), and split() methods' +
    ' of String. This chapter describes JavaScript regular expressions.');

findShortestString('Other fields include agrochemistry, astrochemistry ' +
    '(cosmochemistry), atmospheric chemistry, chemical engineering, chemical' +
    ' biology, chemo-informatics, electrochemistry, environmental chemistry,' +
    ' femtochemistry, flavor chemistry, geochemistry, green ' +
    'chemistry, histochemistry, hydrogenation chemistry, immunochemistry, ' +
    'marine chemistry, materials science, mathematical chemistry,' +
    ' mechanochemistry, medicinal chemistry, molecular biology, molecular mechanics,' +
    ' nanotechnology, natural product chemistry, oenology, organometallic chemistry,' +
    ' petrochemistry, pharmacology, photochemistry, physical organic chemistry,' +
    ' phytochemistry, polymer chemistry, radiochemistry, solid-state chemistry,' +
    ' sonochemistry, supramolecular chemistry, surface chemistry, synthetic ' +
    'chemistry, thermochemistry');

findShortestString('Pneumonoultramicroscopicsilicovolcaniconioză' +
    'Difosfopiridinnucleotidpirofosfatază Encefalomielopoliradiculonevrită' +
    'Gastropiloroduodenojejunostomie Diclordifeniltriclormetilmetan Electroglotospectrografie');