import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import validator from "validator";
export default function Register() {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const validateInput = () => {
    if (typeof input.username !== "string") {
      displayMessage("username Incorrect");
      return false;
    }
    if (!validator.isEmail(input.email)) {
      displayMessage("email Incorrect");
      return false;
    }
    if (input.password.length < 8) {
      displayMessage("password must be atleast 8 characters");
      return false;
    }
    return true;
  };

  const displayMessage = (msg = "") => {
    setMessage(msg);

    setTimeout(() => {
      setMessage("");
    }, 1500);
  };
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      if (!validateInput()) return;

      const res = await axios.post("/api/users/register", { ...input });
      if (res.status === 200) displayMessage("User Added Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-div">
      {" "}
      <div className="inner">
        <form onSubmit={(e) => handleRegister(e)}>
          <h3 style={{ color: "white" }}>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
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
            <label>Email</label>
            <input
              autoComplete="off"
              name="email"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              type="email"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
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
            Sign Up
          </button>
          <p className="forgot-password text-right" style={{ color: "white" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "white" }}>
              Login
            </Link>
          </p>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
