import axios from "axios";
import React, { useEffect, useState } from "react";
const deck = [
  {
    code: "7S",
    image: "https://deckofcardsapi.com/static/img/7S.png",
    value: [],
  },
  {
    code: "4D",
    image: "https://deckofcardsapi.com/static/img/4D.png",
    value: [],
  },
  {
    code: "JC",
    image: "https://deckofcardsapi.com/static/img/JC.png",
    value: [],
  },
  {
    code: "8C",
    image: "https://deckofcardsapi.com/static/img/8C.png",
    value: [],
  },
  {
    code: "4H",
    image: "https://deckofcardsapi.com/static/img/4H.png",
    value: [],
  },
  {
    code: "8S",
    image: "https://deckofcardsapi.com/static/img/8S.png",
    value: [],
  },
  {
    code: "5C",
    image: "https://deckofcardsapi.com/static/img/5C.png",
    value: [],
  },
  {
    code: "7C",
    image: "https://deckofcardsapi.com/static/img/7C.png",
    value: [],
  },
  {
    code: "7D",
    image: "https://deckofcardsapi.com/static/img/7D.png",
    value: [],
  },
  {
    code: "3D",
    image: "https://deckofcardsapi.com/static/img/3D.png",
    value: [],
  },
  {
    code: "0S",
    image: "https://deckofcardsapi.com/static/img/0S.png",
    value: [],
  },
  {
    code: "8D",
    image: "https://deckofcardsapi.com/static/img/8D.png",
    value: [],
  },
  {
    code: "AS",
    image: "https://deckofcardsapi.com/static/img/AS.png",
    value: [],
  },
  {
    code: "QD",
    image: "https://deckofcardsapi.com/static/img/QD.png",
    value: [],
  },
  {
    code: "3H",
    image: "https://deckofcardsapi.com/static/img/3H.png",
    value: [],
  },
  {
    code: "9C",
    image: "https://deckofcardsapi.com/static/img/9C.png",
    value: [],
  },
  {
    code: "7H",
    image: "https://deckofcardsapi.com/static/img/7H.png",
    value: [],
  },
  {
    code: "5H",
    image: "https://deckofcardsapi.com/static/img/5H.png",
    value: [],
  },
  {
    code: "2H",
    image: "https://deckofcardsapi.com/static/img/2H.png",
    value: [],
  },
  {
    code: "0D",
    image: "https://deckofcardsapi.com/static/img/0D.png",
    value: [],
  },
  {
    code: "AH",
    image: "https://deckofcardsapi.com/static/img/AH.png",
    value: [],
  },
  {
    code: "0H",
    image: "https://deckofcardsapi.com/static/img/0H.png",
    value: [],
  },
  {
    code: "QC",
    image: "https://deckofcardsapi.com/static/img/QC.png",
    value: [],
  },
  {
    code: "3C",
    image: "https://deckofcardsapi.com/static/img/3C.png",
    value: [],
  },
  {
    code: "2D",
    image: "https://deckofcardsapi.com/static/img/2D.png",
    value: [],
  },
  {
    code: "AD",
    image: "https://deckofcardsapi.com/static/img/aceDiamonds.png",
    value: [],
  },
  {
    code: "JS",
    image: "https://deckofcardsapi.com/static/img/JS.png",
    value: [],
  },
  {
    code: "JH",
    image: "https://deckofcardsapi.com/static/img/JH.png",
    value: [],
  },
  {
    code: "9H",
    image: "https://deckofcardsapi.com/static/img/9H.png",
    value: [],
  },
  {
    code: "9S",
    image: "https://deckofcardsapi.com/static/img/9S.png",
    value: [],
  },
  {
    code: "KC",
    image: "https://deckofcardsapi.com/static/img/KC.png",
    value: [],
  },
  {
    code: "3S",
    image: "https://deckofcardsapi.com/static/img/3S.png",
    value: [],
  },
  {
    code: "KD",
    image: "https://deckofcardsapi.com/static/img/KD.png",
    value: [],
  },
  {
    code: "8H",
    image: "https://deckofcardsapi.com/static/img/8H.png",
    value: [],
  },
  {
    code: "5S",
    image: "https://deckofcardsapi.com/static/img/5S.png",
    value: [],
  },
  {
    code: "QH",
    image: "https://deckofcardsapi.com/static/img/QH.png",
    value: [],
  },
  {
    code: "KS",
    image: "https://deckofcardsapi.com/static/img/KS.png",
    value: [],
  },
  {
    code: "9D",
    image: "https://deckofcardsapi.com/static/img/9D.png",
    value: [],
  },
  {
    code: "KH",
    image: "https://deckofcardsapi.com/static/img/KH.png",
    value: [],
  },
  {
    code: "6H",
    image: "https://deckofcardsapi.com/static/img/6H.png",
    value: [],
  },
  {
    code: "6D",
    image: "https://deckofcardsapi.com/static/img/6D.png",
    value: [],
  },
  {
    code: "6S",
    image: "https://deckofcardsapi.com/static/img/6S.png",
    value: [],
  },
  {
    code: "6C",
    image: "https://deckofcardsapi.com/static/img/6C.png",
    value: [],
  },
  {
    code: "QS",
    image: "https://deckofcardsapi.com/static/img/QS.png",
    value: [],
  },
  {
    code: "5D",
    image: "https://deckofcardsapi.com/static/img/5D.png",
    value: [],
  },
  {
    code: "0C",
    image: "https://deckofcardsapi.com/static/img/0C.png",
    value: [],
  },
  {
    code: "JD",
    image: "https://deckofcardsapi.com/static/img/JD.png",
    value: [],
  },
  {
    code: "4S",
    image: "https://deckofcardsapi.com/static/img/4S.png",
    value: [],
  },
  {
    code: "2C",
    image: "https://deckofcardsapi.com/static/img/2C.png",
    value: [],
  },
  {
    code: "4C",
    image: "https://deckofcardsapi.com/static/img/4C.png",
    value: [],
  },
  {
    code: "2S",
    image: "https://deckofcardsapi.com/static/img/2S.png",
    value: [],
  },
  {
    code: "AC",
    image: "https://deckofcardsapi.com/static/img/AC.png",
    value: [],
  },
];
export default function BlackJack() {
  return (
    <div className="bj-container">
      <div className="dealer flex">
        <div></div>
      </div>
      <div className="bjplayer flex">asdasd</div>
    </div>
  );
}
