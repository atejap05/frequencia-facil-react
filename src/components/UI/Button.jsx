import classes from "../../css/styles.module.css";

const Button = props => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      {props.title}
      {props.children}
    </button>
  );
};

export default Button;
