const SideBar = props => {
  const url =
    "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPonto";

  const clickHandler = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const pdfBase64 = `data:application/pdf;base64,${data["pdf_base64"]}`;
        props.onClickFetch(pdfBase64);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return <button onClick={clickHandler}>Botao</button>;
};

export default SideBar;
