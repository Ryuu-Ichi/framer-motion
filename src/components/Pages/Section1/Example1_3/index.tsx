import { Box } from "../../../UI/Box";
import styles from "./index.module.css";
import { example1_3BoxVariant, example1_3MiniBoxVariant } from "./animations";

enum VariantNames {
  hidden = "hidden",
  visible = "visible",
}

export const Example1_3 = () => {
  const miniBoxesJSX = [1, 2, 3].map((_) => (
    <Box variants={example1_3MiniBoxVariant} className={styles.miniBox} />
  ));

  return (
    <Box
      variants={example1_3BoxVariant}
      animate={VariantNames.visible}
      // initial={example1_3BoxVariant.hidden}
      initial={VariantNames.hidden}
    >
      {miniBoxesJSX}
    </Box>
  );
};
