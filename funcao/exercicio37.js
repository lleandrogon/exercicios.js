function impares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let temporaria = fim;
        fim = inicio;
        inicio = temporaria;
    }

    for (let i = inicio; i <= fim; i++) {
        if ( i % 2 == 1) {
            console.log(i);
        }
    }
}

impares(50, 30);
