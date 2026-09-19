import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './App.css'
import Home from './pages/home';
import MainLayout from "./layouts/maillayout";
import Weather from "./pages/weather";

const router = createHashRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, Component: Home},
      {path: "weather", Component: Weather},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
