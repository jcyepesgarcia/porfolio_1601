import React, { createContext, useEffect, useState } from "react";

const BaseContext = createContext();

function BaseContextProvider({ children }) {
  const [viewPortWidth, setviewPortWidth] = useState(window.innerWidth);

  function detectViewPortWidth() {
    setviewPortWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", detectViewPortWidth);
    return () => {
      window.removeEventListener("resize", detectViewPortWidth);
    };
  }, [viewPortWidth]);

  return (
    <BaseContext.Provider value={viewPortWidth}>
      {children}
    </BaseContext.Provider>
  );
}

export { BaseContext, BaseContextProvider };
