import { useEffect, useState } from 'react';

import { InfoSection } from './components/InfoSection';
import { Header } from './components/Sections/Header';

import { ThemeConfig } from './theme';
import { constants } from './utils/data/constants';

const App = () => {
  const [visible, isVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      isVisible(false);
    }, 7000);
  }, []);
  return (
    <ThemeConfig>
      <Header />
      {!visible && <InfoSection infoSection={constants.infoSection} />}
    </ThemeConfig>
  );
};

export default App;
