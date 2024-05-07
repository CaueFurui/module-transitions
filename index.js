// Importando os arquivos JSON
const enData = require('./messages/en.json')
const ptData = require('./messages/pt.json')

var file

// Função para selecionar o idioma desejado
function selecionarArquivo(newFile) {
   file = newFile
}

function traduzirLista(arr) {
    return arr.map(key => file[key] || "Valor não encontrado");
}

function traduzirItem(str) {
    return file[str] || "Valor não encontrado";
}

selecionarArquivo(enData)
console.log(file, 'file')

module.exports = {
    traduzirLista,
    traduzirItem,
    selecionarArquivo,
    file
}