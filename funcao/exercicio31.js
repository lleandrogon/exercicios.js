function media(vetor) {
    let soma = 0;
    let quantidade = 0;
    for (let i = 0; i < vetor.length; i++) {
        quantidade++;
    }
    
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    return `A média aritmética do vetor é ${soma / quantidade}`;
}

console.log(media([8, 6, 10, 4]));
console.log(media([3, 5, 8, 7]));