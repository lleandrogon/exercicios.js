function calculadora(operacao, num1, num2) {
    switch (operacao) {
        case "soma":
            return num1 + num2;
        case "subtração":
            return num1 - num2;
        case "multiplicação":
            return num1 * num2;
        case "divisão":
            return (num1 / num2).toFixed(2);
        default:
            return "Operação inválida!";                
    }
}

console.log(calculadora("soma", 5, 3));
console.log(calculadora("subtração", 5, 3));
console.log(calculadora("multiplicação", 5, 3));
console.log(calculadora("divisão", 5, 3));