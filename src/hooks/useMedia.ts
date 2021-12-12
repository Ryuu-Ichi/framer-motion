import React, { useContext, useEffect, useState } from 'react';

var timeoutID = 0;
export const useMedia = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const setWidthHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWidthHandler);
  }, []);

  return { width };
};

export const UseMediaContext = React.createContext<{
  width: number;
}>({
  width: window.innerWidth,
});

export const useMediaContext = () => useContext(UseMediaContext);
