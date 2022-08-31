import { useState } from "react";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";
import classes from "./App.module.css";
import TableComponent from "./components/TableComponent/TableComponent";

function App() {
  const [pdfDataBuffer, setPdfDataBuffer] = useState("");

  return (
    <>
      <div className={classes["main-container"]}>
        <SideBar onClickFetch={dataBuffer => setPdfDataBuffer(dataBuffer)} />
        {false ? <IframePDF src={pdfDataBuffer} /> : <TableComponent />}
      </div>
    </>
  );
}

export default App;
