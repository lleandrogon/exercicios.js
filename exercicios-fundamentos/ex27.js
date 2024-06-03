function segundoMaior(numeros) {

    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA);
    const segundoMaior = numerosOrdenados[1];

    return segundoMaior;
}

console.log(segundoMaior([5, 7, 6, 1, 2, 10, 15, 4]));