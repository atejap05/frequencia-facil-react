export const getCurrentDate = () => {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
};

export const getUrlToFetch = selectedData => {
  /**
   * selectedData string no formato YYYY-MM
   */
  const ano = selectedData.split("-")[0];
  const mes = selectedData.split("-")[1];

  // TODO: encerra o contexto a cada chamada 'ctx/once'
  return `https://localhost:8443/ctx/once/frequencia_facil/getFolhaPontoAnoMes?ano=${ano}&mes=${mes}`;
};

export const convertFirstLetterToUpperCase = str => {
  const listOfWords = str.toLowerCase().split(" ");
  const [fistWord, ...others] = listOfWords;
  const newFirstWord = fistWord.replace(
    fistWord.at(0),
    fistWord.at(0).toUpperCase()
  );
  others.unshift(newFirstWord);

  return others.join(" ");
};
