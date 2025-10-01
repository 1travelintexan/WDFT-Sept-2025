import axios from "axios";
import { useEffect, useState } from "react";

export const RandomQuotePage = () => {
  const [oneQuote, setOneQuote] = useState();

  // use fetch or axios inside of a useEffect to go get the quote from the API
  useEffect(() => {
    const getRandomQuote = async () => {
      try {
        const { data } = await axios("https://dummyjson.com/quotes/random");
        console.log(data);
        setOneQuote(data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomQuote();
  }, []);
  //store the quote in a state and the display the state on the page
  return (
    <div>
      <h2>Random Quote:</h2>
      <div className="quote-card">
        <h4>-{oneQuote?.quote}</h4>
        <h4>Author: {oneQuote?.author}</h4>
      </div>
    </div>
  );
};
