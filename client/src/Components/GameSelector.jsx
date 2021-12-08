import React from "react";
import { useNavigate } from "react-router";

export default function GameSelector({ hideCallBack }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-container">
        <div
          className="roulette game"
          onClick={() => {
            navigate("/roulette");
            hideCallBack(true);
          }}
        ></div>
        <div
          className="the-wheel game"
          onClick={() => {
            navigate("/wheel");
            hideCallBack(true);
          }}
        ></div>
        <div
          className="craps game"
          onClick={() => {
            navigate("/craps");
            hideCallBack(true);
          }}
        ></div>
        <div
          className="slot game"
          onClick={() => {
            navigate("/slot");
            hideCallBack(true);
          }}
        ></div>
        <div
          className="blackjack game"
          onClick={() => {
            navigate("/blackjack");
            hideCallBack(true);
          }}
        ></div>
      </div>
    </div>
  );
}
