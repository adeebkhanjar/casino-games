import axios from "axios";
import React, { useEffect, useState } from "react";
//eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//eslint-disable-next-line
import { useNavigate, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Roulette from "./Roulette";
import TheWheel from "./TheWheel";
import win from "../Helpers/sound/wheel.wav";
import lose from "../Helpers/sound/lose.wav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Craps from "./Craps";
import Slot from "./Slot";
import BlackJack from "./BlackJack";
export default function App() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  window.onload = (event) => {
    navigate("/");
  };
  const handleMoney = (sum) => {
    if (sum > 0) {
      setUser({ ...user, money: user.money + parseInt(sum), xp: user.xp + 10 });
      toast.success(`WIN!!!!  ${sum}`);
      new Audio(win).play();
    }
    if (sum <= 0) {
      setUser({ ...user, money: user.money + parseInt(sum) });
      toast(`You Lose ${sum}`);
      new Audio(lose).play();
    }
  };
  const updateUserData = async () => {
    if (!user) return;
    //eslint-disable-next-line
    const response = await axios.put(
      "/api/users/" + user._id,
      { ...user },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  };
  useEffect(() => {
    updateUserData();
    //eslint-disable-next-line
  }, [user]);
  return (
    <div>
      {" "}
      {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}{" "}
      <Routes>
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route
          path="/"
          element={<Home user={user} userCallBack={(user) => setUser(user)} />}
        >
          <Route
            path="/roulette"
            element={
              <Roulette
                fundsCallBack={() => {
                  toast(`insufficient funds`);
                }}
                rouletteCallBack={(sum) => handleMoney(sum)}
                user={user}
              />
            }
          />
          <Route
            path="/wheel"
            element={
              <TheWheel
                fundsCallBack={() => {
                  toast(`insufficient funds`);
                }}
                WheelCallBack={(sum) => handleMoney(sum)}
                user={user}
              />
            }
          />{" "}
          <Route
            path="/craps"
            element={
              <Craps
                fundsCallBack={() => {
                  toast(`insufficient funds`);
                }}
                crapsCallBack={(sum) => handleMoney(sum)}
                user={user}
              />
            }
          />{" "}
          <Route
            path="/slot"
            element={
              <Slot
                fundsCallBack={() => {
                  toast(`insufficient funds`);
                }}
                slotCallBack={(sum) => handleMoney(sum)}
                user={user}
              />
            }
          />{" "}
          <Route
            path="/blackjack"
            element={
              <BlackJack
                fundsCallBack={() => {
                  toast(`insufficient funds`);
                }}
                blackJackCallBack={(sum) => handleMoney(sum)}
                user={user}
              />
            }
          />{" "}
        </Route>{" "}
      </Routes>{" "}
      <ToastContainer />
    </div>
  );
}
