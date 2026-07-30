import axios from "axios";
import { useEffect, useState } from "react";

const StatCard = ({ label, value }) => {
  return (
    <div className="rounded-md bg-[#253c78]/5 px-5 py-5 transition-colors hover:bg-[#253c78]/10">
      <p className="mb-1.5 font-sans text-xs font-medium uppercase tracking-wider text-[#8a817c]">
        {label}
      </p>
      <p className="font-sans text-2xl font-semibold tracking-tight text-[#322e18]">
        {value}
      </p>
    </div>
  );
};
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const StatCards = () => {
  async function calc_active_repairs() {
    try {
      let response = await axios.get(`${API_URL}/cards_info`, {
        withCredentials: true,
      });
      return response.data;
    } catch (er) {
      console.log(er);
      return [];
    }
  }
  let [cardData, SetcardData] = useState([]);

  async function load() {
    const data = await calc_active_repairs();
    SetcardData(data);
  }
  useEffect(() => {
    load();
  }, []);
  const stats = [
    { label: "Active repairs", value: cardData.active },
    { label: "Waiting for parts", value: cardData.waiting },
    { label: "Completed this month", value: cardData.completed },
    { label: "Revenue this month", value: `$${cardData.revenue}` },
  ];

  return (
    <section className="px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCards;
