import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [showRegister, setShowRegister] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <>
      <div className="navbar">
        <h1>🍬 Sweet Shop Management</h1>
        {loggedIn && <button onClick={logout}>Logout</button>}
      </div>

      <div className="container">
        {!loggedIn ? (
          showRegister ? (
            <Register onBack={() => setShowRegister(false)} />
          ) : (
            <Login
              onLogin={() => setLoggedIn(true)}
              onRegister={() => setShowRegister(true)}
            />
          )
        ) : (
          <>
            <AdminPanel />
            <Dashboard />
          </>
        )}
      </div>
    </>
  );
}

export default App;
