import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const HomePage = () => {
  //on the pages when you want the data, you need to 'useContext'
  const { theme, name } = useContext(ThemeContext);
  console.log(
    "here is the data from the context",
    theme,
    "and the name is ",
    name
  );

  return <div>HomePage</div>;
};
