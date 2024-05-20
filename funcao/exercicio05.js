function simplificar(valor1 = 0.1, valor2 = 0.2) {
    let resultado = valor1 + valor2;
    console.log('R$ ' + resultado.toFixed(2).replace('.', ','));
}

(simplificar());
(simplificar(0.5, 0.9));
(simplificar(4.7, 8.2));
(simplificar(50.3, 36.8));
