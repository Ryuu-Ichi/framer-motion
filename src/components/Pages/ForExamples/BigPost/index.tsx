import React, { FC } from "react";
import styles from "./index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "../../../UI/Box";
import { data } from "../../Section2/Example2_6/data";
import { motion } from "framer-motion";
import { bigPostVariants } from "./animations";

type propsType = {};
export const BigPost: FC<propsType> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={bigPostVariants}
      className={styles.container}
    >
      <p onClick={goBack} className={styles.link}>
        Go Back
      </p>
      <Box className={styles.bigBox}>
        <p className={styles.label}>{id && data[+id].label}</p>
        <p className={styles.text}>{id && data[+id].text}</p>
      </Box>
    </motion.div>
  );
};
