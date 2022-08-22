import { useEffect, useState } from 'react';

import { ThemeConfig } from './theme';
import { Header } from './components/Sections/Header';
import { AnimationHero } from './components/AnimationHero';
import { Navbar } from './components/Navbar';
import data from './assets/data/data.json';
import logo from './assets/logos/luna-icon-inverted-color.svg';

const App = () => {
  const [visible, isVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      isVisible(false);
    }, 7000);
  }, []);
  return (
    <ThemeConfig>
      {visible ? (
        <AnimationHero />
      ) : (
        <>
          <Navbar logo={logo} />
          <Header data={data.header}></Header>
        </>
      )}
    </ThemeConfig>
  );
};

export default App;
