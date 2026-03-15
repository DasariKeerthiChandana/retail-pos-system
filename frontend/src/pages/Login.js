import React, { useState } from "react";
import "../pages/Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Retail POS Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (Atleast 6 digits)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={onLogin} disabled={!email || !password}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
