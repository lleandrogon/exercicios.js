function contarPalavras(string) {
    const palavras = string.split(" ");
    return palavras.length;
}

console.log(contarPalavras("Eu gosto de bolo"));