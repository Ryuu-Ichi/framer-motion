import { Box } from "../../../UI/Box";
import cn from "classnames";
import { useState } from "react";
import styles from "./index.module.css";
import { AnimateSharedLayout } from "framer-motion";
import { colors } from "./data";
import { Circle } from "../../../UI/Circle";

export const Example2_2 = () => {
  const [isBig, setIsBig] = useState(false);
  const [selected, setSelected] = useState(colors[0]);

  return (
    <>
      {/*<Box*/}
      {/*  layout*/}
      {/*  // transition={{ duration: 1 }}*/}
      {/*  // animate={{ opacity: isBig ? 0.5 : 1 }}*/}
      {/*  // transition={{ layout: { duration: 2 } }}*/}
      {/*  onClick={() => setIsBig(!isBig)}*/}
      {/*  className={cn({*/}
      {/*    [styles.Big_box]: isBig,*/}
      {/*  })}*/}
      {/*/>*/}

      <AnimateSharedLayout>
        <ul className={styles.list}>
          {colors.map((color) => (
            <Circle
              key={color}
              color={color}
              isSelected={selected === color}
              onClick={() => setSelected(color)}
            />
          ))}
        </ul>
      </AnimateSharedLayout>
    </>
  );
};
