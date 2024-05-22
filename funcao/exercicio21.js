function pagamento(idade) {
    valorPadrao = 100;
    if (idade >= 0 && idade < 10) {
        return valorPadrao + 80;
    } else if (idade >= 10 && idade <= 30) {
        return valorPadrao + 50;
    } else if (idade > 30 && idade <= 60) {
        return valorPadrao + 95;
    } else if (idade > 60) {
        return valorPadrao + 130;
    } else {
        return "Idade Inválida!";
    }
}

console.log(pagamento(8));
console.log(pagamento(22));
console.log(pagamento(50));
console.log(pagamento(69));
console.log(pagamento(-15));
console.log(pagamento(500));