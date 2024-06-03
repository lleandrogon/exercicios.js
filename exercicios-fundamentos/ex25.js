function inverter(objeto) {
    let objInvertido = {};

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0;
        valor = 1;

        objInvertido[ parChaveValor[valor] ] = parChaveValor[chave];
    })

    return objInvertido;
}

console.log(inverter({nome: "Leandro", série: "3º A", colégio: "CPM"}));