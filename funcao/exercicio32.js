function mostrar() {
    const vetorInteiro = [1, 2, 3, 4];
    const vetorString = ["um", "dois", "três", "quatro"];
    const vetorDouble = [1.5, 2.5, 3.5, 4.5];
    
    const resultado1 = vetorInteiro.concat(vetorString);
    const resultado2 = vetorString.concat(vetorDouble);
    
    return [resultado1, resultado2];
}

const resultados = mostrar();
console.log(resultados[0]);
console.log(resultados[1]);