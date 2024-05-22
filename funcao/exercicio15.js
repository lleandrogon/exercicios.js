function revenda(carro) {
    switch (carro) {
        case "hatch":
            return "Compra efetuada com sucesso!";
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que prefere este modelo?";
        default:
            return "Não trabalhamos com esse tipo de automóvel aqui.";    
    }
}

console.log(revenda("hatch"));
console.log(revenda("sedan"));
console.log(revenda("motocicleta"));
console.log(revenda("caminhonete"));
console.log(revenda("ônibus"));