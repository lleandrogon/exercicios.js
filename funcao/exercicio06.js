function aplicacaoSimples(c, i, t) {
    let j = c * i * t;
    let m = c + j;
    return m;
}

function aplicacaoComposta(c, i, t) {
    let j = c * i * t;
    let m = c * (Math.pow(1 + i, t));
    return m;
}

console.log('O resultado do montante na aplicação simples é: ' + aplicacaoSimples(2, 2, 2));
console.log('O resultado do montante na aplicação composta é: ' + aplicacaoComposta(2, 2, 2));
console.log('O resultado do montante na aplicação simples é: ' + aplicacaoSimples(2, 4, 6));
console.log('O resultado do montante na aplicação composta é: ' + aplicacaoComposta(2, 4, 6));
