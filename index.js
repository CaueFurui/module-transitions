// Importando os arquivos JSON
const enData = require('./messages/en.json')
const ptData = require('./messages/pt.json')

var file

function selecionarArquivo(newFile) {
   file = newFile
}

function traduzirLista(arr) {
    return arr.map(key => file[key] || "Valor não encontrado");
}

function traduzirItem(str) {
    return file[str] || "Valor não encontrado";
}

console.log(file)

module.exports = {
    traduzirLista,
    traduzirItem,
    selecionarArquivo,
    file
}