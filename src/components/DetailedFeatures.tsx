import { Zap, Tv, Smartphone, ShieldCheck } from "lucide-react";

export default function DetailedFeatures() {
  const features = [
    {
      id: 1,
      title: "Zero Buffering with Anti-Freeze 3.0",
      subtitle: "Uninterrupted UK Sports",
      description: "Say goodbye to buffering exactly when your favourite team is about to score. Our exclusive Anti-Freeze 3.0 technology utilizes state-of-the-art global CDNs and enterprise-grade servers dedicated to UK viewers. Whether it's the Premier League, Champions League, or highly anticipated PPV boxing events, you are guaranteed a flawless, stutter-free stream in true 4K resolution. Experience sports the way they were meant to be seen.",
      icon: <Zap size={48} color="#fff" />,
      color: "linear-gradient(135deg, #0044ff 0%, #00d4ff 100%)",
      shadow: "rgba(0, 68, 255, 0.4)",
      align: "left"
    },
    {
      id: 2,
      title: "Massive 4K VOD & Live Channel Library",
      subtitle: "20,000+ Channels & 50,000+ Movies",
      description: "Why pay for multiple premium subscriptions when you can have everything in one place? BritStream 4K provides unrestricted access to every UK premium channel, international sports networks, and a massive, constantly updated library of Video On Demand (VOD) content. From the latest 4K cinematic releases to complete box sets of your favourite TV series, we've got your entire household's entertainment sorted.",
      icon: <Tv size={48} color="#fff" />,
      color: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      shadow: "rgba(16, 185, 129, 0.4)",
      align: "right"
    },
    {
      id: 3,
      title: "Compatible with All Your Devices",
      subtitle: "Firestick, Smart TV, Android & iOS",
      description: "We've made sure that setting up your IPTV service is as easy as possible. Our service is fully compatible with Amazon Firestick, Smart TVs (Samsung, LG), Android TV boxes, Apple TV, MAG boxes, PCs, and smartphones. With our simple step-by-step installation guides and 24/7 dedicated UK support team, you'll be streaming your favourite shows in under 5 minutes. No technical skills required.",
      icon: <Smartphone size={48} color="#fff" />,
      color: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      shadow: "rgba(245, 158, 11, 0.4)",
      align: "left"
    }
  ];

  return (
    <section className="section" style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient light */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,68,255,0.03) 0%, transparent 60%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.4rem 1.2rem', background: 'linear-gradient(90deg, rgba(0,68,255,0.1), rgba(0,212,255,0.1))', color: 'var(--primary)', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase', border: '1px solid rgba(0,68,255,0.2)' }}>
            Deep Dive
          </div>
          <h1 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: '3.5rem' }}>The Technology Behind <span style={{ background: 'linear-gradient(90deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>BritStream</span></h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
            We've engineered our streaming infrastructure specifically for the UK market, ensuring unmatched reliability, picture quality, and speed.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {features.map((feature) => (
            <div key={feature.id} style={{ 
              display: 'flex', 
              flexDirection: feature.align === 'left' ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '4rem',
              flexWrap: 'wrap'
            }}>
              
              {/* Text Content */}
              <div style={{ flex: '1 1 400px' }}>
                <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  {feature.subtitle}
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem', color: '#fff' }}>
                  {feature.title}
                </h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {feature.description}
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <ShieldCheck size={24} color="var(--success)" />
                  <span style={{ color: '#fff', fontWeight: 500 }}>Guaranteed Uptime 99.9%</span>
                </div>
              </div>

              {/* Visual Graphic */}
              <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <div className="glass" style={{ 
                  width: '100%', 
                  aspectRatio: '1 / 1', 
                  maxWidth: '450px',
                  borderRadius: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.9) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: `0 30px 60px -20px ${feature.shadow}`
                }}>
                  {/* Decorative background glow inside the box */}
                  <div style={{
                    position: 'absolute',
                    width: '150%',
                    height: '150%',
                    background: `radial-gradient(circle at center, ${feature.shadow} 0%, transparent 50%)`,
                    opacity: 0.5,
                    zIndex: 0
                  }}></div>

                  <div style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    background: feature.color,
                    padding: '2rem',
                    borderRadius: '2rem',
                    boxShadow: `0 20px 40px -10px ${feature.shadow}`
                  }}>
                    {feature.icon}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
