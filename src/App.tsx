import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing/landing";
import Calculator from "./pages/calculator/calculator";
import Music from "./pages/music/music";
import IndexPage from "./pages/index-page";
// import logo from './logo.svg';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/page",
        element: <IndexPage />,
        children: [
            {
                path: "calculator",
                element: <Calculator />
            },
            {
                path: "music",
                element: <Music />
            }
        ]
    },

], {
    basename: process.env.PUBLIC_URL
});

function App() {
  return (
      <>
          <RouterProvider router={router}/>
      </>

  );
}

export default App;
