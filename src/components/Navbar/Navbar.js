import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import logo from "./../../assets/images/peerlist-logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-orange-mist fixed top-0 right-0 left-0">
      <div className="custome-container flex justify-between items-center">
        {/* nav menu */}
        <div className="flex items-center py-2 lg:py-3 space-x-4">
          <div>
            <Link to="/">
              <img className="w-36" src={logo} alt="Brnad logo" />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-4">
              <li className="italic">for</li>
              <li>
                <Link>Indeviduals</Link>
              </li>
              <li>
                <Link>Recruiters</Link>
              </li>
              <li>|</li>
              <li>
                <Link>Find Jobs</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* nav buttons */}
        <div>
          <button className="flex items-center gap-2 lg:hidden">
            <HiOutlineMenuAlt4 />
            <span>Menu</span>
          </button>
          <div className="hidden lg:flex items-center space-x-4">
            <Link>
              <button>Login</button>
            </Link>
            <Link>
              <button>Join Peerlist</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
