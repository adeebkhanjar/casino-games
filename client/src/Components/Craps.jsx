import React, { useState } from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export default function Craps({
  reactDice,
  user,
  crapsCallBack,
  fundsCallBack,
}) {
  const [number, setNumber] = useState("");
  const [bet, setBet] = useState(0);
  const rollDoneCallback = (num) => {
    if (!number) setNumber(num);
    if (num === number) {
      crapsCallBack(bet);
      setNumber("");
      setBet(0);
    }
    if (num === 7 && number) {
      crapsCallBack(0 - bet);
      setNumber("");
      setBet(0);
    } else if (num === 7 && !number) {
      setNumber("");
    }
  };
  const rollAll = () => {
    if (bet > user.money) return fundsCallBack(true);
    reactDice.rollAll();
  };
  return (
    <div className="game-container ">
      <div>
        <ReactDice
          faceColor="#6a0dad"
          numDice={2}
          rollDone={rollDoneCallback}
          ref={(dice) => (reactDice = dice)}
        />
        {user.money > 0 ? (
          <button className="roulette-btn" onClick={rollAll}>
            Roll
          </button>
        ) : (
          <p>Comeback tomorrow</p>
        )}
        <button className="roulette-btn">Win: {number}</button>
        <button className="roulette-btn">Lose: 7</button>
        <div className="craps-bet">
          Bet{" "}
          <input
            onChange={(e) => {
              setBet(e.target.value);
            }}
            type="number"
            min="0"
            value={bet}
            max={user ? user.money / 3 : 10}
            step={10}
            style={{ width: "100px" }}
          />
        </div>{" "}
        <Popup trigger={<button className="button">How to play</button>} modal>
          <p>1- Roll the dice to diclare the winning number</p>
          <p>2- Place your Bet</p>
          <p>
            3- Keep rolling untill you match the winning number to win x2 your
            bet
          </p>
          <p>4- Don't roll a 7 or you'll lose</p>
        </Popup>
      </div>
    </div>
  );
}
