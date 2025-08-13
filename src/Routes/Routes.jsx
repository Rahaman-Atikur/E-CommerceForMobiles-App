import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import ErrorPages from "../Pages/ErrorPages";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: ErrorPages,
    children: [
      {
        path: "/",
         Component: Home,
        loader:()=> fetch('phones.json'),
       
        children: [
          {
            path: "/favorities",
            Component: Favorites,
          },
          {
            path: "about",
            Component: About,
          },
        ],
      },
    ],
  },
]);
