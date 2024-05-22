function estoque(fruta) {
    switch (fruta) {
        case "Maçã":
            return "Não vendemos essa fruta aqui";
        case "Kiwi":
            return "Estamos com escassez de kiwis";
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Erro! Fruta inválida!";            
    }
}

console.log(estoque("Maçã"));
console.log(estoque("Kiwi"));
console.log(estoque("Melancia"));
console.log(estoque("Mamão"));