function menorNumero(array) {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

console.log(menorNumero([5, 4, 8, 2, 15]));