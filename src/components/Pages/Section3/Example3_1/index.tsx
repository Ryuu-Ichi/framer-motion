import React, { FC } from "react";
import styles from "./index.module.css";
import { Box } from "../../../UI/Box";
import { useAnimationInView } from "../../../../hooks/useAnimationInView";
import { motion } from "framer-motion";
import { leftBoxVariants, rightBoxVariants, testVariants } from "./animations";
import { useAnimations } from "../../../../hooks/useAnimations";

type propsType = {};
export const Example3_1: FC<propsType> = (props) => {
  const test = useAnimations(testVariants);
  const { ref, controls } = useAnimationInView(1);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.content}
        animate={controls}
        initial="hide"
        ref={ref}
      >
        <Box variants={leftBoxVariants}>ANIME</Box>
        <Box variants={rightBoxVariants}>ISKUSSTVO</Box>
      </motion.div>
    </div>
  );
};
