import Link from "next/link";
import { siteConfig } from "../config";
import { MessageCircle } from "lucide-react";

export default function ContactFinalCTA() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.1) 0%, rgba(20, 20, 20, 1) 100%)', zIndex: 0 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 51, 102, 0.3)', 
          borderRadius: '2rem', 
          padding: '5rem 3rem',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(255, 51, 102, 0.1)'
        }}>
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Contact US & GET YOUR <span style={{ color: 'var(--primary)' }}>FREE IPTV TRIAL TODAY</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Stop wondering and start watching. Get your free IPTV trial set up in minutes right now. Every question you have about our IPTV service gets answered within minutes on WhatsApp. Your free IPTV trial is one WhatsApp message away.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to Request Trex IPTV Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}
            >
              Request Trex IPTV Free Trial
            </a>
            <Link href="/iptv-installation-plans" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}>
              View Subscription Plans
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn" 
              style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.3)', fontWeight: 600, textDecoration: 'none', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageCircle size={20} />
              Contact Support
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
