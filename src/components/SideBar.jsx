import { useEffect, useRef } from "react";
import { GiNotebook } from "react-icons/gi";
import classes from "./SideBar.module.css";

const SideBar = props => {
  const selectedDateRef = useRef();

  const url =
    "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getUltimaFolhaPonto";

  const clickHandler = async e => {
    e.preventDefault();
    const dateString = selectedDateRef.current.value;
    const ano = dateString.split("-")[0];
    const mes = dateString.split("-")[1];
    const url1 = `https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPontoAnoMes?ano=${ano}&mes=${mes}`;

    try {
      const response = await fetch(url1);
      const data = await response.json();
      props.onClickFetch(data["pdf_base64"]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <aside className={classes["aside-container"]}>
      <header className={classes["aside-header"]}>
        <h1 className={classes["aside-header--text"]}>
          <span>
            <GiNotebook />
          </span>
          Frequência Fácil
        </h1>
      </header>
      <main className={classes["aside-main"]}>
        <form onSubmit={clickHandler} className={classes["aside-main-form"]}>
          <fieldset>
            <legend>
              <label htmlFor="input-date">Selecione o Período(mês/ano):</label>
            </legend>
            <input
              ref={selectedDateRef}
              type="month"
              id="input-date"
              required
            />
            <button type="submit">Carregar Frequência</button>
          </fieldset>
        </form>
        <button type="button">Preencher</button>
      </main>
      <footer className={classes["aside-footer"]}>Footer</footer>
    </aside>
  );
};

export default SideBar;
