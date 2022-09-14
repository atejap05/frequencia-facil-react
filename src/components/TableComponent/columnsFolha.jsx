import { SetInput } from "./TableInputs";

export const GROUPED_COLUMNS = [
  { Header: "Dia", accessor: "dia" },
  {
    Header: "Entrada",
    accessor: "entradaManha",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"entradaManha"} value={value} />
    ),
  },
  {
    Header: "Saída",
    accessor: "saidaManha",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"saidaManha"} value={value} />
    ),
  },

  {
    Header: "Entrada",
    accessor: "entradaTarde",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"entradaTarde"} value={value} />
    ),
  },
  {
    Header: "Saída",
    accessor: "saidaTarde",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"saidaTarde"} value={value} />
    ),
  },
  {
    Header: "Assinatura/Ocorrência",
    accessor: "assinaturaOcorrencia",
    Cell: ({ value }) => (
      <SetInput type={"text"} name={"assinaturaOcorrencia"} value={value} />
    ),
  },
  {
    Header: "Horas",
    accessor: "horas",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"horas"} value={value} />
    ),
  },
  {
    Header: "Comp.",
    accessor: "compensacao",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"compensacao"} value={value} />
    ),
  },
  {
    Header: "Abono",
    accessor: "abono",
    Cell: ({ value }) => (
      <SetInput type={"time"} name={"abono"} value={value} />
    ),
  },
];
