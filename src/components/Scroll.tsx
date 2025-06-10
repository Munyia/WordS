import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Use setTimeout to allow the new page to mount before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }, [pathname]);

  return null;
};

export default Scroll;
