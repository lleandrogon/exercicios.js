function vetor1(array, int) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * int);
    }
    return resultado;
}

function vetor2(array, int) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            resultado.push(array[i] * int);
        } else {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

console.log(vetor1([1, 2, 3, 4, 5], 3));
console.log(vetor2([2, 4, 5, 6, 10], 3));