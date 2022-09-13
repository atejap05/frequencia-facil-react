import { useState, useRef } from "react";
import { GiNotebook } from "react-icons/gi";
import getCurrentDate from "../Helpers/helpers";
import classes from "../css/styles.module.css";

const SideBar = props => {
  const [isFetching, setIsFetching] = useState(false);
  const selectedDateRef = useRef();

  const getUrlToFetch = () => {
    const dateString = selectedDateRef.current.value;
    const ano = dateString.split("-")[0];
    const mes = dateString.split("-")[1];
    return `https://localhost:8443/ctx/run/frequencia_facil/getFolhaPontoAnoMes?ano=${ano}&mes=${mes}`;
  };

  const onClickCarregarHandler = async e => {
    e.preventDefault();
    const url = getUrlToFetch();
    try {
      setIsFetching(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsFetching(false);
      props.onClickFetch(data);
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
        <form
          onSubmit={onClickCarregarHandler}
          className={classes["aside-main-form"]}
        >
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
        <button onClick={props.onClickPreencher} type="button">
          Preencher
        </button>
        <button onClick={props.onClickGerar} type="button">
          Gerar
        </button>
      </main>
      <footer className={classes["aside-footer"]}>Footer</footer>
    </aside>
  );
};

export default SideBar;
