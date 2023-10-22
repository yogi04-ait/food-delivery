import { Link } from "react-router-dom";
import { Title } from "./Title.js";
import { useState } from "react";
import { Link } from "react-router-dom";
//  Header component  for header section: Logo nav items

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className=" nav-items flex justify-between border-b border-custom-gray shadow-md sticky top-0 mb-5 z-10 bg-white w-full">
      <Title />
      <div>
        <ul className="flex p-5 pt-11 flex-row list-none gap-5 text-[15px] font-medium">
          <Link to="/" className=" no-underline ">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <div className="border-none bg-transparent text-[15px] font-medium transform transition-all duration-200 hover:scale-110 hover:cursor-pointer">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
