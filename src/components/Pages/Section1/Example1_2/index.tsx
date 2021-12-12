import { Box } from "../../../UI/Box";
import styles from "./index.module.css";
import { useRef } from "react";

export const Example1_2 = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={ref} className={styles.test}>
        <Box
          // whileHover={{ scale: 1.1 }}
          // onHoverStart={(e) => {}}
          //   onHoverEnd={e => {}}
          // whileTap={{ scale: 0.9 }}
          drag
          // drag="x"
          // whileDrag={{ scale: 2 }}
          dragConstraints={ref}
          // dragSnapToCenter - new version
          // dragElastic={0}
          // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        />
      </div>
    </>
  );
};
