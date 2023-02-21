import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { BaseContext } from "../context/BaseContext";

function NavBar() {
  const [nav, setNav] = useState(false);

  const viewPortWidth = useContext(BaseContext);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "sobre mi" },
    { id: 3, link: "porfolio" },
    { id: 4, link: "stack" },
    { id: 5, link: "contacto" },
  ];

  return (
    <header className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
      {viewPortWidth < 768 ? (
        <Link
          to="home"
          smooth
          duration={500}
          className="text-3xl lg:text-4xl font-signature ml-2 cursor-pointer"
        >
          Juan Carlos Yepes
        </Link>
      ) : (
        <Link
          to="home"
          smooth
          duration={500}
          className="text-3xl lg:text-4xl font-signature ml-2 cursor-pointer"
        >
          Juan Carlos Yepes García
        </Link>
      )}

      <nav>
        {viewPortWidth > 1158 && (
          <ul className="md:flex">
            {links.map(({ id, link }) => (
              <li
                className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 hover:text-white duration-200 lg:text-2xl"
                key={id}
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {viewPortWidth <= 1158 && (
          <div
            className="cursor-pointer pr-4 z-10 text-gray-500"
            onClick={() => setNav(!nav)}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        )}
      </nav>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-800">
          {links.map(({ id, link }) => (
            <li
              className="px-4 cursor-pointer capitalize font-medium text-white py-6 text-5xl font-signature"
              key={id}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default NavBar;
