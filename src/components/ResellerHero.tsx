import Link from "next/link";
import { siteConfig } from "../config";

export default function ResellerHero() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '6rem',
      background: 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(2,2,2,1) 100%)', // Slate-blue tint for B2B feel
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Abstract Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Profitable B2B Opportunity</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>
            Become IPTV Reseller | <span style={{ color: '#38bdf8' }}>Get IPTV Reseller Panel UK & Earn Money</span>
          </h1>
          
          <p className="text-muted" style={{ 
            fontSize: '1.25rem', 
            marginBottom: '3rem', 
            maxWidth: '800px', 
            margin: '0 auto 3rem auto', 
            lineHeight: 1.8,
          }}>
            Start your IPTV reseller business UK today with a fully loaded reseller panel. Buy credits, create accounts, set your own prices, and keep 100% of your profits. Non-expiring credits and 24/7 support available. Free trial available.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#plans" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#38bdf8', color: '#000', fontWeight: 700, borderRadius: '999px', textDecoration: 'none' }}>
              View Reseller Plans
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to get an IPTV Reseller Panel")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}
            >
              Get Your Panel
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', borderRadius: '999px', fontWeight: 600, textDecoration: 'none' }}
            >
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
