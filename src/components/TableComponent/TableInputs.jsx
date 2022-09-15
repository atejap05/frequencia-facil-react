import React, { useRef, useContext } from "react";
import FolhaContext from "../../context/folhaContext";
import classes from "../../css/styles.module.css";

export const SetInput = props => {
  const ctx = useContext(FolhaContext);
  const inputRef = useRef();

  const onChangeHandler = e => {
    const dia = e.target.parentNode.dataset["dia"];
    const value = inputRef.current.value;
    const inputName = props.name;
    // atualiza contexto
    ctx.folhaData.body[+dia - 1][inputName] = value;
  };

  const inputType =
    props.type === "time" ? (
      <input
        className={classes["input-time"]}
        type="time"
        ref={inputRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    ) : (
      <input
        type="text"
        className={classes["input-text"]}
        ref={inputRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    );

  return inputType;
};
