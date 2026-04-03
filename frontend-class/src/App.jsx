import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Technologies from "./components/Technologies";
import Java from "./components/Java";
import Vue from "./components/Vue";
import Node from './components/Node'
function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              index:true,
              path: "java",
              element: <Java />,
            },
            {
              path: "node",
              element: <Node />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={routerObj} />;
}

export default App;
