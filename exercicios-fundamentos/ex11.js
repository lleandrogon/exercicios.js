function primeiroUltimo(elementos) {
    const primeiro = elementos.shift();
    const ultimo = elementos.pop();

    return [primeiro, ultimo];
}

console.log(primeiroUltimo([5, 7, 6, 1, 2, 3]));