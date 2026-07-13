import { Zap, Tv, Video, Smartphone, Clapperboard, Headset, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Anti-Freeze 3.0",
      description: "Zero buffering during peak UK sports events.",
      icon: <Zap size={32} color="#00d4ff" strokeWidth={1.2} />,
      glowColor: "#00d4ff"
    },
    {
      title: "20,000+ Channels",
      description: "UK & International premium networks in HD/4K.",
      icon: <Tv size={32} color="#10b981" strokeWidth={1.2} />,
      glowColor: "#10b981"
    },
    {
      title: "True 4K UHD",
      description: "Crystal clear picture quality tailored to your speed.",
      icon: <Video size={32} color="#f59e0b" strokeWidth={1.2} />,
      glowColor: "#f59e0b"
    },
    {
      title: "All Devices",
      description: "Firestick, Smart TV, Android, Apple TV & more.",
      icon: <Smartphone size={32} color="#8b5cf6" strokeWidth={1.2} />,
      glowColor: "#8b5cf6"
    },
    {
      title: "VOD Library",
      description: "50,000+ Movies and TV Series updated weekly.",
      icon: <Clapperboard size={32} color="#ec4899" strokeWidth={1.2} />,
      glowColor: "#ec4899"
    },
    {
      title: "24/7 UK Support",
      description: "Instant help via WhatsApp from our UK team.",
      icon: <Headset size={32} color="#06b6d4" strokeWidth={1.2} />,
      glowColor: "#06b6d4"
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'var(--background)', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Everything You <span style={{ color: 'var(--primary)' }}>Need</span></h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            A fast, reliable, and premium streaming experience without the heavy price tag.
          </p>
        </div>

        {/* Premium 6-Card Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} className="hover-card" style={{ 
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '1.5rem',
              padding: '2rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
            }}>
              {/* Background ambient glow for icon */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                width: '64px',
                height: '64px',
                background: feature.glowColor,
                filter: 'blur(35px)',
                opacity: 0.15,
                zIndex: 0,
                transition: 'opacity 0.3s ease'
              }}></div>

              {/* Icon Container */}
              <div style={{ 
                position: 'relative',
                zIndex: 1,
                background: '#f9fafb',
                border: '1px solid #f3f4f6',
                width: '64px',
                height: '64px',
                minWidth: '64px',
                borderRadius: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `inset 0 0 20px ${feature.glowColor}10`
              }}>
                {feature.icon}
              </div>
              
              <div style={{ position: 'relative', zIndex: 1, paddingTop: '0.25rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Features Button */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/features" className="btn btn-primary hover-glow" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '1rem 2rem', 
            fontSize: '1rem',
            background: 'transparent',
            border: '1px solid var(--primary)',
            color: '#fff',
            boxShadow: 'none'
          }}>
            Explore Detailed Tech Specs
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
