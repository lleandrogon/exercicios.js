function paresEImparesArray() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = numeros.filter(numero => numero % 2 === 0);
    const impares = numeros.filter(numero => numero % 2 === 1);
    console.log("Números pares: " + pares);
    console.log("Números ímpares: " + impares);
}

paresEImparesArray();