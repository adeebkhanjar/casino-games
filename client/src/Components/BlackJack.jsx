import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";
const deck = [
  {
    code: "7S",
    image: "https://deckofcardsapi.com/static/img/7S.png",
    value: [7],
  },
  {
    code: "4D",
    image: "https://deckofcardsapi.com/static/img/4D.png",
    value: [4],
  },
  {
    code: "JC",
    image: "https://deckofcardsapi.com/static/img/JC.png",
    value: [10],
  },
  {
    code: "8C",
    image: "https://deckofcardsapi.com/static/img/8C.png",
    value: [8],
  },
  {
    code: "4H",
    image: "https://deckofcardsapi.com/static/img/4H.png",
    value: [4],
  },
  {
    code: "8S",
    image: "https://deckofcardsapi.com/static/img/8S.png",
    value: [8],
  },
  {
    code: "5C",
    image: "https://deckofcardsapi.com/static/img/5C.png",
    value: [5],
  },
  {
    code: "7C",
    image: "https://deckofcardsapi.com/static/img/7C.png",
    value: [7],
  },
  {
    code: "7D",
    image: "https://deckofcardsapi.com/static/img/7D.png",
    value: [7],
  },
  {
    code: "3D",
    image: "https://deckofcardsapi.com/static/img/3D.png",
    value: [3],
  },
  {
    code: "0S",
    image: "https://deckofcardsapi.com/static/img/0S.png",
    value: [10],
  },
  {
    code: "8D",
    image: "https://deckofcardsapi.com/static/img/8D.png",
    value: [8],
  },
  {
    code: "AS",
    image: "https://deckofcardsapi.com/static/img/AS.png",
    value: [11],
  },
  {
    code: "QD",
    image: "https://deckofcardsapi.com/static/img/QD.png",
    value: [10],
  },
  {
    code: "3H",
    image: "https://deckofcardsapi.com/static/img/3H.png",
    value: [3],
  },
  {
    code: "9C",
    image: "https://deckofcardsapi.com/static/img/9C.png",
    value: [9],
  },
  {
    code: "7H",
    image: "https://deckofcardsapi.com/static/img/7H.png",
    value: [7],
  },
  {
    code: "5H",
    image: "https://deckofcardsapi.com/static/img/5H.png",
    value: [5],
  },
  {
    code: "2H",
    image: "https://deckofcardsapi.com/static/img/2H.png",
    value: [2],
  },
  {
    code: "0D",
    image: "https://deckofcardsapi.com/static/img/0D.png",
    value: [10],
  },
  {
    code: "AH",
    image: "https://deckofcardsapi.com/static/img/AH.png",
    value: [11],
  },
  {
    code: "0H",
    image: "https://deckofcardsapi.com/static/img/0H.png",
    value: [10],
  },
  {
    code: "QC",
    image: "https://deckofcardsapi.com/static/img/QC.png",
    value: [10],
  },
  {
    code: "3C",
    image: "https://deckofcardsapi.com/static/img/3C.png",
    value: [3],
  },
  {
    code: "2D",
    image: "https://deckofcardsapi.com/static/img/2D.png",
    value: [2],
  },
  {
    code: "AD",
    image: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    value: [11],
  },
  {
    code: "JS",
    image: "https://deckofcardsapi.com/static/img/JS.png",
    value: [10],
  },
  {
    code: "JH",
    image: "https://deckofcardsapi.com/static/img/JH.png",
    value: [10],
  },
  {
    code: "9H",
    image: "https://deckofcardsapi.com/static/img/9H.png",
    value: [9],
  },
  {
    code: "9S",
    image: "https://deckofcardsapi.com/static/img/9S.png",
    value: [9],
  },
  {
    code: "KC",
    image: "https://deckofcardsapi.com/static/img/KC.png",
    value: [10],
  },
  {
    code: "3S",
    image: "https://deckofcardsapi.com/static/img/3S.png",
    value: [3],
  },
  {
    code: "KD",
    image: "https://deckofcardsapi.com/static/img/KD.png",
    value: [10],
  },
  {
    code: "8H",
    image: "https://deckofcardsapi.com/static/img/8H.png",
    value: [8],
  },
  {
    code: "5S",
    image: "https://deckofcardsapi.com/static/img/5S.png",
    value: [5],
  },
  {
    code: "QH",
    image: "https://deckofcardsapi.com/static/img/QH.png",
    value: [10],
  },
  {
    code: "KS",
    image: "https://deckofcardsapi.com/static/img/KS.png",
    value: [10],
  },
  {
    code: "9D",
    image: "https://deckofcardsapi.com/static/img/9D.png",
    value: [9],
  },
  {
    code: "KH",
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: [10],
  },
  {
    code: "6H",
    image: "https://deckofcardsapi.com/static/img/6H.png",
    value: [6],
  },
  {
    code: "6D",
    image: "https://deckofcardsapi.com/static/img/6D.png",
    value: [6],
  },
  {
    code: "6S",
    image: "https://deckofcardsapi.com/static/img/6S.png",
    value: [6],
  },
  {
    code: "6C",
    image: "https://deckofcardsapi.com/static/img/6C.png",
    value: [6],
  },
  {
    code: "QS",
    image: "https://deckofcardsapi.com/static/img/QS.png",
    value: [10],
  },
  {
    code: "5D",
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: [5],
  },
  {
    code: "0C",
    image: "https://deckofcardsapi.com/static/img/0C.png",
    value: [10],
  },
  {
    code: "JD",
    image: "https://deckofcardsapi.com/static/img/JD.png",
    value: [10],
  },
  {
    code: "4S",
    image: "https://deckofcardsapi.com/static/img/4S.png",
    value: [4],
  },
  {
    code: "2C",
    image: "https://deckofcardsapi.com/static/img/2C.png",
    value: [2],
  },
  {
    code: "4C",
    image: "https://deckofcardsapi.com/static/img/4C.png",
    value: [4],
  },
  {
    code: "2S",
    image: "https://deckofcardsapi.com/static/img/2S.png",
    value: [2],
  },
  {
    code: "AC",
    image: "https://deckofcardsapi.com/static/img/AC.png",
    value: [11],
  },
];
export default function BlackJack({ user, fundsCallBack, blackJackCallBack }) {
  const [start, setStart] = useState(false);
  const [stand, setStand] = useState(false);
  const [bet, setBet] = useState(0);
  const [playerSum, setPlayerSum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  useEffect(() => {
    if (playerCards.length < 2) return;
    let sum = 0;
    playerCards.forEach((card) => {
      sum += card.value[0];
    });
    let ace = playerCards.filter((card) => card.code[0] === "A");

    for (let i = 0; i < ace.length; i++) {
      if (sum > 21) {
        sum = sum - 10;
      }
    }
    setPlayerSum(sum);
    if (sum > 21) return handleEnd(false);
    if (sum === 21) return handleEnd(true);
    //eslint-disable-next-line
  }, [playerCards]);
  useEffect(() => {
    if (dealerCards.length < 1) return;
    let sum = 0;
    dealerCards.forEach((card) => {
      sum += card.value[0];
    });
    let ace = dealerCards.filter((card) => card.code[0] === "A");

    for (let i = 0; i < ace.length; i++) {
      if (sum > 21) {
        sum = sum - 10;
      }
    }
    setDealerSum(sum);
    if (sum > 21) return handleEnd(true);
    if (sum > playerSum && sum > 16 && stand) return handleEnd(false);
    if (stand) {
      setTimeout(() => {
        handleStand();
      }, 1000);
    }
    //eslint-disable-next-line
  }, [dealerCards]);
  const handleStart = () => {
    if (bet > user.money) return fundsCallBack(true);
    if (bet === 0) return;
    setStart(true);
    deck.sort(() => Math.random() - 0.5);
    setPlayerCards([deck[0], deck[1]]);
    setDealerCards([deck[2]]);
  };
  const handleEnd = (win) => {
    setTimeout(() => {
      if (win) {
        blackJackCallBack(bet);
      }
      if (!win) {
        blackJackCallBack(0 - bet);
      }
      setBet(0);
      setStand(false);
      setPlayerSum(0);
      setDealerSum(0);
      setPlayerCards([]);
      setDealerCards([]);
      setStart(false);
    }, 1000);
  };
  const handleHit = () => {
    setPlayerCards([...playerCards, deck[playerCards.length + 1]]);
  };
  const handleStand = () => {
    setStand(true);
    if (dealerSum < 16) {
      setDealerCards([
        ...dealerCards,
        deck[playerCards.length + dealerCards.length],
      ]);
    }
  };
  return (
    <div className="bj-container">
      {dealerCards.length > 0 ? (
        <div className="dealer flex">
          {dealerCards.map((card, i) => {
            return (
              <div
                key={i}
                className="bj-card"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
            );
          })}
          <div className="circle">{dealerSum}</div>
        </div>
      ) : (
        ""
      )}

      {playerCards.length > 0 ? (
        <div className="bjplayer flex">
          {playerCards.map((card, i) => {
            return (
              <div
                key={i}
                className="bj-card"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
            );
          })}
          <div className="circle">{playerSum}</div>
        </div>
      ) : (
        ""
      )}
      <div>
        {" "}
        {!start ? (
          <button className="roulette-btn" onClick={handleStart}>
            start
          </button>
        ) : (
          <>
            {" "}
            <button
              className="roulette-btn"
              onClick={!stand ? handleHit : null}
            >
              hit
            </button>{" "}
            <button
              className="roulette-btn"
              onClick={!stand ? handleStand : null}
            >
              stand
            </button>
          </>
        )}
        {!start ? (
          <div className="craps-bet">
            Bet{" "}
            <input
              onChange={(e) => {
                setBet(e.target.value);
              }}
              type="number"
              min="10"
              value={bet}
              max={user ? user.money / 3 : 10}
              step={10}
              style={{ width: "100px" }}
            />
          </div>
        ) : (
          ""
        )}
        <Popup trigger={<button className="button">How to play</button>} modal>
          <p>1-Place your Bet</p>
          <p>
            2-beat the dealer by getting a count as close to 21 as possible,
            without going over 21.{" "}
          </p>
          <p>
            3-It is up to each individual player if an ace is worth 1 or 11.
            Face cards are 10 and any other card is its pip value.
          </p>
        </Popup>
      </div>
    </div>
  );
}
