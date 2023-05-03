import styles from "./TxtField.module.css";

function TxtField(props) {
  const { type, label } = props;
  return (
    <div>
      <label className={styles.txtLabel}>{label}</label>
      <input className={styles.txtField} type={type} />
    </div>
  );
}

export default TxtField;
