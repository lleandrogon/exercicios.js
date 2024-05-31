function filtrarNumeros(array) {
    const resultado = [];

    for (let item of array) {
        if (typeof item === "number") {
            resultado.push(item);
        }
    }
    return resultado;
}

console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]));