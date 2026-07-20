"use client";

import { Zap, ShieldCheck, Tv, MonitorSmartphone, LayoutGrid, ServerCrash } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Ultra Fast & Stable UK Servers",
      desc: "Built on UK-routed infrastructure for fast IPTV UK streaming. Stable connections mean your channel switches instantly.",
      color: "var(--primary)",
      bg: "rgba(0, 68, 255, 0.1)"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Fully Legal UK IPTV Streaming",
      desc: "Britstreams4K only distributes properly licensed content. Legal IPTV UK you can trust, with no grey areas and no risk to your account.",
      color: "var(--success)",
      bg: "rgba(16, 185, 129, 0.1)"
    },
    {
      icon: <Tv size={32} />,
      title: "True 4K & UHD Picture Quality",
      desc: "Watch in crisp HD, 4K, or UHD IPTV UK quality on every supported channel.",
      color: "#ff9900",
      bg: "rgba(255, 153, 0, 0.1)"
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "All Devices Compatibility",
      desc: "Firestick, Smart TV, Android, iOS, or PC, Britstreams4K works on every device. One subscription, no extra hardware needed.",
      color: "#ec4899",
      bg: "rgba(236, 72, 153, 0.1)"
    },
    {
      icon: <LayoutGrid size={32} />,
      title: "Thousands of Premium Live Channels",
      desc: "Access thousands of live IPTV channels UK-wide. Sports, movies, news, web series, kids' content, and more are included.",
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)"
    },
    {
      icon: <ServerCrash size={32} />,
      title: "Zero Buffering, Even at Peak Times",
      desc: "Our servers are built for peak-hour demand across the UK. IPTV no buffering is the standard here, not the exception.",
      color: "var(--accent)",
      bg: "rgba(255, 17, 0, 0.1)"
    }
  ];

  return (
    <section id="features" className="section" style={{ background: '#050505', position: 'relative' }}>
      
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            WHY THOUSANDS OF CUSTOMERS TRUST <span style={{ color: 'var(--primary)' }}>BRITSTREAMS4K</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem' }}>
            Everything a UK IPTV subscription should be, in one service.
          </p>
        </div>

        <div className="responsive-grid">
          {features.map((feature, index) => (
            <div key={index} className="glass" style={{ 
              padding: '2.5rem 2rem', 
              borderRadius: '1.5rem',
              borderTop: `3px solid ${feature.color}`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = `0 15px 30px ${feature.bg}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ 
                background: feature.bg, 
                width: '64px', 
                height: '64px', 
                borderRadius: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: feature.color,
                marginBottom: '1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
