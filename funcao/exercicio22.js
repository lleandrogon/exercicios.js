function calcular(mes, valor) {
    let taxa = 0;
    let montante, juros;
    switch (mes) {
        case 1:
            taxa = 1 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Janeiro: o valor a ser pago é ${valor + juros}`;
        case 2:
            taxa = 2 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Fevereiro: o valor a ser pago é ${valor + juros}`;
        case 3:
            taxa = 3 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Março: o valor a ser pago é ${valor + juros}`;
        case 4:
            taxa = 4 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Abril: o valor a ser pago é ${valor + juros}`;
        case 5:
            taxa = 5 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Maio: o valor a ser pago é ${valor + juros}`;
        case 6:
            taxa = 6 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Junho: o valor a ser pago é ${valor + juros}`;
        case 7:
            taxa = 7 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Julho: o valor a ser pago é ${valor + juros}`;
        case 8:
            taxa = 8 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Agosto: o valor a ser pago é ${valor + juros}`;
        case 9:
            taxa = 9 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Setembro: o valor a ser pago é ${valor + juros}`;
        case 10:
            taxa = 10 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Outubro: o valor a ser pago é ${valor + juros}`;
        case 11:
            taxa = 11 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Novembro: o valor a ser pago é ${valor + juros}`;
        case 12:
            taxa = 12 * 0.5;
            montante = valor * Math.pow(1 + taxa, 1);
            juros = montante - valor;
            return `Dezembro: o valor a ser pago é ${valor + juros}`;
        default:
            return "Mês inválido!";    
    }
}

console.log(calcular(1, 100));
console.log(calcular(2, 100));
console.log(calcular(3, 100));
console.log(calcular(4, 100));
console.log(calcular(5, 100));
console.log(calcular(6, 100));
console.log(calcular(7, 100));
console.log(calcular(8, 100));
console.log(calcular(9, 100));
console.log(calcular(10, 100));
console.log(calcular(11, 100));
console.log(calcular(12, 100));
console.log(calcular(13, 100));