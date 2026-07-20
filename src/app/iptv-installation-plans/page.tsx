import type { Metadata } from "next";
import UrgencyBanner from "../../components/UrgencyBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Page Components
import PlansHero from "../../components/PlansHero";
import Pricing from "../../components/Pricing";
import PlanFeatures from "../../components/PlanFeatures";
import WhyChoosePlans from "../../components/WhyChoosePlans";
import PlanComparisonTable from "../../components/PlanComparisonTable";
import Devices from "../../components/Devices";
import PlanSetupSteps from "../../components/PlanSetupSteps";
import PlansFinalCTA from "../../components/PlansFinalCTA";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans | Cheap Best IPTV Subscription 2026",
  description: "Get the discounted IPTV Subscription Plans 2026. Best 4k IPTV Subscription at cheap rates. Buy a USA or UK IPTV Subscription. Starting from just £12.99",
  alternates: {
    canonical: "/iptv-installation-plans",
  },
};

export default function PlansPage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      
      <PlansHero />
      <Pricing />
      <PlanFeatures />
      <WhyChoosePlans />
      <PlanComparisonTable />
      <Devices />
      <PlanSetupSteps />
      <PlansFinalCTA />
      
      <Footer />
    </main>
  );
}
