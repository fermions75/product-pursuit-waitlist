import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Create the script element for gtag.js
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-9PE4G81LN6';
    script1.async = true;
    document.head.appendChild(script1);

    // Create the script element for the gtag configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9PE4G81LN6');
    `;
    document.head.appendChild(script2);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default Analytics;