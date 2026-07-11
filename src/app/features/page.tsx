import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailedFeatures from "../../components/DetailedFeatures";

export const metadata = {
  title: "Premium IPTV Features | BritStream 4K",
  description: "Discover why BritStream 4K is the UK's leading IPTV service. Learn about our Anti-Freeze tech, 4K VOD, and device compatibility.",
};

export default function FeaturesPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '8rem', minHeight: '100vh', background: 'var(--background)' }}>
        <DetailedFeatures />
      </div>
      <Footer />
    </main>
  );
}
