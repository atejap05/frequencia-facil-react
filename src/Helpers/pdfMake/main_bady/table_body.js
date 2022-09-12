//main content
import { SETTINGS } from "../settings";

const settings = new SETTINGS();

export const mainContent = rows => [
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
        ...rows,
      ],
    },
  },
];
