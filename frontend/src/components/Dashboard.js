import { useEffect, useState } from "react";
import { apiRequest } from "../api";
import SweetCard from "./SweetCard";

function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");

  const loadSweets = async () => {
    const data = await apiRequest(`/sweets/search?name=${search}`);
    setSweets(data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <>
      <h2>Available Sweets</h2>

      <input
        placeholder="Search sweet by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={loadSweets}>Search</button>

      <div className="sweet-grid">
        {sweets.map((s) => (
          <SweetCard key={s.id} sweet={s} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
