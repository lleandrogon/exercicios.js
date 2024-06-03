function removerVogais(string) {
    let resultado = string.replace(/[aeiou]/gi, '');

    return resultado;
}

console.log(removerVogais('Leandro'));