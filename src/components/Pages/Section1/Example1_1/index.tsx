import { Box } from "../../../UI/Box";
import { useState } from "react";

export const Example1_1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <Box
      animate={{
        x: isAnimating ? 1000 : 0,
        opacity: isAnimating ? 1 : 0.5,
        rotate: isAnimating ? 180 : 0,
      }}
      initial={{ opacity: 0.1 }}
      transition={{
        type: "spring",
        // duration: 1,
        // bounce: 0,
        // stiffness: 100,
        // damping: 5,
        // mass: 3,
      }}
      onClick={() => setIsAnimating(!isAnimating)}
    />
  );
};
