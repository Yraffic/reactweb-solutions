import { ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Home } from './pages/home';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './context/AppContext';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppContextProvider>
    <ChakraProvider>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Home />
    </ChakraProvider>
  </AppContextProvider>
);
