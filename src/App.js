import { useEffect } from 'react';
import { ThemeConfig } from './theme/ThemeConfig';
import { Routing } from './routing';
import { useStore } from './state/GlobalState';
import { Loader } from './components/Loader';

const App = () => {
  const loader = useStore((state) => state.isLoading);
  const updateLoader = useStore((state) => state.updateLoader);

  useEffect(() => {
    setTimeout(() => {
      updateLoader(false);
    }, 6000);
  });
  return <ThemeConfig>{loader ? <Loader /> : <Routing />}</ThemeConfig>;
};

export default App;
