import { useState, useRef } from "react";
import { GiNotebook } from "react-icons/gi";
import getCurrentDate from "../Helpers/helpers";
import classes from "../css/styles.module.css";

const SideBar = props => {
  const [isFetching, setIsFetching] = useState(false);
  const selectedDateRef = useRef();

  // const url =
  //   "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getUltimaFolhaPonto";

  const clickHandler = async e => {
    e.preventDefault();
    const dateString = selectedDateRef.current.value;
    const ano = dateString.split("-")[0];
    const mes = dateString.split("-")[1];
    const url1 = `https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPontoAnoMes?ano=${ano}&mes=${mes}`;

    try {
      setIsFetching(true);
      const response = await fetch(url1);
      const data = await response.json();
      setIsFetching(false);
      console.log(data["data"]);
      props.onClickFetch(data["pdf_base64"]);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(isFetching);
  return (
    <aside className={classes["aside"]}>
      <header className={classes["aside-header"]}>
        <span className={classes["aside-header--logo"]}>
          <GiNotebook />
        </span>
        <h1 className={classes["aside-header--text"]}>Frequência Fácil</h1>
      </header>
      <main className={classes["aside-main"]}>
        <form onSubmit={clickHandler} className={classes["aside-main-form"]}>
          <fieldset className={classes["aside-main-fieldset"]}>
            <legend>
              <label htmlFor="input-date">Selecione o Período(mês/ano)</label>
            </legend>
            <input
              className={classes["aside-main-fieldset--input"]}
              ref={selectedDateRef}
              type="month"
              id="input-date"
              defaultValue={`${getCurrentDate().year}-${
                getCurrentDate().month
              }`}
              required
            />
            <button type="submit">Carregar Frequência</button>
          </fieldset>
        </form>
        <button type="button">Preencher</button>
        <button onClick={props.onClickGerar} type="button">
          Gerar
        </button>
      </main>
      <footer className={classes["aside-footer"]}>Footer</footer>
    </aside>
  );
};

export default SideBar;
