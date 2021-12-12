import React, { FC } from "react";
import styles from "./index.module.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Box } from "../../../UI/Box";
import { ProgressBar } from "../../../UI/ProgressBar";

type propsType = {};
export const Example2_5: FC<propsType> = (props) => {
  const { scrollY } = useViewportScroll();
  const playY = useTransform(scrollY, (value) => value * 0.7);
  const playY2 = useTransform(scrollY, (value) => value * 0.2);
  const playY3 = useTransform(scrollY, (value) => -value * 0.4);
  const playX = useTransform(scrollY, (value) => value * 0.4);

  return (
    <motion.div className={styles.container}>
      <Box style={{ y: playY }} className={styles.box} />
      <Box style={{ y: playY2 }} className={styles.box2} />
      <Box style={{ y: playY3 }} className={styles.box3} />
      <Box style={{ x: playX }} className={styles.box4} />

      <ProgressBar />
    </motion.div>
  );
};
