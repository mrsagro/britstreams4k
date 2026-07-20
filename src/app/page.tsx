import UrgencyBanner from "../components/UrgencyBanner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import HowItWorks from "../components/HowItWorks";
import Devices from "../components/Devices";
import SportsSection from "../components/SportsSection";
import Channels from "../components/Channels";
import Comparison from "../components/Comparison";
import ResellerCTA from "../components/ResellerCTA";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      <Hero />
      <AboutSection />
      <Features />
      <Pricing />
      <HowItWorks />
      <Devices />
      <SportsSection />
      <Channels />
      <Comparison />
      <ResellerCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
