import { useState } from "react";
import { apiRequest } from "../api";

function Register({ onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await apiRequest("/auth/register", "POST", {
      username,
      password,
    });
    alert(res.message);
    onBack();
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={register}>Register</button>
      <p onClick={onBack} className="link">Back to Login</p>
    </div>
  );
}

export default Register;
