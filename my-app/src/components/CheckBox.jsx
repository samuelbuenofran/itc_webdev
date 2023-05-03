import styles from "./CheckBox.module.css";

function CheckBox(props) {
  const { type, label } = props;
  return (
    <div>
      <label className={styles.txtLabel}>{label}</label>
      <input className={styles.checkBox} type={type} />
    </div>
  );
}

export default CheckBox;
