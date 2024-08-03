import React, { useState } from "react";
import axiosInstance from "./api-handling";

const Login = ({ loadPosts, setloggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="login-page">
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
    </div>
  );
};

export default Login;
