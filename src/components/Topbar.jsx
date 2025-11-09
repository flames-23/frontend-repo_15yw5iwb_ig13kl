import { Menu, Bell, MoonStar, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar({ onMenu }) {
  return (
    <header className="fixed top-0 inset-x-0 z-20 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onMenu} className="lg:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-600" />
            <span className="font-semibold">Citizen Road</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" aria-label="Theme">
            <MoonStar className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-red-600" aria-label="Logout">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
