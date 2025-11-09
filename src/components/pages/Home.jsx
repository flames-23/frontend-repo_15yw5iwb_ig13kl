import Hero from "../Hero";
import StatsGrid from "../StatsGrid";
import RecentActivity from "../RecentActivity";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsGrid />
      <RecentActivity />
      <Footer />
    </div>
  );
}
