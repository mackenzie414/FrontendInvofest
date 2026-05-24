import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LayoutDashboard, Tag, CalendarDays, Mic2, User, LogOut } from "lucide-react";

export default function DashboardLayouts() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
    alert("Logout berhasil!");
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Category Event", path: "/dashboard/category", icon: Tag },
    { name: "Event", path: "/dashboard/event", icon: CalendarDays },
    { name: "Pembicara", path: "/dashboard/seminar", icon: Mic2 },
    { name: "Biodata", path: "/dashboard/biodata", icon: User },
  ];

  return (
    <div className="flex w-full min-h-screen bg-[#F3F4F6]">
      {/* SIDEBAR */}
      <div className="w-64 bg-[#7B1D3F] text-white flex flex-col justify-between sticky top-0 h-screen shadow-xl">
        
        {/* LOGO */}
        <div>
          <div className="px-6 py-6 border-b border-white/20">
            <h2 className="text-2xl font-bold tracking-tighter italic">
              INVOFEST
            </h2>
            <p className="text-xs text-white/60 tracking-widest mt-1">
              INFORMATICS VOCATIONAL FESTIVAL
            </p>
          </div>

          {/* MENU */}
          <nav className="flex flex-col px-3 gap-1 mt-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? "bg-white text-[#7B1D3F] shadow-md"
                      : "hover:bg-white/10 text-white/80 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-all"
            type="button"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}