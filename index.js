// Importando os arquivos JSON
const enData = require('./messages/en.json')
const ptData = require('./messages/pt.json')

var file

function selecionarArquivo(newFile) {
   file = newFile
}

function traduzirLista(arr) {
    console.log(file, 'test')
    return arr.map(key => file[key] || "Valor não encontrado");
}

function traduzirItem(str) {
    return file[str] || "Valor não encontrado";
}

module.exports = {
    traduzirLista,
    traduzirItem,
    selecionarArquivo,
    file
}