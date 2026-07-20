import Link from "next/link";
import { HeadphonesIcon } from "lucide-react";

export default function ContactAssistance() {
  return (
    <section className="section" style={{ background: '#020202', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(20, 20, 20, 1) 100%)', 
          border: '1px solid rgba(37, 211, 102, 0.2)', 
          borderRadius: '2rem', 
          padding: '4rem 3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem'
        }}>
          
          <div style={{ 
            background: 'rgba(37, 211, 102, 0.2)', 
            color: '#25D366', 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)'
          }}>
            <HeadphonesIcon size={40} />
          </div>

          <div>
            <h2 className="heading-lg" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              IPTV Setup Assistance and <span style={{ color: '#25D366' }}>Premium 24/7 Customer Support</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
              Need help getting your IPTV service installed or activated on your device? Our support team is available 24 hours a day and handles everything from basic setup questions to full device configuration.
            </p>
            <p className="text-muted" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
              From IPTV account activation and login setup to device installation and subscription management, we stay with every customer until they are watching their first channel without any trouble.
            </p>
          </div>

          <Link href="/iptv-installation-guide" className="btn" style={{ 
            padding: '1.25rem 3rem', 
            fontSize: '1.125rem', 
            background: '#25D366', 
            color: '#fff', 
            borderRadius: '999px', 
            fontWeight: 700,
            marginTop: '1rem' 
          }}>
            Free IPTV Set Up Guide
          </Link>

        </div>
      </div>
    </section>
  );
}
