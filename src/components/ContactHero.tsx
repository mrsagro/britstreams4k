import Link from "next/link";
import { siteConfig } from "../config";
import { MessageCircle, HelpCircle, UserCheck } from "lucide-react";

export default function ContactHero() {
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
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 68, 255, 0.1) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <span style={{ color: '#25D366', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>24/7 Premium Support</span>
          </div>

          <h1 className="heading-xl" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>
            Contact Us for <span style={{ color: 'var(--primary)' }}>IPTV Free Trial, Setup Guide & 24/7 Support</span>
          </h1>
          
          <p className="text-muted" style={{ 
            fontSize: '1.25rem', 
            marginBottom: '3rem', 
            maxWidth: '800px', 
            margin: '0 auto 3rem auto', 
            lineHeight: 1.8,
          }}>
            Have a question about your IPTV subscription? We provide full support for device installation, setup guidance, IPTV login configuration, account activation, and subscription renewals. Our real human support team is available 24/7 and replies to every message within minutes.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to request my free IPTV trial.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
            >
              Request Free Trial
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', borderRadius: '999px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
            <Link href="/iptv-installation-guide" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              Setup Guide
            </Link>
          </div>

          {/* Quick Info Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '1rem' }}>
              <HelpCircle color="var(--primary)" size={24} />
              <span style={{ color: '#fff', fontWeight: 600 }}>Replies within Minutes</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '1rem' }}>
              <UserCheck color="var(--success)" size={24} />
              <span style={{ color: '#fff', fontWeight: 600 }}>Real Human Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.25rem', borderRadius: '1rem' }}>
              <MessageCircle color="#25D366" size={24} />
              <span style={{ color: '#fff', fontWeight: 600 }}>100% Free Assistance</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
