import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../config";

export default function WhyChoosePlans() {
  const whatsappNumber = siteConfig.contact.whatsappNumber;
  const reasons = [
    "Instant IPTV Activation Every Time",
    "24/7 Real Human Support",
    "Flexible Monthly and Annual IPTV Subscription Plans",
    "Easy Setup and Free Installation Guidance",
    "Works on All Your Favourite Devices",
    "Zero Buffering Guaranteed"
  ];

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradient */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'linear-gradient(270deg, rgba(0, 68, 255, 0.05) 0%, transparent 100%)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            Why Choose Our <span style={{ color: 'var(--primary)' }}>IPTV Subscription UK?</span>
          </h2>
          
          <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.8 }}>
            Everything you actually want from a streaming service is already here. More channels, better quality, lower price, and real support whenever you need it.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '1rem',
            width: '100%',
            marginBottom: '4rem',
            textAlign: 'left'
          }}>
            {reasons.map((reason, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                background: 'rgba(255,255,255,0.03)',
                padding: '1.25rem 2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <CheckCircle2 size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: '#fff', fontSize: '1.125rem', fontWeight: 500 }}>{reason}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
              View All Plans
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I want to start my 24h Free Trial")}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline" 
              style={{ padding: '1rem 2.5rem', fontSize: '1.125rem', background: 'rgba(255,255,255,0.05)' }}
            >
              Get Free 24h Trial
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
