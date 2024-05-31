function removerPropriedade(objeto, propriedade) {
    delete objeto[propriedade];
    return objeto;
}

console.log(removerPropriedade({nome: 'Leandro', idade: 19, nacionalidade: 'Brasil'}, 'nacionalidade'));