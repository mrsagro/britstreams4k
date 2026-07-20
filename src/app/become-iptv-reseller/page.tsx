import type { Metadata } from "next";
import UrgencyBanner from "../../components/UrgencyBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Page Components
import ResellerHero from "../../components/ResellerHero";
import ResellerDashboardFeatures from "../../components/ResellerDashboardFeatures";
import ResellerCreditsInfo from "../../components/ResellerCreditsInfo";
import ResellerManagementTable from "../../components/ResellerManagementTable";
import ResellerWhyChoose from "../../components/ResellerWhyChoose";
import ResellerSteps from "../../components/ResellerSteps";
import ResellerFinalCTA from "../../components/ResellerFinalCTA";

export const metadata: Metadata = {
  title: "Become IPTV Reseller | Get IPTV Reseller Panel UK & Earn Money",
  description: "Start your IPTV reseller business UK today with a fully loaded reseller panel. Buy credits, create accounts, set your own prices, and keep 100% of your profits. Non-expiring credits and 24/7 support available. Free trial available.",
  alternates: {
    canonical: "/become-iptv-reseller",
  },
};

export default function ResellerPage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      
      <ResellerHero />
      <ResellerDashboardFeatures />
      <ResellerCreditsInfo />
      <ResellerManagementTable />
      <ResellerWhyChoose />
      <ResellerSteps />
      <ResellerFinalCTA />
      
      <Footer />
    </main>
  );
}
