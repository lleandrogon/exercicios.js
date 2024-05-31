function somarNumeros(array) {
    let resultado = 0;

    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado;
}

console.log(somarNumeros([5, 15, 27]));