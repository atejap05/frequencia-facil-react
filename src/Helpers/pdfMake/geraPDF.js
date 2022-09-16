import { mainContent } from "./main_bady/table_body";
import { tableHeader } from "./header/tabel_header";
import { TABLE_FOOTER } from "./footer/table_footer";
import { SETTINGS } from "./settings";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const settings = new SETTINGS();

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

  const docDefinitions = {
    title: "some name",
    defaultStyle: { font: "LiberationSerif", color: "#012030" },
    pageSize: settings.pageSize,
    pageMargins: settings.pageMargins,
    header: [tableHeader(head)],
    content: [mainContent(body), TABLE_FOOTER],
    // footer: [rodape],
  };

  // pdfMake.createPdf(docDefinitions).download("folha.pdf");
  pdfMake.createPdf(docDefinitions).open();
};

export default geraPDF;
