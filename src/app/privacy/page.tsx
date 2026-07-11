import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | BritStream 4K",
  description: "Learn how BritStream 4K protects and manages your data with our secure IPTV services.",
};

export default function Privacy() {
  return (
    <main>
      <Header />
      <section className="section" style={{ background: 'var(--background)', paddingTop: '150px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>Privacy <span style={{ color: 'var(--primary)' }}>Policy</span></h1>
          
          <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p><strong>1. Information Collection</strong><br/>We collect minimal personal information necessary to provide our service, primarily your contact details (WhatsApp/Telegram number or email) for account delivery and support purposes.</p>
            
            <p><strong>2. Use of Information</strong><br/>Your information is strictly used for account management, providing customer support, and sending important service updates. We do not use your data for third-party marketing.</p>
            
            <p><strong>3. Data Protection</strong><br/>We implement industry-standard security measures to protect your data. We do not store any payment or credit card information on our servers; all transactions are handled securely by third-party payment processors.</p>
            
            <p><strong>4. Data Sharing</strong><br/>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except where required by law.</p>
            
            <p><strong>5. Cookies</strong><br/>Our website uses essential cookies to improve user experience and analyze website traffic anonymously.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
