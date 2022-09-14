import { SetInputText, SetInputTime } from "./TableInputs";

export const GROUPED_COLUMNS = [
  { Header: "Dia", accessor: "dia" },
  {
    Header: "Entrada",
    accessor: "entradaManha",
    Cell: ({ value }) => <SetInputTime name={"entradaManha"} value={value} />,
  },
  {
    Header: "Saída",
    accessor: "saidaManha",
    Cell: ({ value }) => <SetInputTime name={"saidaManha"} value={value} />,
  },

  {
    Header: "Entrada",
    accessor: "entradaTarde",
    Cell: ({ value }) => <SetInputTime name={"entradaTarde"} value={value} />,
  },
  {
    Header: "Saída",
    accessor: "saidaTarde",
    Cell: ({ value }) => <SetInputTime name={"saidaTarde"} value={value} />,
  },
  {
    Header: "Assinatura/Ocorrência",
    accessor: "assinaturaOcorrencia",
    Cell: ({ value }) => (
      <SetInputText name={"assinaturaOcorrencia"} value={value} />
    ),
  },
  {
    Header: "Horas",
    accessor: "horas",
    Cell: ({ value }) => <SetInputTime name={"horas"} value={value} />,
  },
  {
    Header: "Comp.",
    accessor: "compensacao",
    Cell: ({ value }) => <SetInputTime name={"compensacao"} value={value} />,
  },
  {
    Header: "Abono",
    accessor: "abono",
    Cell: ({ value }) => <SetInputTime name={"abono"} value={value} />,
  },
];
