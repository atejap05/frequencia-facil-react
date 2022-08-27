import { useState } from "react";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";

import classes from "./App.module.css";

function App() {
  const [pdfDataBuffer, setPdfDataBuffer] = useState("");

  return (
    <div className={classes["main-container"]}>
      <SideBar onClickFetch={dataBuffer => setPdfDataBuffer(dataBuffer)} />
      <IframePDF src={pdfDataBuffer} />
    </div>
  );
}

export default App;
