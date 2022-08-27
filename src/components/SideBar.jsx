import { useState } from "react";

const SideBar = props => {
  const [pdfBuffer, setPdfBuffer] = useState("");

  const url =
    "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPonto";

  const clickHandler = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const pdfBase64 = `data:application/pdf;base64,${data["pdf_base64"]}`;
        console.log(pdfBase64);
        setPdfBuffer(pdfBase64);
      });
  };

  return <button onClick={clickHandler}>Botao</button>;
};

export default SideBar;
