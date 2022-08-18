import { useEffect, useState } from 'react';

import { HeaderSection } from './components/HeaderSection';
import { InfoSection } from './components/InfoSection';
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
      <HeaderSection />
      {!visible && <InfoSection infoSection={constants.infoSection} />}
    </ThemeConfig>
  );
};

export default App;
