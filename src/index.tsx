import ReactDOM from 'react-dom/client';
import './index.scss';
import { Home } from './pages/home';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <Home />
  </ChakraProvider>

);
