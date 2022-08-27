import classes from "./IframePDF.module.css";
import React from "react";

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
