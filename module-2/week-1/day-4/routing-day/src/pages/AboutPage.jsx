import { useSearchParams } from "react-router-dom";

export const AboutPage = () => {
  //grabbing queries from the URL
  const [theQueries] = useSearchParams();
  const queryOne = theQueries.get("coolestPetName");
  const queryTwo = theQueries.get("secondCoolest");
  console.log(theQueries, queryOne, queryTwo);
  return <div>AboutPage</div>;
};
