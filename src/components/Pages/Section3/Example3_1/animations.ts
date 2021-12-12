import { Variants } from "framer-motion";

export const leftBoxVariants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
    },
    display: "flex",
  },
  hide: {
    x: -250,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

export const rightBoxVariants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
    },
    display: "flex",
  },
  hide: {
    x: 250,
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};

export const testVariants = {
  1556: {
    visible: {},
    hide: {},
  },
  1168: {
    hide: {},
  },
  720: {
    hide: {},
  },
  320: {
    hide: {},
  },
};
