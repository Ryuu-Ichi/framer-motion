import styles from "./index.module.css";
import { Example1_1 } from "./Example1_1";
import { Example1_2 } from "./Example1_2";
import { Example1_3 } from "./Example1_3";
import { Example1_4 } from "./Example1_4";
import { Example1_5 } from "./Example1_5";

export const Section1 = () => {
  return (
    <div className={styles.container}>
      <Example1_1 />
      {/*<Example1_2 />*/}
      {/*<Example1_3 />*/}
      {/*<Example1_4 />*/}
      {/*<Example1_5 />*/}
    </div>
  );
};
