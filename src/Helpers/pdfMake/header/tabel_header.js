import { SETTINGS } from "../settings";

const settings = new SETTINGS();

const layout = {
  vLineColor: "#012030",
  hLineColor: "#012030",
  hLineWidth: function (i, node) {
    return 0.75;
  },
  vLineWidth: function (i, node) {
    return 0.75;
  },
};

const margin = settings.margins.marginPageLeft;

export const tableHeader = head => [
  {
    style: "tableExample",
    margin: [margin, margin, margin, 0],
    table: {
      widths: [
        settings.convertInUnitToPtUnit(4.79) - 5,
        settings.convertInUnitToPtUnit(2.54),
      ], // total width = 586
      body: [
        [
          {
            border: [true, true, false, false],
            fontSize: settings.fontSize.font_16,
            text: head.headInfo.orgao.ministerio,
          },
          {
            border: [true, true, true, false],
            fontSize: settings.fontSize.font_16,

            alignment: "center",
            text: "Folha de Frequência",
          },
        ],
        [
          {
            border: [true, false, false, true],
            fontSize: settings.fontSize.font_16,
            text: head.headInfo.orgao.secretaria,
          },
          {
            alignment: "center",
            bold: true,
            fontSize: settings.fontSize.font_16,
            border: [true, false, true, true],
            text:
              `${head.headInfo.dataReferencia.mes}` +
              " / " +
              `${head.headInfo.dataReferencia.ano}`,
          },
        ],
        [
          {
            colSpan: 2,
            alignment: "center",
            fontSize: settings.fontSize.font_11,
            border: [false, false, false, true],
            text:
              `Folha impressa em ${head.dadosImpressao.data} ` +
              `às ${head.dadosImpressao.horario} pelo usuário matrícula: ` +
              `${head.dadosImpressao.matricula} - Código de homologação: ` +
              `${head.dadosImpressao.codHomologacao}`,
          },
        ],
        [
          {
            border: [true, true, false, false],
            alignment: "center",
            fontSize: settings.fontSize.font_16,
            italics: true,
            text: `${head.pessoalInfo.nome}`,
          },
          {
            margin: [60, 5, 0, 0],
            fontSize: settings.fontSize.font_11,
            border: [false, true, true, false],
            text: `CPF: ${head.pessoalInfo.cpf}`,
          },
        ],
        [
          {
            border: [true, false, false, false],
            fontSize: settings.fontSize.font_11,
            text: `Cargo: ${head.pessoalInfo.cargo}`,
          },
          {
            margin: [60, 0, 0, 0],
            border: [false, false, true, false],
            fontSize: settings.fontSize.font_11,
            text: `Siape: ${head.pessoalInfo.siape}`,
          },
        ],
        [
          {
            border: [true, false, false, false],
            fontSize: settings.fontSize.font_11,
            text: `Unidade de Exercício: ${head.pessoalInfo.unidadeExercicio}`,
          },
          {
            margin: [60, 0, 0, 0],
            border: [false, false, true, false],
            fontSize: settings.fontSize.font_11,
            text: `SiapeÚnico: ${head.pessoalInfo.siapeUnico}`,
          },
        ],
        [
          {
            border: [true, false, false, false],
            fontSize: settings.fontSize.font_11,
            text: `Setor de Exercício: ${head.pessoalInfo.setorExercicio}`,
          },
          {
            margin: [60, 0, 0, 0],
            border: [false, false, true, false],
            fontSize: settings.fontSize.font_11,
            text: `SiapeCad: ${head.pessoalInfo.siapeCad}`,
          },
        ],
        [
          {
            border: [true, false, false, false],
            fontSize: settings.fontSize.font_11,
            text: `Unidade de Localização Física: ${head.pessoalInfo.localizacaoFisica.unidade}`,
          },
          {
            margin: [60, 0, 0, 0],
            border: [false, false, true, false],
            fontSize: settings.fontSize.font_11,
            text: `Telefone:  ${head.pessoalInfo.telefone}`,
          },
        ],
        [
          {
            border: [true, false, false, true],
            fontSize: settings.fontSize.font_11,
            text:
              `Município de Localização Física: ` +
              `${head.pessoalInfo.localizacaoFisica.municipio}-` +
              `${head.pessoalInfo.localizacaoFisica.endereco}`,
          },
          {
            margin: [60, 0, 0, 0],
            border: [false, false, true, true],
            fontSize: settings.fontSize.font_11,
            text:
              `Pav: ${head.pessoalInfo.localizacaoFisica.complemento.pav} ` +
              `Sala:  ${head.pessoalInfo.localizacaoFisica.complemento.sala}`,
          },
        ],
        [
          {
            border: [false, false, false, false],
            colSpan: 2,
            fontSize: settings.fontSize.font_11,
            alignment: "center",
            text: `${head.jornadaTrabalho.jornada}`,
          },
        ],
      ],
    },
    layout: layout,
  },
];
