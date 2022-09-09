import React from "react";
import classes from "../css/styles.module.css";

const IframePDF = props => {
  return (
    <iframe
      className={classes.iframe}
      src={props.src}
      title="folha-de-ponto"
    ></iframe>
  );
};

export default IframePDF;
