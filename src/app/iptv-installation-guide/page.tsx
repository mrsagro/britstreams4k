import type { Metadata } from "next";
import UrgencyBanner from "../../components/UrgencyBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Page Components
import GuideHero from "../../components/GuideHero";
import GuideSupported from "../../components/GuideSupported";
import DeviceAccordion from "../../components/DeviceAccordion";
import GuideTroubleshooting from "../../components/GuideTroubleshooting";
import GuideFinalCTA from "../../components/GuideFinalCTA";

export const metadata: Metadata = {
  title: "IPTV Installation Guide Free | How to Set Up or Install IPTV",
  description: "Step-by-step guide to set up or install IPTV on Firestick, Android, Smart TV, iPhone or iOS, Windows PC, Mac, MAG Box, STB Emulator & Roku in under 5 minutes",
  alternates: {
    canonical: "/iptv-installation-guide",
  },
};

export default function GuidePage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      
      <GuideHero />
      <GuideSupported />
      <DeviceAccordion />
      <GuideTroubleshooting />
      <GuideFinalCTA />
      
      <Footer />
    </main>
  );
}
