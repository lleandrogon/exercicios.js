function contarCaractere(cacactereBuscado, frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === cacactereBuscado) {
            contador++;
        }
    }
    return contador;
}

console.log(contarCaractere("a", "O Leandro gosta muito de programar em JavaScript"));