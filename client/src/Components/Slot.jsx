import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const reel = [
  "bar",
  "bell",
  "cherry",
  "coin",
  "crown",
  "diamond",
  "dices",
  "grapes",
  "horseshoe",
  "seven",
  "strawberry",
  "leaf",
  "collector",
];
export default function Slot({ user, slotCallBack, fundsCallBack }) {
  const [btn, setBtn] = useState(true);
  const [bet, setBet] = useState(0);
  const [temp, setTemp] = useState(true);
  const [slot1, setSlot1] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot2, setSlot2] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot3, setSlot3] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot4, setSlot4] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot5, setSlot5] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot6, setSlot6] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot7, setSlot7] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot8, setSlot8] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const [slot9, setSlot9] = useState(
    reel[Math.floor(Math.random() * reel.length)]
  );
  const slotArray = [
    slot1,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6,
    slot7,
    slot8,
    slot9,
  ];
  useEffect(() => {
    if (!bet > 0) return;
    let collectorNumber = slotArray
      ?.filter((slot) => slot === "collector")
      ?.map((slot) => 2)
      ?.reduce((prev, current) => prev * current, 1);
    let diamondArray = slotArray?.filter((slot) => slot === "diamond");
    if (
      (slot4 === slot5 && slot4 === slot6) ||
      (slot1 === slot5 && slot1 === slot9) ||
      (slot3 === slot5 && slot1 === slot7) ||
      (slot2 === slot5 && slot2 === slot8)
    ) {
      switch (slot5) {
        case "diamond":
          slotCallBack(bet * 1000);
          break;
        case "seven":
          slotCallBack(bet * 100);
          break;
        case "crown":
          slotCallBack(bet * 50);
          break;
        case "coin":
          slotCallBack(bet * 10);
          break;
        default:
          slotCallBack(bet * 5);
          break;
      }
    }
    if (
      (slot1 === slot2 && slot1 === slot3) ||
      (slot1 === slot4 && slot1 === slot7)
    ) {
      switch (slot1) {
        case "diamond":
          slotCallBack(bet * 1000);
          break;
        case "seven":
          slotCallBack(bet * 100);
          break;
        case "crown":
          slotCallBack(bet * 50);
          break;
        case "coin":
          slotCallBack(bet * 10);
          break;
        default:
          slotCallBack(bet * 5);
          break;
      }
    }
    if (
      (slot7 === slot8 && slot7 === slot9) ||
      (slot3 === slot6 && slot3 === slot9)
    ) {
      switch (slot9) {
        case "diamond":
          slotCallBack(bet * 1000);
          break;
        case "seven":
          slotCallBack(bet * 100);
          break;
        case "crown":
          slotCallBack(bet * 50);
          break;
        case "coin":
          slotCallBack(bet * 10);
          break;
        default:
          slotCallBack(bet * 5);
          break;
      }
    }
    if (diamondArray.length > 0 && collectorNumber > 1) {
      setTimeout(() => {
        slotCallBack(diamondArray.length * collectorNumber * bet);
      }, 500);
    }
    if (
      !(slot4 === slot5 && slot4 === slot6) &&
      !(slot1 === slot5 && slot1 === slot9) &&
      !(slot3 === slot5 && slot1 === slot7) &&
      !(slot2 === slot5 && slot2 === slot8) &&
      !(slot7 === slot8 && slot7 === slot9) &&
      !(slot3 === slot6 && slot3 === slot9) &&
      !(slot1 === slot2 && slot1 === slot3) &&
      !(slot1 === slot4 && slot1 === slot7) &&
      !(diamondArray.length > 0 && collectorNumber > 1)
    ) {
      slotCallBack(0 - parseInt(bet));
    }
    if (user.money < bet) setBet(0);
    //eslint-disable-next-line
  }, [temp]);
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) return navigate("/login");
  const spinHandle = () => {
    if (bet > user.money) return fundsCallBack(true);
    if (bet === 0) return;
    setBtn(false);
    const handle = setInterval(() => {
      setSlot1(reel[Math.floor(Math.random() * reel.length)]);
      setSlot2(reel[Math.floor(Math.random() * reel.length)]);
      setSlot3(reel[Math.floor(Math.random() * reel.length)]);
      setSlot4(reel[Math.floor(Math.random() * reel.length)]);
      setSlot5(reel[Math.floor(Math.random() * reel.length)]);
      setSlot6(reel[Math.floor(Math.random() * reel.length)]);
      setSlot7(reel[Math.floor(Math.random() * reel.length)]);
      setSlot8(reel[Math.floor(Math.random() * reel.length)]);
      setSlot9(reel[Math.floor(Math.random() * reel.length)]);
    }, 400);
    setTimeout(() => {
      clearInterval(handle);
      setBtn(true);
      setTemp(!temp);
    }, 5000);
  };

  return (
    <div>
      <div className="slot-div-cont margin-top">
        <div
          className={"slot-div " + slot1}
          style={{
            borderTopLeftRadius: "10px",
            borderBottom: "5px solid gold",
          }}
        ></div>
        <div
          className={"slot-div " + slot2}
          style={{
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "5px solid gold",
          }}
        ></div>

        <div
          className={"slot-div " + slot3}
          style={{
            borderTopRightRadius: "10px",
            borderBottom: "5px solid gold",
          }}
        ></div>
      </div>
      <div className="slot-div-cont">
        <div
          className={"slot-div " + slot4}
          style={{
            borderTop: "5px solid gold",
            borderBottom: "5px solid gold",
          }}
        ></div>
        <div
          className={"slot-div " + slot5}
          style={{
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "5px solid gold",
            borderTop: "5px solid gold",
          }}
        ></div>

        <div
          className={"slot-div " + slot6}
          style={{
            borderBottom: "5px solid gold",
            borderTop: "5px solid gold",
          }}
        ></div>
      </div>
      <div className="slot-div-cont">
        <div
          className={"slot-div " + slot7}
          style={{
            borderTop: "5px solid gold",
            borderBottomLeftRadius: "10px",
          }}
        ></div>
        <div
          className={"slot-div " + slot8}
          style={{
            borderLeft: "none",
            borderRight: "none",
            borderTop: "5px solid gold",
          }}
        ></div>

        <div
          className={"slot-div " + slot9}
          style={{
            borderBottomRightRadius: "10px",
            borderTop: "5px solid gold",
          }}
        ></div>
      </div>
      <div
        className="slot-div-cont"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        {" "}
        <button onClick={btn ? spinHandle : null} style={{ width: "20vw" }}>
          spin
        </button>
        <div className="craps-bet">
          bet
          <input
            value={bet}
            type="number"
            min="0"
            max={user ? user.money / 2 : 10}
            onChange={(e) => {
              setBet(e.target.value);
            }}
          />
        </div>
        <div>
          <Popup
            trigger={<button className="button">How to play</button>}
            modal
          >
            <p>1- Place your bet</p>
            <p>
              2- If you land 3 in a row either horizontally,vertically or
              diagonally
            </p>
            <p> - you win :</p>
            <p> - diamond x1000 </p>
            <p> - seven x100 </p>
            <p> - crown x50 </p>
            <p> - coin x10 </p>
            <p> - other shapes x5 </p>
            <p>
              3-each diamond collector doubles your bet for each diamond you
              land
            </p>
          </Popup>
        </div>
      </div>
    </div>
  );
}
