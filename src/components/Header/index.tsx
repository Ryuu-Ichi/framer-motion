import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link to={routes.section1}>S1</Link>
      <Link to={routes.section2.root}>S2</Link>
      <Link to={routes.section3}>S3</Link>
    </div>
  );
};
