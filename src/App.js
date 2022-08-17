import { useEffect, useState } from 'react';
import { HeaderSection } from './components/HeaderSection';
import { InfoSection } from './components/InfoSection';
import { ThemeConfig } from './theme';

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
      {!visible && (
        <InfoSection
          headline={'Framtidens techpartner. Utvecklar appar och hemsidor.'}
        />
      )}
    </ThemeConfig>
  );
};

export default App;
