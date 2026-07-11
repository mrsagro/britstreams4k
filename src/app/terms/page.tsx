import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms & Conditions | BritStream 4K",
  description: "Read the terms and conditions for using BritStream 4K IPTV services in the UK.",
};

export default function Terms() {
  return (
    <main>
      <Header />
      <section className="section" style={{ background: 'var(--background)', paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>Terms & <span style={{ color: 'var(--primary)' }}>Conditions</span></h1>
          
          <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p><strong>1. Acceptance of Terms</strong><br/>By accessing or using BritStream 4K's services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our service.</p>
            
            <p><strong>2. Service Provision</strong><br/>BritStream 4K provides digital IPTV subscription services. The quality and availability of streams may vary depending on your internet connection, device, and geographical location.</p>
            
            <p><strong>3. Usage Restrictions</strong><br/>Your subscription is for personal, non-commercial use only. Sharing your account or using it on more devices than permitted by your plan will result in immediate suspension without refund.</p>
            
            <p><strong>4. Refunds and Cancellations</strong><br/>We offer a 24-hour money-back guarantee for new users who experience technical faults that cannot be resolved by our support team. After this period, all sales are final.</p>
            
            <p><strong>5. Content Availability</strong><br/>The channel lineup and VOD content are subject to change without prior notice. We do not guarantee the availability of any specific channel or event.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
