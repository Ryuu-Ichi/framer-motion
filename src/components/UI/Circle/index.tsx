import React, { AllHTMLAttributes, FC } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

type propsType = {
  color: string;
  isSelected: boolean;
} & AllHTMLAttributes<any>;

export const Circle: FC<propsType> = ({ color, isSelected, onClick }) => {
  return (
    <li
      className={styles.item}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {isSelected && (
        <motion.div
          layoutId="outline"
          className={styles.outline}
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        />
      )}
    </li>
  );
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
