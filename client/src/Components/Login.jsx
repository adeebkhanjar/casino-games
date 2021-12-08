import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const displayMessage = (msg = "") => {
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 1500);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { ...input });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
        //eslint-disable-next-line
        const response2 = await axios.put(
          "/api/users/" + response.data._id,
          { xp: response.data.xp, money: response.data.money + 1000 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      }
    } catch (err) {
      displayMessage("Wrong Cradentials");
    }
  };
  return (
    <div className="login-div">
      {" "}
      <div className="inner">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 style={{ color: "white" }}>Login</h3>

          <div className="form-group">
            <label>Username</label>
            <br />
            <input
              autoComplete="off"
              name="username"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              autoComplete="off"
              name="password"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              type="password"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          <p className="forgot-password text-right" style={{ color: "white" }}>
            Don't have an account yet?{" "}
            <Link to="/register" style={{ color: "white" }}>
              SignUp
            </Link>
          </p>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
