// Importando os arquivos JSON
import enData from './en.json';
import ptData from './pt.json';

// Função para selecionar o idioma desejado
export function selecionarIdioma(lang) {
    switch (lang) {
        case 'en':
            return enData;
        case 'pt':
            return ptData;
        default:
            return enData;
    }
}

export function traduzirArray(arr, lang) {
  const languageData = selectLanguage(lang);
  const translatedArray = [];

  for (let i = 0; i < arr.length; i++) {
      const key = arr[i].key;

      // Verifica se a chave existe nos dados do idioma selecionado
      if (languageData.hasOwnProperty(key)) {
          translatedArray.push({ key: key, value: languageData[key] });
      } else {
          // Se a chave não for encontrada, mantém o valor original
          translatedArray.push({ key: key, value: value });
      }
  }

  return translatedArray;
}