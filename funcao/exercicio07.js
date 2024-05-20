function bhaskara(ax2 = 3, bx = -5, c = 12) {
    let delta = Math.pow(bx, 2) - 4 * ax2 * c;
    if (delta < 0) {
        return "Delta é negativo";
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
        return `O valor de delta é ${delta} e os valores de X são ${x1.toFixed(2)} e ${x2.toFixed(2)}`;
    }
}

console.log(bhaskara());
console.log(bhaskara(1, 12, -13));