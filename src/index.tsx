import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './context/AppContext';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppContextProvider>
       <RouterProvider router={router}/>
    </AppContextProvider>
);
