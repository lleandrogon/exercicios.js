function bissexto(ano) {
    if (ano < 0) {
        return "Ano inválido!";
    } else if (ano % 400 == 0) {
        return "É ano bissexto!";
    } else if (ano % 100 == 0) {
        return "Não é ano bissexto!";
    } else if (ano % 4 == 0) {
        return "É ano bissexto!";
    } else {
        return "Não é ano bissexto!"; ,
    }
}

console.log(bissexto(2024));
console.log(bissexto(2010));
console.log(bissexto(1996));
console.log(bissexto(1982));