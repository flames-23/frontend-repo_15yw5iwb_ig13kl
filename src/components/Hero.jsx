import Spline from "@splinetool/react-spline";
import { ArrowRight, MapPin, Upload, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[78vh] md:h-[82vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient top/bottom for contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="uppercase tracking-widest text-xs md:text-sm text-sky-300/90">
            Citizen Road Feedback Management System
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            Keep your city's roads safe and smooth
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/90">
            Report road issues, track progress in real time, and collaborate with
            municipal teams. A clean, modern platform for citizens, staff, and
            administrators.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#report"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 rounded-md font-medium hover:bg-neutral-100"
            >
              Report an Issue <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 bg-sky-500/90 hover:bg-sky-500 text-white px-4 py-2 rounded-md font-medium"
            >
              View Dashboard
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-white/90">
            <Feature icon={<MapPin className="h-4 w-4" />} label="GPS Location" />
            <Feature icon={<Upload className="h-4 w-4" />} label="Photo Uploads" />
            <Feature icon={<BarChart3 className="h-4 w-4" />} label="Live Analytics" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-md px-3 py-2 backdrop-blur-sm">
      <span className="text-sky-300">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
