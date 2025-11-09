import { useState } from "react";
import { MapPin, Upload, Send } from "lucide-react";

export default function Report() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${title}\n${desc}\n${location}\n${file ? file.name : "No file"}`);
  }

  function useMyLocation() {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
    });
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Report an Issue</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="e.g., Pothole near 5th Ave" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Describe the issue" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <div className="flex gap-2">
              <input value={location} onChange={(e) => setLocation(e.target.value)} className="flex-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Lat, Lng" />
              <button type="button" onClick={useMyLocation} className="inline-flex items-center gap-2 px-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <MapPin className="h-4 w-4" /> Use GPS
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Photo</label>
            <label className="flex items-center justify-between gap-3 px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800">
              <span className="text-sm flex items-center gap-2"><Upload className="h-4 w-4" /> {file ? file.name : "Upload image"}</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            </label>
          </div>
        </div>
        <button type="submit" className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-md">
          Submit <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
