import styles from "./index.module.css";
import { Box } from "../../../UI/Box";
import { example2_1BoxVariant, example2_1MiniBoxVariant } from "./animations";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

enum VariantNames {
  hidden = "hidden",
  visible = "visible",
}

export const Example2_1 = () => {
  // const controls = useAnimation();
  //
  // useEffect(() => {
  //   controls.start((i) => ({
  //     opacity: 1,
  //     x: 0,
  //     transition: { delay: i * 0.3 },
  //   }));
  // }, []);

  const miniBoxesJSX = [3, 1, 2].map((number) => (
    <Box
      // custom={{ number, test: "test" }}
      custom={number}
      variants={example2_1MiniBoxVariant}
      className={styles.miniBox}
      // animate={controls}
      // initial={VariantNames.hidden}
    />
  ));

  return (
    <Box
      variants={example2_1BoxVariant}
      animate={VariantNames.visible}
      initial={VariantNames.hidden}
    >
      {miniBoxesJSX}
    </Box>
  );
};
