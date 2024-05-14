let file = null

function selecionarArquivo(newFile) {
   file = newFile
}

function traduzirLista(arr) {
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