import { apiRequest } from "../api";

function SweetCard({ sweet }) {
  const purchase = async () => {
    const res = await apiRequest(`/sweets/${sweet.id}/purchase`, "POST");
    alert(res.message);
    window.location.reload();
  };

  return (
    <div className="card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button disabled={sweet.quantity === 0} onClick={purchase}>
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>
    </div>
  );
}

export default SweetCard;
