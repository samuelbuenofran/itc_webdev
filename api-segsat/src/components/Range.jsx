import styles from "./Range.module.css";

function Range(props) {
  const { type, label } = props;
  return (
    <div>
      <label className={styles.txtLabel}>{label}</label>
      <input className={styles.range} type={type} />
    </div>
  );
}

export default Range;
