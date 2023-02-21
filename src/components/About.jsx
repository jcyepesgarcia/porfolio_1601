import React from "react";

function About() {
  return (
    <section
      name="sobre mi"
      className="pt-28 xl:pt-0 lg:h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white text-justify md:px-5"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-16">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Acerca de mi</h2>
        </div>
        <p className="sm:text-xl mb-8 text-gray-400">
          Soy desarrollador web en formación con interés en diseño de interfaces
          de usuario en React, creación de servicios web RESTful en Java (Spring
          Boot), y realización de planes y/o pruebas de calidad de software.
          Busco una oportunidad de primer empleo con la cual adquirir
          experiencia en la creación de soluciones tecnológicas bajo este stack,
          pero siempre estaré abierto a desarrollar nuevas competencias y
          habilidades técnicas.
        </p>
        <p className="sm:text-xl text-gray-400">
          Por 3 años he trabajo en equipo bajo metodología de trabajo por
          objetivos, desarrollando actividades de análisis de información,
          documentación, relacionamiento entre áreas y asesoría a clientes
          internos y externos.
        </p>
      </div>
    </section>
  );
}

export default About;
