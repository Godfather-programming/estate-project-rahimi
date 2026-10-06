import styles from "@/elements/SigninInput.module.scss";

function SigninInput({ label, type, name, value, changeHandler }) {
  return (
    <div className={styles.information}>
      <label htmlFor={name}> {label}: </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default SigninInput;