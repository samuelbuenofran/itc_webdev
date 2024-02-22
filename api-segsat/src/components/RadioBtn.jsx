import styles from "./RadioBtn.module.css";

function RadioBtn(props) {
  const { type, label } = props;
  return (
    <div>
      <label className={styles.txtLabel}>{label}</label>
      <input className={styles.radioBtn} type={type} />
    </div>
  );
}

export default RadioBtn;
