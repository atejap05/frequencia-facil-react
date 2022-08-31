export const GROUPED_COLUMNS = [
  { Header: "Dia", accessor: "dia" },
  {
    Header: "Manhã",
    columns: [
      { Header: "Entrada", accessor: "entradaManha" },
      { Header: "Saída", accessor: "saidaManha" },
    ],
  },
  {
    Header: "Tarde",
    columns: [
      { Header: "Entrada", accessor: "entradaTarde" },
      { Header: "Saída", accessor: "saidaTarde" },
    ],
  },
  {
    Header: "Assinatura/Ocorrência",
    accessor: "assinaturaOcorrencia",
  },
  {
    Header: "Horas",
    accessor: "horas",
  },
  {
    Header: "Comp.",
    accessor: "compensacao",
  },
  {
    Header: "Abono",
    accessor: "abono",
  },
];
