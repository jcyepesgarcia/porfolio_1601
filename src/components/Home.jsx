import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

function Home() {
  return (
    <section
      className="pt-28 xl:pt-0 lg:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:px-5"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center gap-4 h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full gap-4">
          <h1 className="text-4xl  lg:text-7xl font-bold text-white">
            Desarrollador Web en formación
          </h1>
          <p className="text-gray-400 py-4 sm:text-xl text-justify sm:text-start">
            Interés por el desarrollo y diseño de interfaces de usuario con
            React JS, servicios web RESTful en Java/Spring Boot y realización de
            pruebas de calidad de software.
          </p>
          <div>
            <Link
              to="porfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:font-bold"
            >
              Porfolio &nbsp;&nbsp;
              <span className="group-hover:rotate-90 duration-300">
                <BsBoxArrowRight className="" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={heroImage}
            alt="My profile img"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
