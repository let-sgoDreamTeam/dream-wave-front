import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing/landing";
import Calculator from "./pages/calculator/calculator";
// import logo from './logo.svg';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/calculator",
        element: <Calculator />
    }
]);

function App() {
  return (
      <>
          <RouterProvider router={router} />
      </>

  );
}

export default App;
