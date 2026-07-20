import Link from "next/link";
import { siteConfig } from "../config";

export default function FinalCTA() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0, 68, 255, 0.1) 0%, rgba(20, 20, 20, 1) 100%)', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 68, 255, 0.3)', 
          borderRadius: '2rem', 
          padding: '5rem 3rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(0, 68, 255, 0.1)'
        }}>
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            Ready for the best <span style={{ color: 'var(--primary)' }}>IPTV UK experience?</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Join thousands of worldwide viewers streaming live TV, sport, and movies in 4K, with zero buffering and full support.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary" 
              style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              24h Free Trial
            </a>
            <Link href="/contact-us" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
