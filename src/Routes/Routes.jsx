import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../Layouts/Mainlayout";
import ErrorPages from "../Pages/ErrorPages";
import Favorites from "../Pages/Favorites";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: ErrorPages,
    children: [
      {

        path: '/phone-details/:atikur',
        Component: PhoneDetails,

      },
      {
        path: "/",
        Component: Home,
        loader: () => fetch('phones.json'),

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
