//main content
import { convertFirstLetterToUpperCase } from "../../helpers";
import { SETTINGS } from "../settings";

const settings = new SETTINGS();

export const mainContent = bodyContent => {
  const bodyRows = bodyContent.map(row => {
    const assinaturaOcorrencia = row.assinaturaOcorrencia
      ? convertFirstLetterToUpperCase(row.assinaturaOcorrencia)
      : row.assinaturaOcorrencia;
    return [
      {
        text: String(row.dia).padStart(2, "0"),
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.entradaManha,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.saidaManha,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.entradaTarde,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.saidaTarde,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: assinaturaOcorrencia,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.horas,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.compensacao,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.abono,
        fontSize: settings.fontSize.font_10,
        alignment: "center",
      },
    ];
  });

  return [
    {
      table: {
        widths: [20, 40, 40, 40, 40, 170, 35, 35, 35],
        body: [
          [
            {
              alignment: "center",
              text: "Dia",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Entrada",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Saída",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Entrada",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Saída",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Assinatura/Ocorrência",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Hora",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Comp.",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
            {
              alignment: "center",
              text: "Abono",
              style: "tableHeader",
              fontSize: settings.fontSize.font_11,
            },
          ],
          ...bodyRows,
        ],
      },
    },
  ];
};
