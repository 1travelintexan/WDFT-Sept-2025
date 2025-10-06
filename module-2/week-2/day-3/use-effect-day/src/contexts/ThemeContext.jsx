import { createContext, useState } from "react";

//first create a context
const ThemeContext = createContext();

//second is to make the 'Wrapper'
const ThemeWrapper = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ name: "Ragnar", theme, setTheme, age: 5 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeWrapper };
