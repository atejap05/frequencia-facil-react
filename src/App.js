import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pdfBuffer, setPdfBuffer] = useState("");
  const url =
    "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPonto";

  const clickHandler = e => {};
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const pdfBase64 = `data:application/pdf;base64,${data["pdf_base64"]}`;
        setPdfBuffer(pdfBase64);
      });
  }, []);
  console.log("oi");
  return (
    <div>
      <iframe src={pdfBuffer} title="folha-de-ponto"></iframe>
      <button onClick={clickHandler}>Botao</button>
    </div>
  );
}

export default App;
