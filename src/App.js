import { useState } from "react";
import FolhaContext from "./context/folhaContext";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";
import classes from "./css/styles.module.css";
import TableComponent from "./components/TableComponent/TableComponent";
import gerarPDF from "./Helpers/pdfMake/geraPDF";
import DUMMY_DATA from "./assets/dev_data/DUMMY_DATA.json";

function App() {
  const [pdfDataBuffer, setPdfDataBuffer] = useState("");
  const [dadosFolha, setDadosFolha] = useState({});

  const onClickGerarHandler = () => {
    gerarPDF(DUMMY_DATA);
    // console.log(dadosFolha);
  };

  return (
    <FolhaContext.Provider value={{ dadosFolha: dadosFolha }}>
      <div className={classes["main-container"]}>
        <SideBar
          onClickGerar={onClickGerarHandler}
          onClickFetch={dataBuffer => setPdfDataBuffer(dataBuffer)}
        />
        {false ? (
          <IframePDF src={pdfDataBuffer} />
        ) : (
          <TableComponent onClickGerar={dadosObj => setDadosFolha(dadosObj)} />
        )}
      </div>
    </FolhaContext.Provider>
  );
}

export default App;
