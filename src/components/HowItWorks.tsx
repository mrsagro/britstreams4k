import { CreditCard, MessageCircle, PlayCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Plan",
      description: "Select from our 1, 6, or 12-month packages. Secure checkout with instant automated processing.",
      icon: <CreditCard size={40} />,
      color: "#0044ff",
      glow: "rgba(0, 68, 255, 0.4)"
    },
    {
      num: "02",
      title: "Get Credentials",
      description: "Instantly receive your premium login details and simple step-by-step setup instructions via WhatsApp.",
      icon: <MessageCircle size={40} />,
      color: "#8b5cf6",
      glow: "rgba(139, 92, 246, 0.4)"
    },
    {
      num: "03",
      title: "Start Streaming",
      description: "Log in to your Smart TV, Firestick, or phone and instantly unlock 20,000+ channels in 4K.",
      icon: <PlayCircle size={40} />,
      color: "#10b981",
      glow: "rgba(16, 185, 129, 0.4)"
    }
  ];

  return (
    <section id="how-it-works" className="section" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '400px',
        background: 'radial-gradient(circle at top, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>
            Get Started in <span style={{ color: 'var(--primary)', textShadow: '0 0 20px rgba(0,68,255,0.4)' }}>5 Minutes</span>
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            No technical skills required. Our seamless process gets you up and running instantly.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '2.5rem', 
          position: 'relative' 
        }}>
          {/* Animated Connecting Line (Hidden on Mobile) */}
          <div className="connecting-line" style={{
            position: 'absolute',
            top: '4.5rem',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 20%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 80%, transparent 100%)',
            zIndex: 0
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              height: '100%',
              width: '100%',
              background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
              animation: 'scanline 3s linear infinite',
              opacity: 0.5
            }}></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in hover-card" style={{ 
              position: 'relative', 
              zIndex: 1, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '2rem',
              padding: '2.5rem 2rem',
              background: 'linear-gradient(180deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.9) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '1.5rem',
              boxShadow: '0 15px 35px -10px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}>
              {/* Massive Number Watermark */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '0',
                fontSize: '8rem',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.03)',
                lineHeight: 1,
                zIndex: 0,
                pointerEvents: 'none'
              }}>
                {step.num}
              </div>

              {/* Glowing Icon Orb */}
              <div style={{
                position: 'relative',
                width: '6rem',
                height: '6rem',
                borderRadius: '50%',
                background: 'rgba(10,10,10,0.8)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: step.color,
                boxShadow: `inset 0 0 20px ${step.glow}, 0 10px 20px -5px rgba(0,0,0,0.5)`,
                zIndex: 1
              }}>
                {/* Ambient drop shadow behind icon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  height: '100%',
                  background: step.color,
                  filter: 'blur(15px)',
                  opacity: 0.2,
                  borderRadius: '50%',
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>{step.title}</h3>
                <p className="text-muted" style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
