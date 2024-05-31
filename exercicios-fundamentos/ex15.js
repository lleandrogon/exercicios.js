function checarAnoBissexto(ano) {
    if (ano % 4 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 400 == 0) {
        return true;
    }
    return false;
}

console.log(checarAnoBissexto(2024));
console.log(checarAnoBissexto(2026));
console.log(checarAnoBissexto(1996));