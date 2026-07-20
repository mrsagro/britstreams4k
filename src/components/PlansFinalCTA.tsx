import Link from "next/link";
import { siteConfig } from "../config";

export default function PlansFinalCTA() {
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
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            YOUR PERFECT IPTV SUBSCRIPTION IS <span style={{ color: 'var(--primary)' }}>ONE CLICK AWAY</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Get a cheap IPTV subscription with instant activation, zero buffering, and 40,000+ channels. Try it free for 24 hours with absolutely no risk.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              View All Plans
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              Get Free 24h Trial
            </a>
            <Link href="/iptv-installation-guide" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              Free Setup Guide
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
