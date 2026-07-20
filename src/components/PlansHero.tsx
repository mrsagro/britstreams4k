import Link from "next/link";
import { siteConfig } from "../config";

export default function PlansHero() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '6rem',
      background: 'linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(2,2,2,1) 100%)',
      overflow: 'hidden',
      zIndex: 1
    }}>
      {/* Abstract Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 68, 255, 0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255, 17, 0, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Cheap & Best IPTV Subscription 2026</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>
            IPTV Subscription Plans | <span style={{ color: 'var(--primary)' }}>Buy Cheap Best IPTV Subscription 2026</span>
          </h1>
          
          <p className="text-muted" style={{ 
            fontSize: '1.25rem', 
            marginBottom: '3rem', 
            maxWidth: '750px', 
            margin: '0 auto 3rem auto', 
            lineHeight: 1.8,
          }}>
            Get the best IPTV subscription UK with instant activation. Buy cheap IPTV plans and get access to 40,000+ channels, including Sky Sports, BT Sport, Premier League and many more. Free trial available.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#plans" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              View All Plans
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', borderRadius: '999px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              Get Free 24h Trial
            </a>
            <Link href="/iptv-installation-guide" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Setup Guide
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
