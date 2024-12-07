import React, { useState } from "react";
import styles from "../styles/InputField.module.css";

interface InputFieldProps {
  label: string;
  type: "text" | "password" | "email";
  name: string;
  inputProps: any;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  inputProps,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type === "password" && showPassword ? "text" : type}
          name={name}
          id={name}
         
          className={`custom-input ${styles.input}`}
          {...inputProps}
        />
        {type === "password" && (
          <span
            className={styles.togglePassword}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        )}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default InputField;
