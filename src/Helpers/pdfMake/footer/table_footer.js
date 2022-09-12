import { SETTINGS } from "../settings";

const settings = new SETTINGS();

// footer content

export const TABLE_FOOTER = [
  {
    style: "tableExemple",
    margin: [0, 20, 0, 0],
    table: {
      widths: ["35%", "65%"],
      body: [
        [
          {
            alignment: "center",
            margin: [25, 30, 25, 0],
            fontSize: settings.fontSize.font_9,
            stack: ["Carimbo/Assinatura", "Chefia imediata"],
          },
          {
            fontSize: 9,
            stack: [
              {
                ol: [
                  "O Registro não pode ser rasurado.",
                  "Após a aprovação da Frequência, não serão aceitos pedidos de reconsideração de faltas, atraso, ausências ou saída antecipadas.",
                  "No caso de justificativas, observar a lista de afastamento.",
                  "O registro de frequência deverá ser encaminhado até o 2 dia útil do mês subsequente.",
                ],
              },
            ],
          },
        ],
      ],
    },
  },
];
