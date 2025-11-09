import { Flag, CheckCircle2, Clock, Users } from "lucide-react";

export default function StatsGrid() {
  const stats = [
    { name: "Total Reports", value: "1,284", icon: Flag, color: "from-sky-500 to-indigo-500" },
    { name: "Completed", value: "932", icon: CheckCircle2, color: "from-emerald-500 to-teal-500" },
    { name: "In Progress", value: "241", icon: Clock, color: "from-amber-500 to-orange-500" },
    { name: "Active Users", value: "6,431", icon: Users, color: "from-fuchsia-500 to-pink-500" },
  ];

  return (
    <section id="dashboard" className="py-14 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-semibold mb-6">Citywide snapshot</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.name} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-tr ${s.color} flex items-center justify-center text-white mb-4`}>
                <s.icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-neutral-500">{s.name}</p>
              <p className="text-2xl font-semibold mt-1">{s.value}</p>
              <div className="mt-3 h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div className={`h-full rounded-full bg-gradient-to-r ${s.color}`} style={{ width: `${Math.min(100, Math.random() * 30 + 65)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
