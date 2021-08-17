import { useState, useLayoutEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth || 0);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useWindowWidth;
