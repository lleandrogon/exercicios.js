function aumento(plano, salario) {
    let acrescimoA = salario * 0.10;
    let acrescimoB = salario * 0.15;
    let acrescimoC = salario * 0.20;
    switch (plano) {
        case "A":
            return salario + acrescimoA;
        case "B":
            return salario + acrescimoB;
        case "C":
            return salario + acrescimoC;
        default:
            return "Plano inválido!";            
    }
}

console.log(aumento("A", 1000));
console.log(aumento("B", 1000));
console.log(aumento("C", 1000));