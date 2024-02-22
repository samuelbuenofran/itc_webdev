import styles from "./DateInput.module.css";

function DateInput(props) {
  const { type, label } = props;
  return (
    <div>
      <label className={styles.txtLabel}>{label}</label>
      <input className={styles.dateInput} type={type} />
    </div>
  );
}

export default DateInput;
