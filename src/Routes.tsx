import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Success } from "./pages/success";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/sucesso',
      element: <Success />
    }
  ])