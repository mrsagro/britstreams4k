import Link from "next/link";
import { siteConfig } from "../config";

export default function GuideHero() {
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
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 68, 255, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>IPTV Installation Guide Free</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>
            IPTV Installation Guide | <span style={{ color: 'var(--primary)' }}>How to Set Up or Install IPTV on Any Device?</span>
          </h1>
          
          <p className="text-muted" style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem', 
            maxWidth: '800px', 
            margin: '0 auto 1rem auto', 
            lineHeight: 1.8,
          }}>
            This complete IPTV installation guide helps you set up your IPTV account on every major device in simple, easy steps. All methods use your IPTV login credentials: the username, password, and server URL that are sent to your WhatsApp or email after you subscribe.
          </p>

          <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Do not have a subscription yet?
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/iptv-installation-plans" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Check IPTV Subscription Plans
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I need help setting up my IPTV.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Get Set Up Help on WhatsApp
            </a>
          </div>

          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: '1.5rem',
            padding: '2rem'
          }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>10+</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Device Types</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--success)' }}>&lt; 5</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Minutes to Set Up</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#ff9900' }}>24/7</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Setup Support</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Free Assistance</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
