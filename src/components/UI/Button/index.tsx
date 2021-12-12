import { AllHTMLAttributes, FC } from "react";
import styles from "./index.module.css";

type PropsType = {} & AllHTMLAttributes<HTMLDivElement>;

export const Button: FC<PropsType> = (props) => {
  return (
    <div {...props} className={styles.container}>
      {props.children}
    </div>
  );
};
