import { Bell, Wrench, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/logout",
        {},
        {
          withCredentials: true,
        },
      );

      navigate("/SignIn");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="border-b border-[#8a817c]/20 bg-[#fefeff] px-4 py-3 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#253c78] text-[#fefeff]">
            <Wrench size={18} />
          </div>
          <span className="font-sans text-xl font-semibold tracking-tight text-[#253c78]">
            electra
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button
            className="relative rounded-full p-1.5 text-[#253c78] transition-colors hover:bg-[#253c78]/10"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md border border-[#8a817c]/30 px-3 py-1.5 font-sans text-sm font-medium text-[#253c78] transition-colors hover:bg-[#720e07] hover:text-[#fefeff] hover:border-[#720e07]"
            aria-label="Logout"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>

          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#322e18] font-sans text-sm font-medium text-[#fefeff]">
            AD
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
