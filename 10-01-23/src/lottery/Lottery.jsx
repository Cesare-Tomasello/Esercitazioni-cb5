import "./Lottery.css";
import React from "react";
import { useState } from "react";

const Lottery = () => {
  const [number, setNumber] = useState([]);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 90);
    setNumber((current) => [...current, randomNum]);
  };

  return (
    <>
      <h1>Lotteria</h1>
      <button
        className={number.length < 6 ? "lotteryBtn" : "lotteryBtn disableBtn"}
        disabled={number.length < 6 ? false : true}
        onClick={handleClick}
      >
        {number.length < 6 ? "Estrai!" : "Ben fatto!"}
      </button>
      <h3>I numeri estratti sono:</h3>
      <div className="container">
        {number.map((num, index) => {
          return (
            <h2 className="number" key={index}>
              {num}
            </h2>
          );
        })}
      </div>
    </>
  );
};

export default Lottery;
