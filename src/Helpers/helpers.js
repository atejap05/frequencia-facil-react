export const getCurrentDate = () => {
  const now = new Date();
  return {
    year: String(now.getFullYear()),
    month: String(now.getMonth() + 1).padStart(2, "0"),
  };
};

export const getUrlToFetch = selectedData => {
  /**
   * selectedData string no formato YYYY-MM
   */
  const ano = selectedData.split("-")[0];
  const mes = selectedData.split("-")[1];
  return `https://localhost:8443/ctx/run/frequencia_facil/getFolhaPontoAnoMes?ano=${ano}&mes=${mes}`;
};
