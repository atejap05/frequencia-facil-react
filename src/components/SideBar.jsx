import { useState, useRef, useContext } from "react";
import FolhaContext from "../context/folhaContext.js";
import { GiNotebook } from "react-icons/gi";
import { getCurrentDate, getUrlToFetch } from "../Helpers/helpers";
import classes from "../css/styles.module.css";
import gerarPDF from "../Helpers/pdfMake/geraPDF";

const SideBar = props => {
  const ctx = useContext(FolhaContext);
  const [isFetching, setIsFetching] = useState(false);
  const selectedDateRef = useRef();

  /**** ROTINA FETCH DADOS DA FOLHA ****/
  const onClickCarregarHandler = async e => {
    e.preventDefault();
    setIsFetching(true);
    const selectedDateString = selectedDateRef.current.value;
    const url = getUrlToFetch(selectedDateString);
    try {
      const response = await fetch(url);
      const data = await response.json();
      props.onClickFetch(data);
      setIsFetching(false);
    } catch (e) {
      //TODO: implementar modal de erro ao fazer o fetch
      console.log(e);
      setIsFetching(false);
    }
  };

  //TODO: Implementar onSalvar || onGerar
  //TODO: implementar loading screen
  console.log(isFetching);

  /**** ROTINA GERAR PDF ****/
  const gerarPdfHandler = () => {
    console.log(ctx.folhaData);
    gerarPDF(ctx.folhaData);
  };

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
        <button onClick={gerarPdfHandler} type="button">
          Gerar
        </button>
      </main>
      <footer className={classes["aside-footer"]}>Footer</footer>
    </aside>
  );
};

export default SideBar;
