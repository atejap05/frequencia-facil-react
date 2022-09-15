export const ACTIONS = {
  FETCH: "fetch",
  PREENCHER: "preencher",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        pdf_base64: action.payload["pdf_base64"],
        initialData: action.payload["data"],
      };
    case "preencher":
      return {
        ...state,
        showTable: action.payload,
      };
    default:
      return state;
  }
};
