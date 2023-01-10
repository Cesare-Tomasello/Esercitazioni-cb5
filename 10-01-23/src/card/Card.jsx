import "./Card.css";
import React from "react";
import { useEffect, useState } from "react";

function Card() {
  const URL = "https://random-data-api.com/api/v2/beers";

  const [randomBeer, setRandomBeer] = useState("");

  const getBeers = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((randomBeer) => {
        setRandomBeer(randomBeer);
        console.log(randomBeer);
      });

    // NON SO PERCHÈ FA LA FETCH 2 VOLTE
  };

  useEffect(() => getBeers(), []);

  return (
    <div className="beerContainer">
      <h2>Beer: {randomBeer.name}</h2>
      <h3>Brand: {randomBeer.brand}</h3>
      <p>Alcohol percentage: {randomBeer.alcohol}</p>
      <h4>Beer type: {randomBeer.style}</h4>
    </div>
  );
}

export default Card;
