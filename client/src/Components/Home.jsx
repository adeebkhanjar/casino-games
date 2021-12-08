import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import GameSelector from "./GameSelector";

export default function Home({ userCallBack, user }) {
  //   const [user, setUser] = useState("");
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();

  const getUser = async () => {
    if (!localStorage.getItem("token")) return navigate("/login");
    const response = await axios.get("/api/users/get", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (response.status !== 200) return navigate("/login");
    // setUser(response.data);
    userCallBack(response.data);
  };
  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      {" "}
      <nav>
        <div className="logo"> </div>{" "}
        <div className="status-bar">
          <p>
            {" "}
            {user ? user.username : ""} <i className="fas fa-user"> </i>{" "}
          </p>{" "}
          <p>
            {" "}
            {user ? user.money : ""} <i className="fas fa-coins"> </i>{" "}
          </p>{" "}
          <p>
            {" "}
            {user ? user.xp : ""}
            XP{" "}
          </p>{" "}
          <div className="sign-out" onClick={handleLogOut}>
            <p>
              Log Out <i className="fas fa-sign-out-alt"> </i>{" "}
            </p>{" "}
          </div>{" "}
          <p
            className="back"
            onClick={() => {
              setHide(false);
              navigate("/");
            }}
          >
            Back{" "}
          </p>{" "}
        </div>{" "}
      </nav>{" "}
      <Outlet />{" "}
      {hide ? (
        ""
      ) : (
        <GameSelector
          hideCallBack={() => {
            setHide(true);
          }}
        />
      )}{" "}
    </div>
  );
}
