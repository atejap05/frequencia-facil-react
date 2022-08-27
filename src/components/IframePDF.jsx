import React from "react";

const IframePDF = props => {
  return <iframe src={props.pdfBuffer} title="folha-de-ponto"></iframe>;
};

export default IframePDF;
