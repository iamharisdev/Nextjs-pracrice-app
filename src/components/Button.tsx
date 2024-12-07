import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = "button", disabled, children }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
