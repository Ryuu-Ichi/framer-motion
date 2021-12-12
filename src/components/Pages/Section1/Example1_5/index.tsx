import { Box } from "../../../UI/Box";
import { Button } from "../../../UI/Button";
import styles from "./index.module.css";
import { useAnimation } from "framer-motion";
import { example1_5BoxVariant } from "./animations";

const buttons = [
  {
    name: "Move Right",
    variant: "right",
  },
  { name: "Move Left", variant: "left" },
  { name: "Circle", variant: "circle" },
  { name: "Square", variant: "square" },
  { name: "Stop", variant: "stop" },
];

export const Example1_5 = () => {
  const controls = useAnimation();

  const buttonsJSX = buttons.map(({ variant, name }) => (
    <Button
      onClick={() =>
        variant !== "stop" ? controls.start(variant) : controls.stop()
      }
    >
      {name}
    </Button>
  ));

  return (
    <>
      <div className={styles.buttonsWrapper}>{buttonsJSX}</div>
      <Box animate={controls} variants={example1_5BoxVariant} />
    </>
  );
};
