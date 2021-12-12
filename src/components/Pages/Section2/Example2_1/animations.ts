import { Variants } from "framer-motion";

export const example2_1BoxVariant: Variants = {
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: {
    x: -300,
  },
};

export const example2_1MiniBoxVariant: Variants = {
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: {
    x: -30,
    opacity: 0,
  },
};
