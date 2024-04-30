// Importando os arquivos JSON
const enData = require('./messages/en.json')
const ptData = require('./messages/pt.json')

// Função para selecionar o idioma desejado
function selecionarIdioma(lang) {
    switch (lang) {
        case 'en':
            return enData;
        case 'pt':
            return ptData;
        default:
            return ptData;
    }
}

function traduzirArray(lang, arr) {
    const languageData = selecionarIdioma(lang);
    return arr.map(key => languageData[key] || "Value not found");
}

module.exports = {
    traduzirArray
}