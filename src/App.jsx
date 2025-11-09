import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsGrid from "./components/StatsGrid";
import RecentActivity from "./components/RecentActivity";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />
      <StatsGrid />
      <RecentActivity />
      <Footer />
    </div>
  );
}

export default App;
