import { useState } from "react";
import { User, Mail, Phone, Save } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("");

  function handleSave(e) {
    e.preventDefault();
    alert("Profile saved");
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800"><User className="h-4 w-4" /></div>
            <input value={name} onChange={(e) => setName(e.target.value)} className="flex-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800"><Mail className="h-4 w-4" /></div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800"><Phone className="h-4 w-4" /></div>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="flex-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" />
          </div>
        </div>
        <button type="submit" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md">
          <Save className="h-4 w-4" /> Save
        </button>
      </form>
    </div>
  );
}
