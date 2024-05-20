function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Triângulo Equilátero';
    } else if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado1 != lado2 || lado2 == lado3 && lado2 != lado1) {
        return 'Triângulo Isóceles';
    } else {
        return 'Triângulo Escaleno';
    }
}

console.log(triangulo(2, 2, 2));
console.log(triangulo(2, 4, 4));
console.log(triangulo(2, 4, 6));