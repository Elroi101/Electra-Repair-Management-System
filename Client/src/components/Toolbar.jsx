import { useState } from "react";
import { Search, Plus, ChevronDown } from "lucide-react";
import RepairTable from "./RepairTable";

const Toolbar = ({ onNewRepairClick, onRowClick, refreshKey }) => {
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [searchQuery, setSearchQuery] = useState("");

  const statusOptions = [
    "All statuses",
    "Received",
    "In progress",
    "Waiting for parts",
    "Completed",
  ];

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <section className="px-4 py-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left side: Search + Status dropdown */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search input */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search size={16} className="text-[#8a817c]" />
                </div>
                <input
                  type="text"
                  placeholder="Search by client or device"
                  value={searchQuery} // Bind to state
                  onChange={handleSearchChange} // Handle changes
                  className="min-w-[200px] rounded-md border border-[#8a817c]/30 bg-[#fefeff] py-2 pl-10 pr-4 font-sans text-sm text-[#322e18] placeholder:text-[#8a817c]/70 focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78] sm:min-w-[250px]"
                />
              </div>

              {/* Status dropdown */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none rounded-md border border-[#8a817c]/30 bg-[#fefeff] py-2 pl-4 pr-10 font-sans text-sm text-[#322e18] focus:border-[#253c78] focus:outline-none focus:ring-1 focus:ring-[#253c78]"
                >
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8a817c]"
                />
              </div>
            </div>

            {/* Right side: New repair job button */}
            <button
              onClick={onNewRepairClick}
              className="inline-flex items-center gap-2 rounded-md bg-[#253c78] px-5 py-2.5 font-sans text-sm font-medium text-[#fefeff] transition-colors hover:bg-[#253c78]/90 focus:outline-none focus:ring-2 focus:ring-[#253c78] focus:ring-offset-2"
            >
              <Plus size={18} />
              New repair job
            </button>
          </div>
        </div>
      </section>

      {/* Pass searchQuery to RepairTable */}
      <RepairTable
        onRowClick={onRowClick}
        status={statusFilter}
        search={searchQuery} // Pass search value to table for filtering
        refreshKey={refreshKey}
      />
    </>
  );
};

export default Toolbar;
