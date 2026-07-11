import UrgencyBanner from "../components/UrgencyBanner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Channels from "../components/Channels";
import HowItWorks from "../components/HowItWorks";
import Devices from "../components/Devices";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Comparison from "../components/Comparison";
import Showcase from "../components/Showcase";
import VodSlider from "../components/VodSlider";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      <Hero />
      <Features />
      <Channels />
      <VodSlider />
      <HowItWorks />
      <Devices />
      <Pricing />
      <Testimonials />
      <Comparison />
      <Showcase />
      <FAQ />
      <Footer />
    </main>
  );
}
