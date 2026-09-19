import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Home from './pages/home';
import MainLayout from "./layouts/maillayout";
import Weather from "./pages/weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "weather",
        element: <Weather />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
