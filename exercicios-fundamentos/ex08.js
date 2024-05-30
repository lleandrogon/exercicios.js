function multiplicacao(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "Não fazemos cálculos com números menores que 0";
    } else {
        return num1 * num2;
    }
}

console.log(multiplicacao(-5, 2));
console.log(multiplicacao(3 , 2));