import { useState } from "react";
import { apiRequest } from "../api";

function AdminPanel() {
  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const addSweet = async () => {
    const res = await apiRequest("/sweets", "POST", {
      ...sweet,
      price: Number(sweet.price),
      quantity: Number(sweet.quantity),
    });
    alert(res.message);
  };

  return (
    <div className="card">
      <h2>Admin Panel</h2>

      <input placeholder="Name" onChange={(e) => setSweet({ ...sweet, name: e.target.value })} />
      <input placeholder="Category" onChange={(e) => setSweet({ ...sweet, category: e.target.value })} />
      <input placeholder="Price" onChange={(e) => setSweet({ ...sweet, price: e.target.value })} />
      <input placeholder="Quantity" onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })} />

      <button onClick={addSweet}>Add Sweet</button>
    </div>
  );
}

export default AdminPanel;
