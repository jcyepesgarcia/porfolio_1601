import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import java from "../assets/java.png";
import spring from "../assets/spring_boot.png";
import mysql from "../assets/mysql.png";

function Experience() {
  const stackList = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImg,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: mysql,
      title: "Mysql",
      style: "shadow-amber-500",
    },
  ];

  return (
    <section
      name="stack"
      className="pt-28 xl:pt-0 lg:h-screen w-full bg-gradient-to-b from-gray-800 to-black md:px-5"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Stacks de Desarrollo
          </h2>
          <p className="sm:text-xl mb-8 text-gray-400 mt-6">
            Estas son las tecnologías con las que he trabajado
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-3 sm:px-0">
          {stackList.map((stack) => (
            <div
              key={stack.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${stack.style}`}
            >
              <img src={stack.src} alt={stack.title} className="w-20 mx-auto" />
              <p className="mt-4">{stack.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
