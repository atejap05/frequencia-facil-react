import { useReducer } from "react";
import FolhaContext from "./context/folhaContext";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";
import classes from "./css/styles.module.css";
import TableComponent from "./components/TableComponent/TableComponent";
import gerarPDF from "./Helpers/pdfMake/geraPDF";
import DUMMY_DATA from "./assets/dev_data/DUMMY_DATA.json";

const reducer = (state, action) => {
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

function App() {
  const [state, dispatch] = useReducer(reducer, {
    pdf_base64: "",
    initialData: {},
    showTable: false,
  });

  const onClickGerarHandler = () => {
    gerarPDF(DUMMY_DATA);
    // console.log(dadosFolha);
  };

  return (
    <FolhaContext.Provider value={{ dadosFolha: state }}>
      <div className={classes["main-container"]}>
        <SideBar
          onClickGerar={onClickGerarHandler}
          onClickFetch={data => dispatch({ type: "fetch", payload: data })}
          //TODO: somente exibir o botão preencher após o fetch inicial da folha
          onClickPreencher={() =>
            dispatch({ type: "preencher", payload: true })
          }
        />
        {state.showTable ? (
          <TableComponent initialDataBody={state.initialData.body} />
        ) : (
          <IframePDF src={state["pdf_base64"]} />
        )}
      </div>
    </FolhaContext.Provider>
  );
}

export default App;
