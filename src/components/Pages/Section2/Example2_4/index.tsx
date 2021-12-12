import React, { FC } from "react";
import styles from "./index.module.css";
import { Box } from "../../../UI/Box";
import {
  useCycle,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

type propsType = {};
export const Example2_4: FC<propsType> = (props) => {
  // const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const input = [-400, 0, 400];
  const output2 = ["-45deg", "0deg", "45deg"];
  const output3 = ["#FF0000FF", "#151148", "#008000"];
  const rotate = useTransform(x, input, output2);
  const background = useTransform(x, input, output3);
  //____________________________

  // const [x, cycleX] = useCycle(0, 500, 500, 0);
  // const [y, cycleY] = useCycle(0, 0, 500, 500);
  //
  // const funct = () => {
  //   cycleX();
  //   cycleY();
  // };
  //_____________________________
  return (
    <Box
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      // @ts-ignore
      style={{ x, rotate, background }}
      className={styles.box}
    />

    // <Box animate={{ x, y }} onTap={() => funct()} />
  );
};
