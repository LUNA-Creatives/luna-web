import { useState, useEffect } from 'react';

import { Animation } from '../Animation';
import { Navbar } from '../Navbar';

export const HeaderSection = () => {
  const [visible, isVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      isVisible(false);
    }, 7000);
  }, []);
  return visible ? <Animation /> : <Navbar />;
};
