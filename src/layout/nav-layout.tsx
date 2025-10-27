import {
  Home,
  ChevronLeft,
  ChevronRight,
  CarFrontIcon,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function NavLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        top-0 left-0 h-screen bg-white border-r text-white 
        transition-all duration-300 ease-in-out
        flex flex-col justify-between
        ${collapsed ? "w-14" : "w-[300px]"}
      `}
    >
      <div>
        {/* Header */}
        <div
          className={`h-14 mx-0 transition-all duration-300 border-b p-2 ${
            !collapsed && "mx-2"
          } flex items-center gap-2 `}
        >
          <CarFrontIcon
            size={39}
            className=" py-1 px-2 rounded-md bg-indigo-600 text-white "
            // className={` text-black  bg-indigo-600`}
          />{" "}
          {!collapsed && (
            <div className="flex flex-col">
              <div className="text-base truncate text-black font-bold">
                AutoDealer
              </div>
              <div className="text-[12px] truncate text-gray-600">
                Management System
              </div>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="mt-2 space-y-1 px-2">
          <MenuItem
            icon={<Home size={16} />}
            label="Dashboard"
            route="/dashboard"
            collapsed={collapsed}
          />
          <MenuItem
            icon={<Users size={16} />}
            label="Team"
            route="/team"
            collapsed={collapsed}
          />
        </nav>
      </div>

      {/* Bottom Collapse Button */}
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-start px-2 mx-2 gap-2 cursor-pointer border-t py-3 text-gray-600 hover:bg-gray-100 transition-all duration-200"
      >
        {collapsed ? (
          <ChevronRight size={18} className="text-gray-700" />
        ) : (
          <>
            <ChevronLeft size={18} className="text-gray-700" />
            <span className="text-sm truncate font-medium">Collapse</span>
          </>
        )}
      </div>
    </aside>
  );
}

function MenuItem({
  icon,
  label,
  route,
  collapsed,
}: {
  icon: React.ReactNode;
  label: string;
  route?: string;
  collapsed: boolean;
}) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div
      onClick={() => navigate(route || "#")}
      className={` ${pathname == route && "bg-indigo-600 text-white"}
        flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer
        hover:bg-indigo-700 hover:text-white text-black transition-all duration-200
      `}
    >
      <div className="flex items-center justify-center">{icon}</div>
      {!collapsed && <span className="text-[15px]">{label}</span>}
    </div>
  );
}
