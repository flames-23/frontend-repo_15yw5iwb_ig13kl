import { MessageSquare, Image as ImageIcon, Mail, Send } from "lucide-react";

const items = [
  { type: "report", text: "New pothole reported near Oak Avenue.", icon: MessageSquare, time: "2m" },
  { type: "upload", text: "Staff uploaded progress photos for Task #142.", icon: ImageIcon, time: "12m" },
  { type: "email", text: "Thank-you email sent to top donors this week.", icon: Mail, time: "1h" },
  { type: "notify", text: "In-app notification: Issue #981 moved to Completed.", icon: Send, time: "2h" },
];

export default function RecentActivity() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold mb-4">Recent issues</h3>
            <ul className="space-y-3">
              {items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{it.text}</p>
                    <p className="text-xs text-neutral-500">{it.time} ago</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold mb-3">Donations leaderboard</h3>
            <ul className="space-y-3">
              {["Aisha K.", "Carlos M.", "Mei L.", "Ravi P."].map((name, i) => (
                <li key={name} className="flex items-center justify-between">
                  <span className="text-sm">{i + 1}. {name}</span>
                  <span className="text-sm font-medium">${(100 - i * 15).toFixed(0)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm">
              Your support accelerates road repairs across the city.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
