import React, { FC } from "react";
import styles from "./index.module.css";
import { useDragControls } from "framer-motion";
import { Box } from "../../../UI/Box";

type propsType = {};
export const Example2_3: FC<propsType> = (props) => {
  const dragControls = useDragControls();

  function startDrag(event: any) {
    dragControls.start(event, { snapToCursor: true });
  }

  return (
    <>
      <div onPointerDown={startDrag} className={styles.zmih}>
        Жмых
      </div>
      <Box drag dragControls={dragControls} />
    </>
  );
};
