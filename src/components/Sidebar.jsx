import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, FilePlus2, Activity, User, Settings } from "lucide-react";

export default function Sidebar({ open = false, onClose }) {
  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/report", label: "Report Issue", icon: FilePlus2 },
    { to: "/activity", label: "Activity", icon: Activity },
    { to: "/profile", label: "Profile", icon: User },
  ];

  return (
    <aside>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed z-30 top-0 left-0 h-full w-72 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 transform transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="navigation"
        aria-label="Sidebar"
      >
        <div className="h-16 flex items-center gap-3 px-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-600" />
          <div>
            <p className="text-xs text-neutral-500">Citizen Road</p>
            <p className="text-sm font-semibold">Smart Road Platform</p>
          </div>
        </div>
        <nav className="p-3 space-y-1">
          {links.map((l) => (
            <NavItem key={l.to} to={l.to} icon={l.icon} label={l.label} onClick={onClose} />
          ))}
          <div className="pt-2 mt-2 border-t border-neutral-200 dark:border-neutral-800" />
          <NavItem to="/settings" icon={Settings} label="Settings" onClick={onClose} />
        </nav>
      </div>
    </aside>
  );
}

function NavItem({ to, icon: Icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
          isActive
            ? "bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
            : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        }`
      }
      end={to === "/"}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </NavLink>
  );
}
