import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ResellerCTA() {
  const benefits = [
    "Buy credits at wholesale rates and earn more as your client base grows",
    "Full reseller panel to manage all your client lines and subscriptions in real time from one dashboard",
    "Instant activation for every client you add, with no delay",
    "24/7 WhatsApp support from our dedicated reseller support team",
    "Ready-to-use marketing resources that help you attract and convert clients faster",
    "Every client stream runs through VPN friendly servers, keeping their connection private and secure"
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0, 68, 255, 0.05), rgba(255, 17, 0, 0.05))', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.6)', 
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '2rem', 
          padding: '4rem 3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 17, 0, 0.1)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 17, 0, 0.2)' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>B2B Partnership</span>
            </div>
            
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Become an IPTV Reseller & Get an <span style={{ color: 'var(--primary)' }}>IPTV Reseller Panel</span>
            </h2>
            
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
              Turn your network into a steady monthly income by reselling Britstreams4K subscriptions under your own brand. No technical background needed. We handle the servers, you handle the clients, and you keep the profits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <CheckCircle2 size={24} color="var(--success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#e4e4e7', lineHeight: 1.6 }}>{benefit}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/become-iptv-reseller" className="btn btn-accent" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
              Start Your Reseller Business
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
