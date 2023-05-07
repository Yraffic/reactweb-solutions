import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './context/AppContext';
import './index.scss';
import { Home } from './pages/home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppContextProvider>
      <Home />
  </AppContextProvider>
);
