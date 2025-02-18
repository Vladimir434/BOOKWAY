/* eslint-disable react/prop-types */
import styles from "./Text.module.scss";

const Text = ({ children, size = "base", weight = "normal", className = "" }) => {
  return (
    <p className={`${styles[`text-${size}`]} ${styles[`font-${weight}`]} ${className}`}>
      {children}
    </p>
  );
};

export default Text;
