import { mainContent } from "./main_bady/table_body";
import { tableHeader } from "./header/tabel_header";
import { TABLE_FOOTER } from "./footer/table_footer";
import { SETTINGS } from "./settings";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Settings = new SETTINGS();

pdfMake.fonts = {
  LiberationSerif: {
    normal: "LiberationSerif-Regular.ttf",
    bold: "LiberationSerif-Bold.ttf",
    italics: "LiberationSerif-Italic.ttf",
    bolditalics: "LiberationSerif-BoldItalic.ttf",
  },
};

const geraPDF = folhaObj => {
  const { head, body } = folhaObj;

  const bodyRows = body.map(row => {
    return [
      {
        text: String(row.dia).padStart(2, "0"),
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.entradaManha,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.saidaManha,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.entradaTarde,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.saidaTarde,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.assinaturaOcorrencia,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.horas,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.compensacao,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
      {
        text: row.abono,
        fontSize: Settings.fontSize.font_10,
        alignment: "center",
      },
    ];
  });

  const docDefinitions = {
    defaultStyle: { font: "LiberationSerif", color: "#012030" },
    pageSize: Settings.pageSize,
    pageMargins: Settings.pageMargins,
    header: [tableHeader(head)],
    content: [mainContent(bodyRows), TABLE_FOOTER],
    // footer: [rodape],
  };

  // pdfMake.createPdf(docDefinitions).download("folha.pdf");
  pdfMake.createPdf(docDefinitions).open();
};

export default geraPDF;
