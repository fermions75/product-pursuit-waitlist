import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize("G-9PE4G81LN6");
  }, []);

  return null;
};

export default Analytics;
