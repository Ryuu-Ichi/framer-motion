import React, { FC, useState } from "react";
import styles from "./index.module.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

type propsType = {};
export const ProgressBar: FC<propsType> = (props) => {
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useViewportScroll();

  const progressValue = useTransform(
    scrollYProgress,
    (value) => `${value * 100}%`
  );

  scrollYProgress.onChange((HYU) => {
    setProgress(HYU);
  });

  return (
    <motion.div
      {...props}
      // style={{ width: idx ? `${(idx - 1) * 50}%` : "0%" }}
      style={{ height: progressValue }}
      className={styles.container}
    >
      <span className={styles.span}>{(progress * 100).toFixed(0)}%</span>
    </motion.div>
  );
};
