import { Tv, Monitor, Smartphone, Laptop, Box } from "lucide-react";

export default function Devices() {
  const devices = [
    { name: "Amazon Firestick", desc: "The ultimate IPTV experience", icon: <Tv size={48} strokeWidth={1.5} />, color: "#f97316", glow: "rgba(249, 115, 22, 0.5)" },
    { name: "Smart TVs", desc: "Samsung Tizen & LG WebOS", icon: <Monitor size={48} strokeWidth={1.5} />, color: "#3b82f6", glow: "rgba(59, 130, 246, 0.5)" },
    { name: "Android Boxes", desc: "Nvidia Shield, Formuler", icon: <Box size={48} strokeWidth={1.5} />, color: "#10b981", glow: "rgba(16, 185, 129, 0.5)" },
    { name: "Apple TV", desc: "Seamless 4K on tvOS", icon: <Box size={48} strokeWidth={1.5} />, color: "#e4e4e7", glow: "rgba(228, 228, 231, 0.5)" },
    { name: "Mobile Devices", desc: "iOS & Android Phones", icon: <Smartphone size={48} strokeWidth={1.5} />, color: "#ec4899", glow: "rgba(236, 72, 153, 0.5)" },
    { name: "Computers", desc: "Windows PC & Mac OS", icon: <Laptop size={48} strokeWidth={1.5} />, color: "#06b6d4", glow: "rgba(6, 182, 212, 0.5)" },
  ];

  return (
    <section id="devices" className="section" style={{ background: '#020202', position: 'relative', overflow: 'hidden' }}>
      
      {/* Abstract Background Grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0,
        opacity: 0.5,
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1rem', 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '999px',
            marginBottom: '1.5rem',
            color: '#a1a1aa',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Multi-Platform Support
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>
            Compatible with <span style={{ color: 'var(--primary)', textShadow: '0 0 30px rgba(0,68,255,0.5)' }}>All Devices</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            Whether you are at home on your big screen or traveling with your phone, BritStream 4K works flawlessly on any device.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '2rem' 
        }}>
          {devices.map((device, index) => (
            <div key={index} className="animate-fade-in hover-card" style={{
              background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.95) 100%)',
              border: '1px solid rgba(255,255,255,0.03)',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Background ambient glow matching device color */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '100px',
                background: device.color,
                filter: 'blur(50px)',
                opacity: 0.15,
                zIndex: 0,
                pointerEvents: 'none'
              }}></div>

              {/* Watermark Icon */}
              <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                color: device.color,
                opacity: 0.03,
                transform: 'scale(3) rotate(-10deg)',
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                {device.icon}
              </div>

              {/* Foreground Icon */}
              <div className="device-icon" style={{ 
                color: '#fff', 
                marginBottom: '1.5rem', 
                position: 'relative', 
                zIndex: 1,
                transition: 'all 0.4s ease' 
              }}>
                {device.icon}
              </div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{device.name}</h3>
                <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.5 }}>{device.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p className="text-muted" style={{ fontSize: '1rem', letterSpacing: '0.5px' }}>
            We provide setup guides for all devices immediately after purchase.
          </p>
        </div>

      </div>
    </section>
  );
}
