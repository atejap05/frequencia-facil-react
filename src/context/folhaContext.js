import React from "react";

const FolhaContext = React.createContext({
  folhaData: {}, // body and head
  gerarFolha: false,
});

export default FolhaContext;
