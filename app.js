import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantsMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// Header
//     -Logo
//     -NavItems (Right Side)
//     -Cart
// Body
//     -SearchBar
//     -ResturantList
//         -Resturant Card
//               -Images
//               -Name
//               -Rating
//               -Cuisines
// Footer
//     -Links
//     -Copyright

// Title component for display log

// RestaurantList is JSON Data for displaying cards

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restraunt/:resid", // restaurants
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);