import { ArrowUpRight, Flag, CheckCircle2, Clock, Users } from "lucide-react";

export default function Dashboard() {
  const cards = [
    { name: "New Reports", value: 23, delta: "+8%", icon: Flag, color: "from-sky-500 to-indigo-500" },
    { name: "Resolved", value: 41, delta: "+3%", icon: CheckCircle2, color: "from-emerald-500 to-teal-500" },
    { name: "In Progress", value: 12, delta: "-2%", icon: Clock, color: "from-amber-500 to-orange-500" },
    { name: "Active Users", value: 527, delta: "+5%", icon: Users, color: "from-fuchsia-500 to-pink-500" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <div key={c.name} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
            <div className={`h-10 w-10 rounded-lg bg-gradient-to-tr ${c.color} flex items-center justify-center text-white mb-4`}>
              <c.icon className="h-5 w-5" />
            </div>
            <p className="text-sm text-neutral-500">{c.name}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-semibold">{c.value}</p>
              <span className="text-xs px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">{c.delta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <h2 className="font-medium mb-3">Recent Reports</h2>
          <ul className="space-y-3">
            {["Pothole on Elm St.", "Broken streetlight", "Faded crosswalk", "Blocked drain"].map((t, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="text-sm">{t}</span>
                <button className="text-xs inline-flex items-center gap-1 text-sky-600 hover:underline">
                  View <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
          <h2 className="font-medium mb-3">Team Activity</h2>
          <ul className="space-y-3 text-sm">
            <li>Maintenance crew updated status on Issue #142 to Resolved.</li>
            <li>New comment on Issue #139 by Admin.</li>
            <li>3 new users joined this week.</li>
            <li>Weekly summary sent to stakeholders.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
