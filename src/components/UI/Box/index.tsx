import { motion, MotionProps } from "framer-motion";
import styles from "./index.module.css";
import { AllHTMLAttributes, FC } from "react";
import cn from "classnames";

type PropsType = {} & AllHTMLAttributes<HTMLDivElement> & MotionProps;

export const Box: FC<PropsType> = ({ className, ...props }) => {
  return (
    <motion.div
      {...props}
      className={cn({
        [styles.container]: true,
        [`${className}`]: className,
      })}
    >
      {props.children}
    </motion.div>
  );
};
