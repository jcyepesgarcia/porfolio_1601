import React from "react";

function Contact() {
  return (
    <section
      name="contacto"
      className="pt-28 xl:pt-0 lg:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white md:px-5"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contacto
          </h2>
          <p className="sm:text-xl mb-8 text-gray-400 mt-6">
            Envíe el siguiente formulario para ponerse en contacto conmigo
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/b9b6663d-c785-47f9-857e-040ba28949e1" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Introduzca su nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Introduzca su email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              id="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Dejame tus comentarios"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Hablemos
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
