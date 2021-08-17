import { useState, useLayoutEffect } from 'react';

let defaultWidth = 1920;

if (typeof window !== 'undefined') {
  defaultWidth = window.innerWidth;
}

const useWindowWidth = () => {
  const [width, setWidth] = useState(defaultWidth);

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
