function despesasTotais(itens) {
    var total = 0;

    for (let item of itens) {
        total += item.preco;
    }
    return total;
}

console.log(despesasTotais([{nome: "Galaxy", categoria: "Eletrônicos", preco: 3599.99}]));