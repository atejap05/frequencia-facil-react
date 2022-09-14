import React, { useRef, useReducer } from "react";
import classes from "../../css/styles.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "entradaManha":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        entradaManha: action.payload.value,
      };
      const newInfo = state[action.payload.dia];
      return { ...state, newInfo };

    case "saidaManha":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        saidaManha: action.payload.value,
      };
      return { ...state };
    case "entradaTarde":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        entradaTarde: action.payload.value,
      };
      return { ...state };
    case "saidaTarde":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        saidaTarde: action.payload.value,
      };
      return { ...state };
    case "assinaturaOcorrencia":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        assinaturaOcorrencia: action.payload.value,
      };
      return { ...state };
    case "horas":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        horas: action.payload.value,
      };
      return { ...state };
    case "compensacao":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        compensacao: action.payload.value,
      };
      return { ...state };
    case "abono":
      state[action.payload.dia] = {
        ...state[action.payload.dia],
        abono: action.payload.value,
      };
      return { ...state };

    default:
      return state;
  }
};

export const SetInput = props => {
  //TODO: Tentar alimentar o initial data body que foi passado para a tabela
  const [state, dispatch] = useReducer(reducer, {});
  const inputTimeRef = useRef();

  const onChangeHandler = e => {
    const dia = e.target.parentNode.dataset["dia"];
    const value = inputTimeRef.current.value;
    const inputName = props.name;
    dispatch({ type: inputName, payload: { dia: dia, value: value } });
  };

  console.log(state);

  const inputType =
    props.type === "time" ? (
      <input
        type="time"
        ref={inputTimeRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    ) : (
      <input
        type="text"
        ref={inputTimeRef}
        onChange={onChangeHandler}
        defaultValue={props.value}
      />
    );

  return inputType;
};
