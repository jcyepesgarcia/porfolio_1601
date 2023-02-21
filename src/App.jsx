import React from "react";
import About from "./components/About";
import Stack from "./components/Stack";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import { BaseContextProvider } from "./context/BaseContext";

function App() {
  return (
    <BaseContextProvider>
      <NavBar />
      <main>
        <Home />
        <SocialLinks />
        <About />
        <Porfolio />
        <Stack />
        <Contact />
      </main>
    </BaseContextProvider>
  );
}

export default App;
