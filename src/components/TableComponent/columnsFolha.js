const SetInputTime = props => {
  //TODO: implementar onChange handler func para pegar valor do input
  return <input type="time" defaultValue={props.value} />;
};

const SetInputNumber = props => {
  //TODO: implementar onChange handler func para pegar valor do input
  return <input type="number" defaultValue={props.value} />;
};

const SetInputText = props => {
  //TODO: implementar onChange handler func para pegar valor do input
  return <input type="text" defaultValue={props.value} />;
};

export const GROUPED_COLUMNS = [
  { Header: "Dia", accessor: "dia" },
  {
    Header: "Entrada",
    accessor: "entradaManha",
    Cell: ({ value }) => <SetInputTime value={value} />,
  },
  {
    Header: "Saída",
    accessor: "saidaManha",
    Cell: ({ value }) => <SetInputTime value={value} />,
  },

  {
    Header: "Entrada",
    accessor: "entradaTarde",
    Cell: ({ value }) => <SetInputTime value={value} />,
  },
  {
    Header: "Saída",
    accessor: "saidaTarde",
    Cell: ({ value }) => <SetInputTime value={value} />,
  },
  {
    Header: "Assinatura/Ocorrência",
    accessor: "assinaturaOcorrencia",
    Cell: ({ value }) => <SetInputText value={value} />,
  },
  {
    Header: "Horas",
    accessor: "horas",
    Cell: ({ value }) => <SetInputNumber value={value} />,
  },
  {
    Header: "Comp.",
    accessor: "compensacao",
    Cell: ({ value }) => <SetInputNumber value={value} />,
  },
  {
    Header: "Abono",
    accessor: "abono",
    Cell: ({ value }) => <SetInputNumber value={value} />,
  },
];
