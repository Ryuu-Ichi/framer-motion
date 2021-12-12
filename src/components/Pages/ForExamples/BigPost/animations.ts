import { transition } from "../../Section2/Example2_6/animations";

export const bigPostVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition },
};
