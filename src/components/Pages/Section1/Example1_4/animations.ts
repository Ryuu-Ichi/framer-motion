import { Variants } from "framer-motion";

export const example1_4BoxVariant: Variants = {
  visible: {
    borderRadius: ["15%", "35%", "50%", "0%", "15%"],
    rotate: [180, 0, -180, 0, 180],
    scale: [1, 0.8, 1],
    transition: {
      duration: 2.5,
      // times: [0, 0.1, 0.2, 0.9, 1],
      // repeat: Infinity,
      // repeatType: "reverse",
      // repeatDelay: 1,
    },
  },
};
