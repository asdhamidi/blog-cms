import React, { useState } from "react";
import axiosInstance from "./api-handling";

const Login = ({ loadPosts, setloggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");
  const [login, setlogin] = useState("active-btn");
  const [registerClass, setRegisterClass] = useState("");
  const [register, setregister] = useState(false);

  const handleLogin = () => {
    axiosInstance
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setloggedIn(true);
        loadPosts();
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleRegistration = () => {
    axiosInstance
      .post("/register", {
        username: username,
        password: password,
        register_code: registrationCode,
      })
      .then((response) => {
        setlogin("active-btn");
        setRegisterClass("");
        setregister(false);
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="front-page">
      <div className="front-page-options">
        <button
          className={login}
          onClick={() => {
            setlogin("active-btn");
            setRegisterClass("");
            setregister(false);
          }}
        >
          Login
        </button>
        <button
          className={registerClass}
          onClick={() => {
            setlogin("");
            setRegisterClass("active-btn");
            setregister(true);
          }}
        >
          Register
        </button>
      </div>
      {register === false && (
        <>
          <h1>login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="submit-btn" onClick={handleLogin}>
            Login
          </button>
        </>
      )}
      {register === true && (
        <>
          <h1>register</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Registration Code"
            value={registrationCode}
            onChange={(e) => setRegistrationCode(e.target.value)}
            required
          />
          <button className="submit-btn" onClick={handleRegistration}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
