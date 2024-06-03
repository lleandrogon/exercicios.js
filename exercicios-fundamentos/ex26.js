function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = [];

    for (numero of numeros) {
        const quantidadeDeDigitos = String(numero).length;

        if (quantidadeDeDigitos === quantidadeDesejada) {
            resultado.push(numero);
        }
    }

    return resultado;
}

console.log(filtrarPorQuantidadeDeDigitos([50, 400, 6, 1500, 60], 2));