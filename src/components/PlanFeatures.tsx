import { Zap, MonitorSmartphone, Settings, Key, HeadphonesIcon, BookOpen } from "lucide-react";

export default function PlanFeatures() {
  const features = [
    {
      icon: <Zap size={28} />,
      title: "Instant IPTV Activation",
      desc: "Your IPTV login details land on your WhatsApp or email within minutes of payment confirmation.",
      color: "var(--primary)",
      bg: "rgba(0, 68, 255, 0.1)"
    },
    {
      icon: <MonitorSmartphone size={28} />,
      title: "Works on Every Device",
      desc: "Stream on Firestick, Smart TV, Android, iPhone, tablets, MAG Box, and more without any issues.",
      color: "var(--success)",
      bg: "rgba(16, 185, 129, 0.1)"
    },
    {
      icon: <Settings size={28} />,
      title: "Simple App Setup",
      desc: "Add your IPTV playlist link into any compatible player app and start watching straight away.",
      color: "#ff9900",
      bg: "rgba(255, 153, 0, 0.1)"
    },
    {
      icon: <Key size={28} />,
      title: "Xtream Codes Login Access",
      desc: "Connect easily using your username, password, and server URL on any device you own.",
      color: "#ec4899",
      bg: "rgba(236, 72, 153, 0.1)"
    },
    {
      icon: <HeadphonesIcon size={28} />,
      title: "Full 24/7 Customer Support",
      desc: "Our real human support team is always available on WhatsApp at any hour of the day.",
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)"
    },
    {
      icon: <BookOpen size={28} />,
      title: "Free Installation Guide",
      desc: "We guide you through setup on any compatible device completely free of charge anytime.",
      color: "var(--accent)",
      bg: "rgba(255, 17, 0, 0.1)"
    }
  ];

  return (
    <section className="section" style={{ background: '#020202', position: 'relative' }}>
      
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
            Everything Included in Your <span style={{ color: 'var(--primary)' }}>IPTV Subscription Plan</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem' }}>
            Our cheap IPTV subscription plan comes with everything you need to start streaming instantly from day one.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              background: 'rgba(255,255,255,0.02)', 
              padding: '2rem', 
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{ 
                background: feature.bg, 
                width: '56px', 
                height: '56px', 
                borderRadius: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: feature.color,
                marginBottom: '0.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
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
