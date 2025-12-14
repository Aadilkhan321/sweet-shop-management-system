import { useState } from "react";
import { apiRequest } from "./api";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = await apiRequest("/auth/login", "POST", {
      username,
      password,
    });

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      onLogin();
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
