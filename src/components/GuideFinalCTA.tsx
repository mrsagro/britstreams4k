import Link from "next/link";
import { siteConfig } from "../config";

export default function GuideFinalCTA() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 20, 20, 1) 100%)', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(16, 185, 129, 0.3)', 
          borderRadius: '2rem', 
          padding: '5rem 3rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(16, 185, 129, 0.1)'
        }}>
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            READY TO START STREAMING? <span style={{ color: 'var(--success)' }}>YOUR IPTV SUBSCRIPTION IS WAITING.</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Pick your plan, get your login details within minutes, and follow the guide above to install IPTV on any device in under 5 minutes. Our team is available 24 hours a day on WhatsApp to help you with setup, installation, or anything else you need.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/iptv-installation-plans" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              Get My IPTV Plan
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)', fontWeight: 600, textDecoration: 'none', borderRadius: '999px' }}
            >
              Try Free for 24 Hours
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
