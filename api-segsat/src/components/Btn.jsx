import styles from "./Btn.module.css";

// // The code below will set up a new button component with the specified stylesheet and label.

function Btn(props) {
  const { type, label } = props;
  return (
    <button className={styles.btn} type={type}>
      {label}
    </button>
  );
}

export default Btn;
