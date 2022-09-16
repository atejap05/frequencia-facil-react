import Modal from "./Modal";
import classes from "../../css/styles.module.css";

const LoadingScreem = () => {
  return (
    <Modal classNameOverlay={classes.loading}>
      <span className={classes["loading__header"]}>
        Buscando Folha de Ponto...
      </span>
      <span className={classes["loading__bar"]}></span>
    </Modal>
  );
};

export default LoadingScreem;
