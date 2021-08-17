import { useState, useLayoutEffect } from 'react';
import useWindowWidth from './useWindowWidth';

const useMobile = (props) => {
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else if (isMobile) {
      setIsMobile(false);
    }
  }, [width, isMobile]);

  return isMobile;
};

export default useMobile;
