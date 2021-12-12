import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useAnimationInView = (
  threshold: number | number[] | undefined = 0
) => {
  const controls = useAnimation();

  const { ref, inView, entry } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return { controls, ref, inView, entry };
};
