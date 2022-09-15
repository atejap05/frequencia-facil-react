import { useReducer } from "react";
import FolhaContext from "./context/folhaContext";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";
import classes from "./css/styles.module.css";
import { reducer, ACTIONS } from "./reducer/reducer";
import TableComponent from "./components/TableComponent/TableComponent";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    pdf_base64: "",
    initialData: {},
    showTable: false,
  });

  return (
    <FolhaContext.Provider value={{ folhaData: state.initialData }}>
      <div className={classes["main-container"]}>
        <SideBar
          onClickFetch={data =>
            dispatch({ type: ACTIONS.FETCH, payload: data })
          }
          //TODO: somente exibir o botão preencher após o fetch inicial da folha
          onClickPreencher={() =>
            dispatch({ type: ACTIONS.PREENCHER, payload: true })
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
