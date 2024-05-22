function diaUtil(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo, fim de semana!");
            break;
        case 2:
            console.log("Segunda, dia útil!");
            break;
        case 3:
            console.log("Terça, dia útil!");
            break;
        case 4:
            console.log("Quarta, dia útil!");
            break;
        case 5:
            console.log("Quinta, dia útil!");
            break;
        case 6:
            console.log("Sexta, dia útil!");
            break;
        case 7:
            console.log("Sábado, fim de semana!");
            break;
        default:
            console.log("Dia inválido!");        
    }
}

diaUtil(1);
diaUtil(2);
diaUtil(3);
diaUtil(4);
diaUtil(5);
diaUtil(6);
diaUtil(7);