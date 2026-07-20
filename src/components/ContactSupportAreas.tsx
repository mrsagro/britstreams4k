import { CheckCircle2 } from "lucide-react";

export default function ContactSupportAreas() {
  const areas = [
    "IPTV Account Activation",
    "24 Hour Free Trial Setup",
    "Device Installation Guide",
    "IPTV Login Credentials Support",
    "Subscription Plan Queries",
    "Reseller Panel Help",
    "EPG and Catch-Up Issues",
    "VPN Setup Guidance"
  ];

  return (
    <section className="section" style={{ background: '#050505', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="heading-lg" style={{ textTransform: 'uppercase' }}>
            Common IPTV <span style={{ color: 'var(--primary)' }}>Support Areas</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {areas.map((area, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              background: 'rgba(255,255,255,0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              padding: '1.25rem 1.5rem', 
              borderRadius: '1rem',
              transition: 'all 0.3s ease'
            }}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0 }} />
              <span style={{ color: '#e4e4e7', fontSize: '1.05rem', fontWeight: 600 }}>
                {area}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
