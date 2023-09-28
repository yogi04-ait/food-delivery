import React, { Component, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
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
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
