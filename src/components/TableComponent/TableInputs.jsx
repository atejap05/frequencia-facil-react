import React, { useRef } from "react";
import classes from "../../css/styles.module.css";

export const SetInputTime = props => {
  const inputTimeRef = useRef();
  //TODO: implementar onChange handler func para pegar valor do input
  const onChangeHandler = e => {
    console.log(e.target.parentNode.dataset["dia"]);
    console.log(inputTimeRef);
    console.log(props.name);
  };

  return (
    <input
      ref={inputTimeRef}
      onChange={onChangeHandler}
      type="time"
      defaultValue={props.value}
    />
  );
};

export const SetInputText = props => {
  //TODO: implementar onChange handler func para pegar valor do input
  return <input type="text" defaultValue={props.value} />;
};
