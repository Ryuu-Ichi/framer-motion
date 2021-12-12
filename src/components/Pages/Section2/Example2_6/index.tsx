import React, { FC } from "react";
import styles from "./index.module.css";
import { Box } from "../../../UI/Box";
import { data } from "./data";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";
import { motion } from "framer-motion";
import {
  example2_6BoxVariants,
  example2_6ContainerVariants,
} from "./animations";

type propsType = {};
export const Example2_6: FC<propsType> = (props) => {
  return (
    <motion.div
      variants={example2_6ContainerVariants}
      exit="exit"
      animate="enter"
      initial="initial"
      className={styles.container}
    >
      {data.map(({ label, text }, idx) => (
        <Box variants={example2_6BoxVariants}>
          <p className={styles.label}>{label}</p>
          <p className={styles.text}>{text}</p>
          <Link className={styles.link} to={`${routes.section2.root + idx}`}>
            Go
          </Link>
        </Box>
      ))}
    </motion.div>
  );
};
