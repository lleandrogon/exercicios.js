function maiorMenor(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
        
        if (vetor[i] < menor) {
            menor = vetor[i];
        } 
    }

    return `O maior valor do vetor é ${maior} e o menor valor do vetor é ${menor}`;
}

console.log(maiorMenor([10, 15, 7, 3, 29, 13, 4, 22]));