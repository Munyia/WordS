import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Trigger on every route change

  return null; // This component doesn't render anything
};

export default Scroll;
