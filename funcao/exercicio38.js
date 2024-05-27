function notas(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0 && vetor[i] <= 4.9) {
            vetor[i] = "D";
        } else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            vetor[i] = "C";
        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            vetor[i] = "B";
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            vetor[i] = "A";
        } else {
            return "Notas Inválidas!";
        }
    }
    return vetor;    
}

console.log(notas([4, 6, 7.8, 10]));
console.log(notas([9.5, 7.2, 5.8, 3]));


