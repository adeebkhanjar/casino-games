import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const data = [
  { option: "x20", style: { backgroundColor: "red", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x5", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x10", style: { backgroundColor: "purple", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x5", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x5", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x10", style: { backgroundColor: "purple", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x5", style: { backgroundColor: "blue", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
  { option: "x3", style: { backgroundColor: "green", textColor: "black" } },
  { option: "x1", style: { backgroundColor: "yellow", textColor: "black" } },
];

export default function TheWheel({ user, WheelCallBack, fundsCallBack }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [one, setXone] = useState(0);
  const [three, setXthree] = useState(0);
  const [five, setXfive] = useState(0);
  const [ten, setXten] = useState(0);
  const [twenty, setXtwenty] = useState(0);
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) return navigate("/login");
  const handleSpinClick = () => {
    if (one + three + five + ten + twenty > user.money)
      return fundsCallBack(true);
    if (one + three + five + ten + twenty > 0) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const handleCheckWin = async () => {
    switch (data[prizeNumber].option) {
      case "x1":
        WheelCallBack(one - three - five - ten - twenty);

        break;
      case "x3":
        WheelCallBack(three * 3 - one - five - ten - twenty);
        break;
      case "x5":
        WheelCallBack(five * 5 - one - three - ten - twenty);
        break;
      case "x10":
        WheelCallBack(ten * 10 - one - three - five - twenty);
        break;
      case "x20":
        WheelCallBack(twenty * 20 - one - three - five - ten);
        break;

      default:
        break;
    }
  };
  return (
    <div className="game-container">
      <div className="wheel">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            handleCheckWin();
          }}
        />
        {user.money > 0 ? (
          <button className="roulette-btn" onClick={handleSpinClick}>
            SPIN
          </button>
        ) : (
          <p>Comeback tomorrow</p>
        )}
      </div>
      <div>
        <div className="wheel-bets">
          <div>
            Bet x1
            <input
              onChange={(e) => setXone(e.target.value)}
              type="number"
              min="0"
              max={user ? user.money / 5 : 10}
              step={10}
            />
          </div>
          <div>
            Bet x3
            <input
              onChange={(e) => setXthree(e.target.value)}
              type="number"
              min="0"
              max={user ? user.money / 5 : 10}
              step={10}
            />{" "}
          </div>
          <div>
            {" "}
            Bet x5
            <input
              onChange={(e) => setXfive(e.target.value)}
              type="number"
              min="0"
              max={user ? user.money / 5 : 10}
              step={10}
            />{" "}
          </div>
          <div>
            Bet x10{" "}
            <input
              onChange={(e) => setXten(e.target.value)}
              type="number"
              min="0"
              max={user ? user.money / 5 : 10}
              step={10}
            />{" "}
          </div>
          <div>
            Bet x20{" "}
            <input
              onChange={(e) => setXtwenty(e.target.value)}
              type="number"
              min="0"
              max={user ? user.money / 5 : 10}
              step={10}
            />{" "}
          </div>{" "}
        </div>
        <Popup trigger={<button className="button">How to play</button>} modal>
          <p>1- Place your bet(you can bet on multiple)</p>
          <p>2- If it lands on a color that you placed a bet on,</p>
          <p> your bet will be multiplied by the number on the color</p>
          <p>3- All other bets will be lost</p>
        </Popup>
      </div>{" "}
    </div>
  );
}
