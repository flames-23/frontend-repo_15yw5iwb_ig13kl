import { Bell, Moon, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-600 shadow-inner" />
          <div>
            <p className="text-sm leading-none text-neutral-500">Citizen Road</p>
            <h1 className="text-lg font-semibold tracking-tight">Smart Road Platform</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Notifications"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Moon className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
              <span className="hidden sm:block text-sm">John Doe</span>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
                <div className="px-4 py-3 text-sm">
                  <p className="font-medium">John Doe</p>
                  <p className="text-neutral-500">user@example.com</p>
                </div>
                <div className="border-t border-neutral-200 dark:border-neutral-800" />
                <nav className="p-1">
                  <a href="#profile" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    <User className="h-4 w-4" /> Profile
                  </a>
                  <button className="w-full text-left px-3 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-red-600">
                    Logout
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
