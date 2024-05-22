function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return (`R$ ${3 * quantidade}`);
        case 200:
            return (`R$ ${4 * quantidade}`);
        case 300:
            return (`R$ ${5.50 * quantidade}`);
        case 400:
            return (`R$ ${7.50 * quantidade}`);
        case 500:
            return (`R$ ${3.50 * quantidade}`);
        case 600:
            return (`R$ ${2.80 * quantidade}`);
    }
}

console.log(cardapio(100, 3));
console.log(cardapio(200, 5));
console.log(cardapio(300, 2));
console.log(cardapio(400, 0));
console.log(cardapio(500, 10));
console.log(cardapio(600, 37));