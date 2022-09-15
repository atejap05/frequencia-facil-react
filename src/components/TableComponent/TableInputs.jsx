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

    ctx.bodyData[+dia - 1][inputName] = value;

    console.log(ctx.bodyData);
  };

  //TODO: Implementar onSalvar || onGerar

  // console.log(state);

  const inputType =
    props.type === "time" ? (
      <input
        type="time"
        ref={inputRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    ) : (
      <input
        type="text"
        ref={inputRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    );

  return inputType;
};
