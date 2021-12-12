import { Variants } from "framer-motion";

export const example1_5BoxVariant: Variants = {
  right: {
    x: 1000,
    transition: {
      duration: 2,
    },
  },
  left: {
    x: 0,
    transition: {
      duration: 2,
    },
  },
  circle: {
    borderRadius: "50%",
    transition: {
      duration: 1,
    },
  },
  square: {
    borderRadius: 0,
    transition: {
      duration: 1,
    },
  },
  stop: {},
};
