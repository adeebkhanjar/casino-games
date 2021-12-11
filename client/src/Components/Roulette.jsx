import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router";

const data = [
  {
    option: "34",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "6",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "27",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "13",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "36",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "11",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
  {
    option: "30",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "8",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "23",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
  {
    option: "10",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "5",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
  {
    option: "24",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "16",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "33",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "1",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "20",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "14",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "31",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "9",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "22",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "18",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "29",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
  {
    option: "7",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "28",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "12",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "even",
  },
  {
    option: "35",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
  {
    option: "3",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "26",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "0",
    style: { backgroundColor: "green", textColor: "white" },
    row: "none",
    parity: "none",
  },
  {
    option: "32",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "15",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "19",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "4",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_1",
    parity: "even",
  },
  {
    option: "21",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_3",
    parity: "odd",
  },
  {
    option: "2",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "even",
  },
  {
    option: "25",
    style: { backgroundColor: "red", textColor: "white" },
    row: "3to1_1",
    parity: "odd",
  },
  {
    option: "17",
    style: { backgroundColor: "black", textColor: "white" },
    row: "3to1_2",
    parity: "odd",
  },
]; //eslint-disable-next-line
const sortedData = [...data].sort(
  (a, b) => parseInt(a.option) - parseInt(b.option)
);
const arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function Roulette({ user, rouletteCallBack, fundsCallBack }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [userMoney, setUserMoney] = useState(0);
  const [userBets, setUserBets] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    if (user) setUserMoney(user.money); //eslint-disable-next-line
  }, [user]);
  if (!localStorage.getItem("token")) return navigate("/login");
  const handleSpinClick = () => {
    if (
      Object.values(userBets).reduce((sum = 0, value) => {
        return (sum += value);
      }) > userMoney
    ) {
      return fundsCallBack(true);
    } else {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const handleCheckWin = async () => {
    let prizeMoneyCalc = 0;
    //odd/even check
    if (data[prizeNumber].parity === "even") {
      //even number
      const betOnEven = Object.keys(userBets).find(
        (element) => element === "even"
      );
      if (betOnEven) {
        prizeMoneyCalc += userBets[betOnEven] * 2;
      }
    } else if (data[prizeNumber].parity === "odd") {
      //odd number
      const betOnOdd = Object.keys(userBets).find(
        (element) => element === "odd"
      );
      if (betOnOdd) {
        prizeMoneyCalc += userBets[betOnOdd] * 2;
      }
    }
    //black/red check
    if (data[prizeNumber].style.backgroundColor === "black") {
      //black
      const betOnBlack = Object.keys(userBets).find(
        (element) => element === "black"
      );
      if (betOnBlack) {
        prizeMoneyCalc += userBets[betOnBlack] * 2;
      }
    } else if (data[prizeNumber].style.backgroundColor === "red") {
      //red
      const betOnRed = Object.keys(userBets).find(
        (element) => element === "red"
      );
      if (betOnRed) {
        prizeMoneyCalc += userBets[betOnRed] * 2;
      }
    }
    if (data[prizeNumber].row === "3to1_3") {
      const betOn3to1_3 = Object.keys(userBets).find(
        (element) => element === "3to1_3"
      );
      if (betOn3to1_3) {
        prizeMoneyCalc += userBets[betOn3to1_3] * 3;
      }
    } else if (data[prizeNumber].row === "3to1_2") {
      const betOn3to1_3 = Object.keys(userBets).find(
        (element) => element === "3to1_2"
      );
      if (betOn3to1_3) {
        prizeMoneyCalc += userBets[betOn3to1_3] * 3;
      }
    } else if (data[prizeNumber].row === "3to1_1") {
      const betOn3to1_3 = Object.keys(userBets).find(
        (element) => element === "3to1_1"
      );
      if (betOn3to1_3) {
        prizeMoneyCalc += userBets[betOn3to1_3] * 3;
      }
    }
    if (
      Object.keys(userBets).find(
        (element) => element === data[prizeNumber].option
      )
    ) {
      prizeMoneyCalc += userBets[data[prizeNumber].option] * 35;
    }
    rouletteCallBack(
      prizeMoneyCalc -
        Object.values(userBets).reduce((sum = 0, value) => {
          return (sum += value);
        })
    );
  };

  const handleOnChange = (e) => {
    setUserBets((prevState) => {
      if (e.target.value.length > 0)
        return {
          ...prevState,
          [e.target.name]: parseInt(e.target.value),
        };
      else {
        const prev = { ...prevState };
        delete prev[e.target.name];
        return prev;
      }
    });
  };
  return (
    <div className="game-container">
      <div className="wheel">
        <Wheel
          innerBorderWidth={25}
          innerRadius={12}
          innerBorderColor={"black"}
          radiusLineColor={"goldenrod"}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            handleCheckWin();
          }}
        />
        <button
          className="roulette-btn"
          onClick={Object.keys(userBets).length > 0 ? handleSpinClick : null}
          style={{ marginBottom: "1rem" }}
        >
          SPIN
        </button>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          {arr1.map((_, index) => {
            //eslint-disable-next-line
            if (index === 0) return;
            return (
              <div
                key={index}
                className={`roullete-bet ${
                  data.find((item) => parseInt(item.option) === index * 3).style
                    .backgroundColor
                }`}
              >
                {
                  data.find((item) => parseInt(item.option) === index * 3)
                    .option
                }
                <input
                  style={{ color: "white" }}
                  type="number"
                  name={
                    data.find((item) => parseInt(item.option) === index * 3)
                      .option
                  }
                  min="0"
                  max={userMoney}
                  step={10}
                  onChange={handleOnChange}
                />
              </div>
            );
          })}
          <div className="roullete-bet">
            3to1
            <input
              style={{ color: "white" }}
              type="number"
              name="3to1_3"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {arr1.map((_, index) => {
            //eslint-disable-next-line
            if (index === 0) return;
            return (
              <div
                key={index}
                className={`roullete-bet ${
                  data.find(
                    (item) => parseInt(item.option) === (index - 1) * 3 + 2
                  ).style.backgroundColor
                }`}
              >
                {
                  data.find(
                    (item) => parseInt(item.option) === (index - 1) * 3 + 2
                  ).option
                }
                <input
                  style={{ color: "white" }}
                  type="number"
                  name={
                    data.find(
                      (item) => parseInt(item.option) === (index - 1) * 3 + 2
                    ).option
                  }
                  min="0"
                  max={userMoney}
                  step={10}
                  onChange={handleOnChange}
                />
              </div>
            );
          })}
          <div className="roullete-bet">
            3to1
            <input
              style={{ color: "white" }}
              type="number"
              name="3to1_2"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          {arr1.map((_, index) => {
            //eslint-disable-next-line
            if (index === 0) return;
            return (
              <div
                key={index}
                className={`roullete-bet ${
                  data.find(
                    (item) => parseInt(item.option) === (index - 1) * 3 + 1
                  ).style.backgroundColor
                }`}
              >
                {
                  data.find(
                    (item) => parseInt(item.option) === (index - 1) * 3 + 1
                  ).option
                }
                <input
                  style={{ color: "white" }}
                  type="number"
                  name={
                    data.find(
                      (item) => parseInt(item.option) === (index - 1) * 3 + 1
                    ).option
                  }
                  min="0"
                  max={userMoney}
                  step={10}
                  onChange={handleOnChange}
                />
              </div>
            );
          })}
          <div className="roullete-bet">
            3to1
            <input
              style={{ color: "white" }}
              type="number"
              name="3to1_1"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="roullete-bets-inner">
            EVEN
            <input
              style={{ color: "white" }}
              type="number"
              name="even"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
          <div className="roullete-bets-inner red">
            RED
            <input
              style={{ color: "white" }}
              type="number"
              name="red"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
          <div
            className="roullete-bets-inner"
            style={{ backgroundColor: "green", width: "80px" }}
          >
            0
            <input
              style={{ color: "white" }}
              type="number"
              name="0"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
          <div className="roullete-bets-inner black">
            BLACK
            <input
              style={{ color: "white" }}
              type="number"
              name="black"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
          <div className="roullete-bets-inner">
            ODD
            <input
              style={{ color: "white" }}
              type="number"
              name="odd"
              min="0"
              max={userMoney}
              step={10}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
