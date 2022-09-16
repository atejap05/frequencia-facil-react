import { useState, useRef, useContext } from "react";
import LoadingScreem from "../components/UI/LoadingScreem";
import Button from "../components/UI/Button";
import FolhaContext from "../context/folhaContext.js";
import { GiNotebook } from "react-icons/gi";
import { FaFilePdf } from "react-icons/fa";
import { MdSearch, MdEdit } from "react-icons/md";
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

  return (
    <>
      {isFetching && <LoadingScreem />}
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
                defaultValue={getCurrentDate()}
                required
              />
              <Button className={classes["button--buscar"]} type={"submit"}>
                <span>
                  <MdSearch />
                </span>{" "}
                Buscar
              </Button>
            </fieldset>
          </form>
          <Button
            className={classes["button--gerar"]}
            type={"button"}
            onClick={() => gerarPDF(ctx.folhaData)}
          >
            {" "}
            <span>
              <FaFilePdf />
            </span>{" "}
            Gerar
          </Button>
          <Button
            className={classes["button--preencher"]}
            type={"button"}
            onClick={props.onClickPreencher}
          >
            <span>
              <MdEdit />
            </span>
            Preencher
          </Button>
        </main>
        <footer className={classes["aside-footer"]}>Footer</footer>
      </aside>
    </>
  );
};

export default SideBar;
