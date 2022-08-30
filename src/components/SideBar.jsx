import { useEffect } from "react";
import classes from "./SideBar.module.css";

const SideBar = props => {
  const url =
    "https://localhost:8443/ctx/run/Frequencia_Facil_Backend/getFolhaPonto";

  const clickHandler = async () => {
    try {
      const response = await fetch(url);
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
          <span className={classes["aside-header--logo"]}>Logo</span> Frequência
          Fácil
        </h1>
      </header>
      <main className={classes["aside-main"]}>
        <input type="month" name="" id="" />
        <button onClick={clickHandler}>Clique</button>
      </main>
      <footer className={classes["aside-footer"]}>Footer</footer>
    </aside>
  );
};

export default SideBar;
