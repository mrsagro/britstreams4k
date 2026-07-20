import type { Metadata } from "next";
import UrgencyBanner from "../../components/UrgencyBanner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Page Components
import ContactHero from "../../components/ContactHero";
import ContactFreeTrial from "../../components/ContactFreeTrial";
import ContactAssistance from "../../components/ContactAssistance";
import ContactSupportAreas from "../../components/ContactSupportAreas";
import ContactHowWeHelp from "../../components/ContactHowWeHelp";
import GuideSupported from "../../components/GuideSupported"; // Reused from Guide Page
import ContactFinalCTA from "../../components/ContactFinalCTA";

export const metadata: Metadata = {
  title: "Contact Us for IPTV Free Trial, Setup Guide & 24/7 Support",
  description: "Have a question about your IPTV subscription? We provide full support for device installation, setup guidance, IPTV login configuration, account activation, and subscription renewals. Our real human support team is available 24/7.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return (
    <main>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <UrgencyBanner />
        <Header />
      </div>
      
      <ContactHero />
      <ContactFreeTrial />
      <ContactAssistance />
      <ContactSupportAreas />
      <ContactHowWeHelp />
      <GuideSupported />
      <ContactFinalCTA />
      
      <Footer />
    </main>
  );
}
