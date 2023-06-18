import { useState } from "react";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

import skImg from "../assets/sk.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="w-screen h-[80px] z-10 fixed cursor-pointer bg-gradient-to-tr from-blue-800 via-red-800 to-yellow-500 hover:bg-gradient-to-bl ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <a href="/" onClick={handleRefresh}>
            <img
              src={skImg}
              alt="Logo"
              className="w-12 h-12 mr-4 sm:w-20 sm:h-20 "
            />
          </a>
          <ul className="hidden md:flex">
            <li className="text-zinc-300 hover:text-black">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="text-zinc-300 hover:text-black">
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li className="text-zinc-300 hover:text-black">
              <Link to="feature" smooth={true} offset={-50} duration={500}>
                Feature
              </Link>
            </li>

            <li className="text-zinc-300 hover:text-black">
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <BiMenu className="w-5 text-white" />
          ) : (
            <TiDeleteOutline className="w-5 text-white " />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-red-900 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full hover:text-yellow-500">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-yellow-500">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-yellow-500">
          <Link
            onClick={handleClose}
            to="feature"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Feature
          </Link>
        </li>

        <li className="border-b-2 border-zinc-300 w-full hover:text-yellow-500">
          <Link
            onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
