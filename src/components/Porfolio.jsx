import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

function Porfolio() {
  const porfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <section
      name="porfolio"
      className="pt-28 xl:pt-0 bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen md:px-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <header className="mb-16">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Porfolio
          </h2>
          <p className="sm:text-xl mt-6 text-gray-400">Mira algunos de mis trabajos aquí</p>
        </header>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-3 sm:px-0">
          {porfolios.map((porfolio) => (
            <article key={porfolio.id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
              <img src={porfolio.src} alt="" className="rounded-t-lg" />
              <div className="flex justify-center items-center py-5">
                <a className="block text-center cursor-pointer w-1/2 duration-200 hover:scale-105" href="https://github.com/jcyepesgarcia" target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a className="block text-center cursor-pointer w-1/2 duration-200 hover:scale-105" href="https://github.com/jcyepesgarcia" target="_blank" rel="noreferrer">
                  Código
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
