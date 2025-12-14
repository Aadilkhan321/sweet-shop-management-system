import { useEffect, useState } from "react";
import { apiRequest } from "./api";

function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    apiRequest("/sweets").then((data) => {
      if (Array.isArray(data)) {
        setSweets(data);
      }
    });
  }, []);

  return (
    <div>
      <h2>Available Sweets</h2>

      <div className="sweet-grid">
        {sweets.map((s) => (
          <div className="card sweet-card" key={s.id}>
            <span className="badge">{s.category}</span>
            <h3>{s.name}</h3>
            <p>Price: ₹{s.price}</p>
            <p>Stock: {s.quantity}</p>

            <button disabled={s.quantity === 0}>
              {s.quantity === 0 ? "Out of Stock" : "Purchase"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
