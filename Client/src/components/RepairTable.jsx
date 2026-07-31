import { useState, useEffect } from "react";
import axios from "axios";
const RepairTable = ({ onRowClick, status, search, refreshKey }) => {
  let [allData, setAllData] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  async function getData(datan) {
    try {
      const response = await axios.post(
        `${API_URL}/allUsers`,
        {
          status: datan,
        },
        {
          withCredentials: true,
        },
      );
      return response.data;
    } catch (er) {
      console.log(er);
      return [];
    }
  }

  async function load(datam) {
    let user = await getData(datam);
    setAllData(user);
  }

  useEffect(() => {
    load(status);
  }, [status, refreshKey]);

  allData = allData.filter((i) =>
    (i.name || "").toLowerCase().includes((search || "").toLowerCase()),
  );
  const getStatusColor = (status) => {
    switch (status) {
      case "In progress":
        return "bg-amber-100 text-amber-800";
      case "Waiting for parts":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-[#8a817c]/10 text-[#8a817c]";
    }
  };

  const handleRowClick = (allData) => {
    if (onRowClick) {
      onRowClick(allData);
    }
  };

  return (
    <section className="px-4 py-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-md border border-[#8a817c]/20 bg-[#fefeff]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#8a817c]/10">
              <thead className="bg-[#253c78]/5">
                <tr>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-wider text-[#8a817c]">
                    Client
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-wider text-[#8a817c]">
                    Device
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-wider text-[#8a817c]">
                    Issue description
                  </th>
                  <th className="px-4 py-3.5 text-left font-sans text-xs font-semibold uppercase tracking-wider text-[#8a817c]">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-right font-sans text-xs font-semibold uppercase tracking-wider text-[#8a817c]">
                    Estimate ($)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8a817c]/10">
                {allData.map((data) => (
                  <tr
                    key={data.cusomer_id}
                    onClick={() => handleRowClick(data)}
                    className="cursor-pointer transition-colors hover:bg-[#253c78]/5"
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 font-sans text-sm font-medium text-[#322e18]">
                      {data.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-sans text-sm text-[#322e18]">
                      {data.device}
                    </td>
                    <td className="px-4 py-3.5 font-sans text-sm text-[#322e18]">
                      {data.issue_description}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 font-sans text-xs font-medium ${getStatusColor(
                          data.status,
                        )}`}
                      >
                        {data.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-right font-sans text-sm font-medium text-[#322e18]">
                      ${(data.estimated_price ?? 0).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairTable;
