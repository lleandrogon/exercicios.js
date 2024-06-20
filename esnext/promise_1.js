const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    // .then(v => console.log(v))
    .then(console.log);
