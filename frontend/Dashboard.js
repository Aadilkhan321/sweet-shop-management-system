import { useEffect, useState } from "react";
import { apiRequest } from "./api";

function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    apiRequest("/sweets").then(setSweets);
  }, []);

  const purchase = async (id) => {
    await apiRequest(`/sweets/${id}/purchase`, "POST");
    setSweets(prev =>
      prev.map(s =>
        s.id === id ? { ...s, quantity: s.quantity - 1 } : s
      )
    );
  };

  return (
    <div>
      <h2>Sweet Shop Dashboard</h2>
      {sweets.length === 0 ? (
        <p>No sweets available</p>
      ) : (
        sweets.map(s => (
          <div key={s.id}>
            <h3>{s.name}</h3>
            <p>₹{s.price}</p>
            <p>Stock: {s.quantity}</p>
            <button disabled={s.quantity === 0} onClick={() => purchase(s.id)}>
              Purchase
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
