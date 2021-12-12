import { Variants } from "framer-motion";

export const example1_3BoxVariant: Variants = {
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    x: -300,
  },
};

export const example1_3MiniBoxVariant = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -30,
    opacity: 0,
  },
};
