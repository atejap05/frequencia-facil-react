import { useState } from "react";
import IframePDF from "./components/IframePDF";
import SideBar from "./components/SideBar";

import "./App.css";

function App() {
  const [pdfDataBuffer, setPdfDataBuffer] = useState("");

  return (
    <div>
      <IframePDF src={pdfDataBuffer} />
      <SideBar onClickFetch={dataBuffer => setPdfDataBuffer(dataBuffer)} />
    </div>
  );
}

export default App;
